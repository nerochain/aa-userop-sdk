import { BigNumberish, BytesLike, ethers } from "ethers";
import { ERC4337 } from "../../constants";
import { UserOperationBuilder } from "../../builder";
import { BundlerJsonRpcProvider } from "../../provider";
import {
  signUserOpHash,
  estimateUserOperationGas,
  getGasPrice,
  neroPaymaster,
} from "../middleware";
import {
  EntryPoint,
  EntryPoint__factory,
  SimpleAccountFactory,
  SimpleAccountFactory__factory,
  SimpleAccount as SimpleAccountImpl,
  SimpleAccount__factory,
} from "../../typechain";
import {
  EOASigner,
  IPresetBuilderOpts,
  UserOperationMiddlewareFn,
} from "../../types";

export class SimpleAccount extends UserOperationBuilder {
  private signer: EOASigner;
  private provider: ethers.providers.JsonRpcProvider;
  private entryPoint: EntryPoint;
  private factory: SimpleAccountFactory;
  private initCode: string;
  private nonceKey: number;
  proxy: SimpleAccountImpl;

  private constructor(
    signer: EOASigner,
    rpcUrl: string,
    opts?: IPresetBuilderOpts
  ) {
    super();
    this.signer = signer;
    this.provider = new BundlerJsonRpcProvider(rpcUrl).setBundlerRpc(
      opts?.overrideBundlerRpc || ERC4337.BundlerRPC
    );
    this.entryPoint = EntryPoint__factory.connect(
      opts?.entryPoint || ERC4337.EntryPoint,
      this.provider
    );
    this.factory = SimpleAccountFactory__factory.connect(
      opts?.factory || ERC4337.SimpleAccount.Factory,
      this.provider
    );
    this.initCode = "0x";
    this.nonceKey = opts?.nonceKey || 0;
    this.proxy = SimpleAccount__factory.connect(
      ethers.constants.AddressZero,
      this.provider
    );
  }

  private resolveAccount: UserOperationMiddlewareFn = async (ctx) => {
    const [nonce, code] = await Promise.all([
      this.entryPoint.getNonce(ctx.op.sender, this.nonceKey),
      this.provider.getCode(ctx.op.sender),
    ]);
    ctx.op.nonce = nonce;
    ctx.op.initCode = code === "0x" ? this.initCode : "0x";
  };

  public static async init(
    signer: EOASigner,
    rpcUrl: string,
    opts?: IPresetBuilderOpts
  ): Promise<SimpleAccount> {
    const instance = new SimpleAccount(signer, rpcUrl, opts);

    try {
      instance.initCode = await ethers.utils.hexConcat([
        instance.factory.address,
        instance.factory.interface.encodeFunctionData("createAccount", [
          await instance.signer.getAddress(),
          ethers.BigNumber.from(opts?.salt ?? 0),
        ]),
      ]);
      await instance.entryPoint.callStatic.getSenderAddress(instance.initCode);

      throw new Error("getSenderAddress: unexpected result");
    } catch (error: any) {
      const addr = error?.errorArgs?.sender;
      if (!addr) throw error;

      instance.proxy = SimpleAccount__factory.connect(addr, instance.provider);
    }

    const base = instance
      .useDefaults({
        sender: instance.proxy.address,
        signature: await ethers.Wallet.createRandom().signMessage(
          ethers.utils.arrayify(ethers.utils.keccak256("0xdead"))
        ),
      })
      .useMiddleware(instance.resolveAccount)
      .useMiddleware(getGasPrice(instance.provider));

    base.useMiddleware(neroPaymaster());
    base.useMiddleware(estimateUserOperationGas(base.provider));

    return base.useMiddleware(signUserOpHash(base.signer));
  }

  execute(to: string, value: BigNumberish, data: BytesLike) {
    return this.setCallData(
      this.proxy.interface.encodeFunctionData("execute", [to, value, data])
    );
  }

  executeBatch(to: Array<string>, data: Array<BytesLike>) {
    return this.setCallData(
      this.proxy.interface.encodeFunctionData("executeBatch", [to, data])
    );
  }
}
