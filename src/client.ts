import { BigNumberish, ethers } from "ethers";
import { UserOperationBuilder } from "./builder";
import { ISendUserOperationOpts, IClientOpts, StateOverrideSet, UserOperationMiddlewareFn } from "./types";
import { EntryPoint, EntryPoint__factory } from "./typechain";
import { OpToJSON } from "./utils";
import { UserOperationMiddlewareCtx } from "./context";
import { ERC4337 } from "./constants";
import { BundlerJsonRpcProvider } from "./provider";
import { estimateUserOperationGas } from "./preset/middleware";

export class Client {
  private provider: ethers.providers.JsonRpcProvider;

  public entryPoint: EntryPoint;
  public chainId: BigNumberish;
  public waitTimeoutMs: number;
  public waitIntervalMs: number;

  private constructor(rpcUrl: string, opts?: IClientOpts) {
    this.provider = new BundlerJsonRpcProvider(rpcUrl).setBundlerRpc(
      opts?.overrideBundlerRpc || ERC4337.BundlerRPC
    );
    this.entryPoint = EntryPoint__factory.connect(
      opts?.entryPoint || ERC4337.EntryPoint,
      this.provider
    );
    this.chainId = ethers.BigNumber.from(1);
    this.waitTimeoutMs = 30000;
    this.waitIntervalMs = 5000;
  }

  public static async init(rpcUrl: string, opts?: IClientOpts) {
    const instance = new Client(rpcUrl, opts);
    instance.chainId = await instance.provider
      .getNetwork()
      .then((network) => ethers.BigNumber.from(network.chainId));

    return instance;
  }

  async buildUserOperation(
    builder: UserOperationBuilder,
    stateOverrides?: StateOverrideSet
  ) {
    return builder.buildOp(
      this.entryPoint.address,
      this.chainId,
      stateOverrides
    );
  }

  async getSupportedTokens(builder: UserOperationBuilder) {
    const userop = await builder.fillOp(this.entryPoint.address, this.chainId);
    const provider = new ethers.providers.JsonRpcProvider(builder.paymasterOptions['rpc'] ?? ERC4337.PaymasterRPC);
    const pm = (await provider.send("pm_supported_tokens", [
      userop,
      builder.paymasterOptions.apikey,
      this.entryPoint.address
    ]))
    return pm
  }

  async sendUserOperation(
    builder: UserOperationBuilder,
    opts?: ISendUserOperationOpts
  ) {    
    const dryRun = Boolean(opts?.dryRun);
    const op = await this.buildUserOperation(builder, opts?.stateOverrides);
    opts?.onBuild?.(op);

    const userOpHash = dryRun
      ? new UserOperationMiddlewareCtx(
          op,
          this.entryPoint.address,
          this.chainId,
          builder.paymasterOptions
        ).getUserOpHash()
      : ((await this.provider.send("eth_sendUserOperation", [
          OpToJSON(op),
          this.entryPoint.address,
        ])) as string);
    builder.resetOp();

    return {
      userOpHash,
      wait: async () => {
        if (dryRun) {
          return null;
        }

        const end = Date.now() + this.waitTimeoutMs;
        const block = await this.provider.getBlock("latest");
        while (Date.now() < end) {
          const events = await this.entryPoint.queryFilter(
            this.entryPoint.filters.UserOperationEvent(userOpHash),
            Math.max(0, block.number - 100)
          );
          if (events.length > 0) {
            return events[0];
          }
          await new Promise((resolve) =>
            setTimeout(resolve, this.waitIntervalMs)
          );
        }

        return null;
      },
    };
  }
}
