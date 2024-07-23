import { ethers } from "ethers";
import { ISigner, UserOperationMiddlewareFn } from "../../types";
export declare const EOASignature: (signer: ethers.Signer) => UserOperationMiddlewareFn;
export declare const signUserOpHash: (signer: ISigner) => UserOperationMiddlewareFn;
