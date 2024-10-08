import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export type UserOperationStruct = {
    sender: string;
    nonce: BigNumberish;
    initCode: BytesLike;
    callData: BytesLike;
    callGasLimit: BigNumberish;
    verificationGasLimit: BigNumberish;
    preVerificationGas: BigNumberish;
    maxFeePerGas: BigNumberish;
    maxPriorityFeePerGas: BigNumberish;
    paymasterAndData: BytesLike;
    signature: BytesLike;
};
export type UserOperationStructOutput = [
    string,
    BigNumber,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string
] & {
    sender: string;
    nonce: BigNumber;
    initCode: string;
    callData: string;
    callGasLimit: BigNumber;
    verificationGasLimit: BigNumber;
    preVerificationGas: BigNumber;
    maxFeePerGas: BigNumber;
    maxPriorityFeePerGas: BigNumber;
    paymasterAndData: string;
    signature: string;
};
export declare namespace IDiamondCut {
    type FacetCutStruct = {
        facetAddress: string;
        action: BigNumberish;
        functionSelectors: BytesLike[];
    };
    type FacetCutStructOutput = [string, number, string[]] & {
        facetAddress: string;
        action: number;
        functionSelectors: string[];
    };
}
export interface BarzAccountFacetInterface extends utils.Interface {
    functions: {
        "entryPoint()": FunctionFragment;
        "execute(address,uint256,bytes)": FunctionFragment;
        "executeBatch(address[],uint256[],bytes[])": FunctionFragment;
        "getNonce()": FunctionFragment;
        "initialize(address,address,address,address,bytes)": FunctionFragment;
        "validateUserOp((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes32,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "entryPoint" | "execute" | "executeBatch" | "getNonce" | "initialize" | "validateUserOp"): FunctionFragment;
    encodeFunctionData(functionFragment: "entryPoint", values?: undefined): string;
    encodeFunctionData(functionFragment: "execute", values: [string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "executeBatch", values: [string[], BigNumberish[], BytesLike[]]): string;
    encodeFunctionData(functionFragment: "getNonce", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string, string, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "validateUserOp", values: [UserOperationStruct, BytesLike, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "entryPoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateUserOp", data: BytesLike): Result;
    events: {
        "AccountInitialized(address,bytes)": EventFragment;
        "DiamondCut(tuple[],address,bytes)": EventFragment;
        "VerificationFailure(bytes32)": EventFragment;
        "VerificationSuccess(bytes32)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AccountInitialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DiamondCut"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VerificationFailure"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VerificationSuccess"): EventFragment;
}
export interface AccountInitializedEventObject {
    entryPoint: string;
    ownerPublicKey: string;
}
export type AccountInitializedEvent = TypedEvent<[
    string,
    string
], AccountInitializedEventObject>;
export type AccountInitializedEventFilter = TypedEventFilter<AccountInitializedEvent>;
export interface DiamondCutEventObject {
    _diamondCut: IDiamondCut.FacetCutStructOutput[];
    _init: string;
    _calldata: string;
}
export type DiamondCutEvent = TypedEvent<[
    IDiamondCut.FacetCutStructOutput[],
    string,
    string
], DiamondCutEventObject>;
export type DiamondCutEventFilter = TypedEventFilter<DiamondCutEvent>;
export interface VerificationFailureEventObject {
    arg0: string;
}
export type VerificationFailureEvent = TypedEvent<[
    string
], VerificationFailureEventObject>;
export type VerificationFailureEventFilter = TypedEventFilter<VerificationFailureEvent>;
export interface VerificationSuccessEventObject {
    arg0: string;
}
export type VerificationSuccessEvent = TypedEvent<[
    string
], VerificationSuccessEventObject>;
export type VerificationSuccessEventFilter = TypedEventFilter<VerificationSuccessEvent>;
export interface BarzAccountFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BarzAccountFacetInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        entryPoint(overrides?: CallOverrides): Promise<[string]>;
        execute(_dest: string, _value: BigNumberish, _func: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        executeBatch(_dest: string[], _value: BigNumberish[], _func: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getNonce(overrides?: CallOverrides): Promise<[BigNumber]>;
        initialize(_verificationFacet: string, _anEntryPoint: string, _facetRegistry: string, _defaultFallBackHandler: string, _ownerPublicKey: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        validateUserOp(userOp: UserOperationStruct, userOpHash: BytesLike, missingAccountFunds: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    entryPoint(overrides?: CallOverrides): Promise<string>;
    execute(_dest: string, _value: BigNumberish, _func: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    executeBatch(_dest: string[], _value: BigNumberish[], _func: BytesLike[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getNonce(overrides?: CallOverrides): Promise<BigNumber>;
    initialize(_verificationFacet: string, _anEntryPoint: string, _facetRegistry: string, _defaultFallBackHandler: string, _ownerPublicKey: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    validateUserOp(userOp: UserOperationStruct, userOpHash: BytesLike, missingAccountFunds: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        entryPoint(overrides?: CallOverrides): Promise<string>;
        execute(_dest: string, _value: BigNumberish, _func: BytesLike, overrides?: CallOverrides): Promise<void>;
        executeBatch(_dest: string[], _value: BigNumberish[], _func: BytesLike[], overrides?: CallOverrides): Promise<void>;
        getNonce(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_verificationFacet: string, _anEntryPoint: string, _facetRegistry: string, _defaultFallBackHandler: string, _ownerPublicKey: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        validateUserOp(userOp: UserOperationStruct, userOpHash: BytesLike, missingAccountFunds: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "AccountInitialized(address,bytes)"(entryPoint?: string | null, ownerPublicKey?: BytesLike | null): AccountInitializedEventFilter;
        AccountInitialized(entryPoint?: string | null, ownerPublicKey?: BytesLike | null): AccountInitializedEventFilter;
        "DiamondCut(tuple[],address,bytes)"(_diamondCut?: null, _init?: null, _calldata?: null): DiamondCutEventFilter;
        DiamondCut(_diamondCut?: null, _init?: null, _calldata?: null): DiamondCutEventFilter;
        "VerificationFailure(bytes32)"(arg0?: null): VerificationFailureEventFilter;
        VerificationFailure(arg0?: null): VerificationFailureEventFilter;
        "VerificationSuccess(bytes32)"(arg0?: null): VerificationSuccessEventFilter;
        VerificationSuccess(arg0?: null): VerificationSuccessEventFilter;
    };
    estimateGas: {
        entryPoint(overrides?: CallOverrides): Promise<BigNumber>;
        execute(_dest: string, _value: BigNumberish, _func: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        executeBatch(_dest: string[], _value: BigNumberish[], _func: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getNonce(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_verificationFacet: string, _anEntryPoint: string, _facetRegistry: string, _defaultFallBackHandler: string, _ownerPublicKey: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        validateUserOp(userOp: UserOperationStruct, userOpHash: BytesLike, missingAccountFunds: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        entryPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        execute(_dest: string, _value: BigNumberish, _func: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        executeBatch(_dest: string[], _value: BigNumberish[], _func: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getNonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_verificationFacet: string, _anEntryPoint: string, _facetRegistry: string, _defaultFallBackHandler: string, _ownerPublicKey: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        validateUserOp(userOp: UserOperationStruct, userOpHash: BytesLike, missingAccountFunds: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
