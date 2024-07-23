import { BigNumberish, BytesLike } from "ethers";
import { UserOperationBuilder } from "../../builder";
import { BarzSecp256r1 } from "../signers";
import { BarzAccountFacet } from "../../typechain";
import { IPresetBuilderOpts } from "../../types";
export declare class Barz extends UserOperationBuilder {
    private signer;
    private provider;
    private entryPoint;
    private factory;
    private initCode;
    proxy: BarzAccountFacet;
    private constructor();
    private resolveAccount;
    static init(signer: BarzSecp256r1, rpcUrl: string, opts?: IPresetBuilderOpts): Promise<Barz>;
    execute(to: string, value: BigNumberish, data: BytesLike): this;
    executeBatch(to: Array<string>, value: Array<BigNumberish>, data: Array<BytesLike>): this;
}
