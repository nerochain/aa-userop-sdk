import { BigNumberish } from "ethers";
import { IUserOperationMiddlewareCtx, IUserOperation, StateOverrideSet } from "./types";
export declare class UserOperationMiddlewareCtx implements IUserOperationMiddlewareCtx {
    op: IUserOperation;
    readonly entryPoint: string;
    readonly chainId: BigNumberish;
    readonly stateOverrides?: StateOverrideSet | undefined;
    readonly paymasterOptions: any;
    constructor(op: IUserOperation, entryPoint: string, chainId: BigNumberish, paymasterOptions: any, stateOverrides?: StateOverrideSet);
    getUserOpHash(): string;
}
