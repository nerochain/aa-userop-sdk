import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export type ExecutionDetailStruct = {
    validUntil: BigNumberish;
    validAfter: BigNumberish;
    executor: string;
    validator: string;
};
export type ExecutionDetailStructOutput = [number, number, string, string] & {
    validUntil: number;
    validAfter: number;
    executor: string;
    validator: string;
};
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
export interface KernelInterface extends utils.Interface {
    functions: {
        "disableMode(bytes4)": FunctionFragment;
        "entryPoint()": FunctionFragment;
        "execute(address,uint256,bytes,uint8)": FunctionFragment;
        "getDefaultValidator()": FunctionFragment;
        "getDisabledMode()": FunctionFragment;
        "getExecution(bytes4)": FunctionFragment;
        "getLastDisabledTime()": FunctionFragment;
        "getNonce(uint192)": FunctionFragment;
        "getNonce()": FunctionFragment;
        "initialize(address,bytes)": FunctionFragment;
        "isValidSignature(bytes32,bytes)": FunctionFragment;
        "name()": FunctionFragment;
        "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
        "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
        "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
        "setDefaultValidator(address,bytes)": FunctionFragment;
        "setExecution(bytes4,address,address,uint48,uint48,bytes)": FunctionFragment;
        "upgradeTo(address)": FunctionFragment;
        "validateUserOp((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes32,uint256)": FunctionFragment;
        "version()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "disableMode" | "entryPoint" | "execute" | "getDefaultValidator" | "getDisabledMode" | "getExecution" | "getLastDisabledTime" | "getNonce(uint192)" | "getNonce()" | "initialize" | "isValidSignature" | "name" | "onERC1155BatchReceived" | "onERC1155Received" | "onERC721Received" | "setDefaultValidator" | "setExecution" | "upgradeTo" | "validateUserOp" | "version"): FunctionFragment;
    encodeFunctionData(functionFragment: "disableMode", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "entryPoint", values?: undefined): string;
    encodeFunctionData(functionFragment: "execute", values: [string, BigNumberish, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getDefaultValidator", values?: undefined): string;
    encodeFunctionData(functionFragment: "getDisabledMode", values?: undefined): string;
    encodeFunctionData(functionFragment: "getExecution", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getLastDisabledTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNonce(uint192)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getNonce()", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "isValidSignature", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "onERC1155BatchReceived", values: [string, string, BigNumberish[], BigNumberish[], BytesLike]): string;
    encodeFunctionData(functionFragment: "onERC1155Received", values: [string, string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "onERC721Received", values: [string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "setDefaultValidator", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "setExecution", values: [BytesLike, string, string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "upgradeTo", values: [string]): string;
    encodeFunctionData(functionFragment: "validateUserOp", values: [UserOperationStruct, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "version", values?: undefined): string;
    decodeFunctionResult(functionFragment: "disableMode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "entryPoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDefaultValidator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDisabledMode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getExecution", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLastDisabledTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNonce(uint192)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNonce()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isValidSignature", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155BatchReceived", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC721Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDefaultValidator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setExecution", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateUserOp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
    events: {
        "DefaultValidatorChanged(address,address)": EventFragment;
        "ExecutionChanged(bytes4,address,address)": EventFragment;
        "Upgraded(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "DefaultValidatorChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExecutionChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}
export interface DefaultValidatorChangedEventObject {
    oldValidator: string;
    newValidator: string;
}
export type DefaultValidatorChangedEvent = TypedEvent<[
    string,
    string
], DefaultValidatorChangedEventObject>;
export type DefaultValidatorChangedEventFilter = TypedEventFilter<DefaultValidatorChangedEvent>;
export interface ExecutionChangedEventObject {
    selector: string;
    executor: string;
    validator: string;
}
export type ExecutionChangedEvent = TypedEvent<[
    string,
    string,
    string
], ExecutionChangedEventObject>;
export type ExecutionChangedEventFilter = TypedEventFilter<ExecutionChangedEvent>;
export interface UpgradedEventObject {
    newImplementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;
export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;
export interface Kernel extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: KernelInterface;
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
        disableMode(_disableFlag: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        entryPoint(overrides?: CallOverrides): Promise<[string]>;
        execute(to: string, value: BigNumberish, data: BytesLike, operation: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getDefaultValidator(overrides?: CallOverrides): Promise<[string]>;
        getDisabledMode(overrides?: CallOverrides): Promise<[string]>;
        getExecution(_selector: BytesLike, overrides?: CallOverrides): Promise<[ExecutionDetailStructOutput]>;
        getLastDisabledTime(overrides?: CallOverrides): Promise<[number]>;
        "getNonce(uint192)"(key: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        "getNonce()"(overrides?: CallOverrides): Promise<[BigNumber]>;
        initialize(_defaultValidator: string, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        isValidSignature(hash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        name(overrides?: CallOverrides): Promise<[string]>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        setDefaultValidator(_defaultValidator: string, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setExecution(_selector: BytesLike, _executor: string, _validator: string, _validUntil: BigNumberish, _validAfter: BigNumberish, _enableData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        upgradeTo(_newImplementation: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        validateUserOp(userOp: UserOperationStruct, userOpHash: BytesLike, missingAccountFunds: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        version(overrides?: CallOverrides): Promise<[string]>;
    };
    disableMode(_disableFlag: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    entryPoint(overrides?: CallOverrides): Promise<string>;
    execute(to: string, value: BigNumberish, data: BytesLike, operation: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getDefaultValidator(overrides?: CallOverrides): Promise<string>;
    getDisabledMode(overrides?: CallOverrides): Promise<string>;
    getExecution(_selector: BytesLike, overrides?: CallOverrides): Promise<ExecutionDetailStructOutput>;
    getLastDisabledTime(overrides?: CallOverrides): Promise<number>;
    "getNonce(uint192)"(key: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    "getNonce()"(overrides?: CallOverrides): Promise<BigNumber>;
    initialize(_defaultValidator: string, _data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    isValidSignature(hash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<string>;
    name(overrides?: CallOverrides): Promise<string>;
    onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: CallOverrides): Promise<string>;
    onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: CallOverrides): Promise<string>;
    onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<string>;
    setDefaultValidator(_defaultValidator: string, _data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setExecution(_selector: BytesLike, _executor: string, _validator: string, _validUntil: BigNumberish, _validAfter: BigNumberish, _enableData: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    upgradeTo(_newImplementation: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    validateUserOp(userOp: UserOperationStruct, userOpHash: BytesLike, missingAccountFunds: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    version(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        disableMode(_disableFlag: BytesLike, overrides?: CallOverrides): Promise<void>;
        entryPoint(overrides?: CallOverrides): Promise<string>;
        execute(to: string, value: BigNumberish, data: BytesLike, operation: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getDefaultValidator(overrides?: CallOverrides): Promise<string>;
        getDisabledMode(overrides?: CallOverrides): Promise<string>;
        getExecution(_selector: BytesLike, overrides?: CallOverrides): Promise<ExecutionDetailStructOutput>;
        getLastDisabledTime(overrides?: CallOverrides): Promise<number>;
        "getNonce(uint192)"(key: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "getNonce()"(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_defaultValidator: string, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        isValidSignature(hash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<string>;
        name(overrides?: CallOverrides): Promise<string>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: CallOverrides): Promise<string>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: CallOverrides): Promise<string>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<string>;
        setDefaultValidator(_defaultValidator: string, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        setExecution(_selector: BytesLike, _executor: string, _validator: string, _validUntil: BigNumberish, _validAfter: BigNumberish, _enableData: BytesLike, overrides?: CallOverrides): Promise<void>;
        upgradeTo(_newImplementation: string, overrides?: CallOverrides): Promise<void>;
        validateUserOp(userOp: UserOperationStruct, userOpHash: BytesLike, missingAccountFunds: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        version(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "DefaultValidatorChanged(address,address)"(oldValidator?: string | null, newValidator?: string | null): DefaultValidatorChangedEventFilter;
        DefaultValidatorChanged(oldValidator?: string | null, newValidator?: string | null): DefaultValidatorChangedEventFilter;
        "ExecutionChanged(bytes4,address,address)"(selector?: BytesLike | null, executor?: string | null, validator?: string | null): ExecutionChangedEventFilter;
        ExecutionChanged(selector?: BytesLike | null, executor?: string | null, validator?: string | null): ExecutionChangedEventFilter;
        "Upgraded(address)"(newImplementation?: string | null): UpgradedEventFilter;
        Upgraded(newImplementation?: string | null): UpgradedEventFilter;
    };
    estimateGas: {
        disableMode(_disableFlag: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        entryPoint(overrides?: CallOverrides): Promise<BigNumber>;
        execute(to: string, value: BigNumberish, data: BytesLike, operation: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getDefaultValidator(overrides?: CallOverrides): Promise<BigNumber>;
        getDisabledMode(overrides?: CallOverrides): Promise<BigNumber>;
        getExecution(_selector: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getLastDisabledTime(overrides?: CallOverrides): Promise<BigNumber>;
        "getNonce(uint192)"(key: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "getNonce()"(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_defaultValidator: string, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        isValidSignature(hash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        setDefaultValidator(_defaultValidator: string, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setExecution(_selector: BytesLike, _executor: string, _validator: string, _validUntil: BigNumberish, _validAfter: BigNumberish, _enableData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        upgradeTo(_newImplementation: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        validateUserOp(userOp: UserOperationStruct, userOpHash: BytesLike, missingAccountFunds: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        disableMode(_disableFlag: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        entryPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        execute(to: string, value: BigNumberish, data: BytesLike, operation: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getDefaultValidator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDisabledMode(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getExecution(_selector: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLastDisabledTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getNonce(uint192)"(key: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getNonce()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_defaultValidator: string, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        isValidSignature(hash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setDefaultValidator(_defaultValidator: string, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setExecution(_selector: BytesLike, _executor: string, _validator: string, _validUntil: BigNumberish, _validAfter: BigNumberish, _enableData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        upgradeTo(_newImplementation: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        validateUserOp(userOp: UserOperationStruct, userOpHash: BytesLike, missingAccountFunds: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}