import { BigNumberish } from "ethers";
import { UserOperationBuilder } from "./builder";
import { ISendUserOperationOpts, IClientOpts, StateOverrideSet } from "./types";
import { EntryPoint } from "./typechain";
export declare class Client {
    private provider;
    entryPoint: EntryPoint;
    chainId: BigNumberish;
    waitTimeoutMs: number;
    waitIntervalMs: number;
    private constructor();
    static init(rpcUrl: string, opts?: IClientOpts): Promise<Client>;
    buildUserOperation(builder: UserOperationBuilder, stateOverrides?: StateOverrideSet): Promise<import("./types").IUserOperation>;
    getSupportedTokens(builder: UserOperationBuilder): Promise<any>;
    sendUserOperation(builder: UserOperationBuilder, opts?: ISendUserOperationOpts): Promise<{
        userOpHash: string;
        wait: () => Promise<import("./typechain/EntryPoint").UserOperationEventEvent | null>;
    }>;
}
