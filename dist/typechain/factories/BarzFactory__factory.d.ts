import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { BarzFactory, BarzFactoryInterface } from "../BarzFactory";
export declare class BarzFactory__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_accountFacet";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_entryPoint";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_facetRegistry";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_defaultFallback";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "BarzDeployed";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "accountFacet";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_verificationFacet";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "_owner";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "_salt";
            readonly type: "uint256";
        }];
        readonly name: "createAccount";
        readonly outputs: readonly [{
            readonly internalType: "contract Barz";
            readonly name: "barz";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "defaultFallback";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "entryPoint";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "facetRegistry";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_verificationFacet";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "_owner";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "_salt";
            readonly type: "uint256";
        }];
        readonly name: "getAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "barzAddress";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_accountFacet";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_verificationFacet";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_entryPoint";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_facetRegistry";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_defaultFallback";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "_ownerPublicKey";
            readonly type: "bytes";
        }];
        readonly name: "getBytecode";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "barzBytecode";
            readonly type: "bytes";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getCreationCode";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "creationCode";
            readonly type: "bytes";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    static createInterface(): BarzFactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BarzFactory;
}
