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
export interface BarzSecp256r1VerificationFacetInterface extends utils.Interface {
    functions: {
        "initializeSigner(bytes)": FunctionFragment;
        "isValidKeyType(bytes)": FunctionFragment;
        "isValidSignature(bytes32,bytes)": FunctionFragment;
        "owner()": FunctionFragment;
        "self()": FunctionFragment;
        "uninitializeSigner()": FunctionFragment;
        "validateOwnerSignature((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes32)": FunctionFragment;
        "validateOwnerSignatureSelector()": FunctionFragment;
        "validateSignature((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes32,uint256[2])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "initializeSigner" | "isValidKeyType" | "isValidSignature" | "owner" | "self" | "uninitializeSigner" | "validateOwnerSignature" | "validateOwnerSignatureSelector" | "validateSignature"): FunctionFragment;
    encodeFunctionData(functionFragment: "initializeSigner", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "isValidKeyType", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "isValidSignature", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "self", values?: undefined): string;
    encodeFunctionData(functionFragment: "uninitializeSigner", values?: undefined): string;
    encodeFunctionData(functionFragment: "validateOwnerSignature", values: [UserOperationStruct, BytesLike]): string;
    encodeFunctionData(functionFragment: "validateOwnerSignatureSelector", values?: undefined): string;
    encodeFunctionData(functionFragment: "validateSignature", values: [UserOperationStruct, BytesLike, [BigNumberish, BigNumberish]]): string;
    decodeFunctionResult(functionFragment: "initializeSigner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isValidKeyType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isValidSignature", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "self", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uninitializeSigner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateOwnerSignature", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateOwnerSignatureSelector", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateSignature", data: BytesLike): Result;
    events: {
        "SignerInitialized(bytes)": EventFragment;
        "SignerUninitialized()": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "SignerInitialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SignerUninitialized"): EventFragment;
}
export interface SignerInitializedEventObject {
    arg0: string;
}
export type SignerInitializedEvent = TypedEvent<[
    string
], SignerInitializedEventObject>;
export type SignerInitializedEventFilter = TypedEventFilter<SignerInitializedEvent>;
export interface SignerUninitializedEventObject {
}
export type SignerUninitializedEvent = TypedEvent<[
], SignerUninitializedEventObject>;
export type SignerUninitializedEventFilter = TypedEventFilter<SignerUninitializedEvent>;
export interface BarzSecp256r1VerificationFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BarzSecp256r1VerificationFacetInterface;
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
        initializeSigner(_publicKey: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        isValidKeyType(_publicKey: BytesLike, overrides?: CallOverrides): Promise<[boolean] & {
            isValid: boolean;
        }>;
        isValidSignature(_hash: BytesLike, _signature: BytesLike, overrides?: CallOverrides): Promise<[string] & {
            magicValue: string;
        }>;
        owner(overrides?: CallOverrides): Promise<[string] & {
            signer: string;
        }>;
        self(overrides?: CallOverrides): Promise<[string]>;
        uninitializeSigner(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        validateOwnerSignature(userOp: UserOperationStruct, userOpHash: BytesLike, overrides?: CallOverrides): Promise<[BigNumber] & {
            validationData: BigNumber;
        }>;
        validateOwnerSignatureSelector(overrides?: CallOverrides): Promise<[string] & {
            ownerSignatureValidatorSelector: string;
        }>;
        validateSignature(userOp: UserOperationStruct, userOpHash: BytesLike, q: [BigNumberish, BigNumberish], overrides?: CallOverrides): Promise<[BigNumber] & {
            isValid: BigNumber;
        }>;
    };
    initializeSigner(_publicKey: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    isValidKeyType(_publicKey: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    isValidSignature(_hash: BytesLike, _signature: BytesLike, overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    self(overrides?: CallOverrides): Promise<string>;
    uninitializeSigner(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    validateOwnerSignature(userOp: UserOperationStruct, userOpHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    validateOwnerSignatureSelector(overrides?: CallOverrides): Promise<string>;
    validateSignature(userOp: UserOperationStruct, userOpHash: BytesLike, q: [BigNumberish, BigNumberish], overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        initializeSigner(_publicKey: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        isValidKeyType(_publicKey: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        isValidSignature(_hash: BytesLike, _signature: BytesLike, overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        self(overrides?: CallOverrides): Promise<string>;
        uninitializeSigner(overrides?: CallOverrides): Promise<BigNumber>;
        validateOwnerSignature(userOp: UserOperationStruct, userOpHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        validateOwnerSignatureSelector(overrides?: CallOverrides): Promise<string>;
        validateSignature(userOp: UserOperationStruct, userOpHash: BytesLike, q: [BigNumberish, BigNumberish], overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "SignerInitialized(bytes)"(arg0?: null): SignerInitializedEventFilter;
        SignerInitialized(arg0?: null): SignerInitializedEventFilter;
        "SignerUninitialized()"(): SignerUninitializedEventFilter;
        SignerUninitialized(): SignerUninitializedEventFilter;
    };
    estimateGas: {
        initializeSigner(_publicKey: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        isValidKeyType(_publicKey: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        isValidSignature(_hash: BytesLike, _signature: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        self(overrides?: CallOverrides): Promise<BigNumber>;
        uninitializeSigner(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        validateOwnerSignature(userOp: UserOperationStruct, userOpHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        validateOwnerSignatureSelector(overrides?: CallOverrides): Promise<BigNumber>;
        validateSignature(userOp: UserOperationStruct, userOpHash: BytesLike, q: [BigNumberish, BigNumberish], overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        initializeSigner(_publicKey: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        isValidKeyType(_publicKey: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isValidSignature(_hash: BytesLike, _signature: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        self(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        uninitializeSigner(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        validateOwnerSignature(userOp: UserOperationStruct, userOpHash: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validateOwnerSignatureSelector(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validateSignature(userOp: UserOperationStruct, userOpHash: BytesLike, q: [BigNumberish, BigNumberish], overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
