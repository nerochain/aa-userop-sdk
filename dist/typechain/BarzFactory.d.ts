import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface BarzFactoryInterface extends utils.Interface {
    functions: {
        "accountFacet()": FunctionFragment;
        "createAccount(address,bytes,uint256)": FunctionFragment;
        "defaultFallback()": FunctionFragment;
        "entryPoint()": FunctionFragment;
        "facetRegistry()": FunctionFragment;
        "getAddress(address,bytes,uint256)": FunctionFragment;
        "getBytecode(address,address,address,address,address,bytes)": FunctionFragment;
        "getCreationCode()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "accountFacet" | "createAccount" | "defaultFallback" | "entryPoint" | "facetRegistry" | "getAddress" | "getBytecode" | "getCreationCode"): FunctionFragment;
    encodeFunctionData(functionFragment: "accountFacet", values?: undefined): string;
    encodeFunctionData(functionFragment: "createAccount", values: [string, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "defaultFallback", values?: undefined): string;
    encodeFunctionData(functionFragment: "entryPoint", values?: undefined): string;
    encodeFunctionData(functionFragment: "facetRegistry", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAddress", values: [string, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getBytecode", values: [string, string, string, string, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "getCreationCode", values?: undefined): string;
    decodeFunctionResult(functionFragment: "accountFacet", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "defaultFallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "entryPoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "facetRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBytecode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCreationCode", data: BytesLike): Result;
    events: {
        "BarzDeployed(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "BarzDeployed"): EventFragment;
}
export interface BarzDeployedEventObject {
    arg0: string;
}
export type BarzDeployedEvent = TypedEvent<[string], BarzDeployedEventObject>;
export type BarzDeployedEventFilter = TypedEventFilter<BarzDeployedEvent>;
export interface BarzFactory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BarzFactoryInterface;
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
        accountFacet(overrides?: CallOverrides): Promise<[string]>;
        createAccount(_verificationFacet: string, _owner: BytesLike, _salt: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        defaultFallback(overrides?: CallOverrides): Promise<[string]>;
        entryPoint(overrides?: CallOverrides): Promise<[string]>;
        facetRegistry(overrides?: CallOverrides): Promise<[string]>;
        getAddress(_verificationFacet: string, _owner: BytesLike, _salt: BigNumberish, overrides?: CallOverrides): Promise<[string] & {
            barzAddress: string;
        }>;
        getBytecode(_accountFacet: string, _verificationFacet: string, _entryPoint: string, _facetRegistry: string, _defaultFallback: string, _ownerPublicKey: BytesLike, overrides?: CallOverrides): Promise<[string] & {
            barzBytecode: string;
        }>;
        getCreationCode(overrides?: CallOverrides): Promise<[string] & {
            creationCode: string;
        }>;
    };
    accountFacet(overrides?: CallOverrides): Promise<string>;
    createAccount(_verificationFacet: string, _owner: BytesLike, _salt: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    defaultFallback(overrides?: CallOverrides): Promise<string>;
    entryPoint(overrides?: CallOverrides): Promise<string>;
    facetRegistry(overrides?: CallOverrides): Promise<string>;
    getAddress(_verificationFacet: string, _owner: BytesLike, _salt: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getBytecode(_accountFacet: string, _verificationFacet: string, _entryPoint: string, _facetRegistry: string, _defaultFallback: string, _ownerPublicKey: BytesLike, overrides?: CallOverrides): Promise<string>;
    getCreationCode(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        accountFacet(overrides?: CallOverrides): Promise<string>;
        createAccount(_verificationFacet: string, _owner: BytesLike, _salt: BigNumberish, overrides?: CallOverrides): Promise<string>;
        defaultFallback(overrides?: CallOverrides): Promise<string>;
        entryPoint(overrides?: CallOverrides): Promise<string>;
        facetRegistry(overrides?: CallOverrides): Promise<string>;
        getAddress(_verificationFacet: string, _owner: BytesLike, _salt: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getBytecode(_accountFacet: string, _verificationFacet: string, _entryPoint: string, _facetRegistry: string, _defaultFallback: string, _ownerPublicKey: BytesLike, overrides?: CallOverrides): Promise<string>;
        getCreationCode(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "BarzDeployed(address)"(arg0?: null): BarzDeployedEventFilter;
        BarzDeployed(arg0?: null): BarzDeployedEventFilter;
    };
    estimateGas: {
        accountFacet(overrides?: CallOverrides): Promise<BigNumber>;
        createAccount(_verificationFacet: string, _owner: BytesLike, _salt: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        defaultFallback(overrides?: CallOverrides): Promise<BigNumber>;
        entryPoint(overrides?: CallOverrides): Promise<BigNumber>;
        facetRegistry(overrides?: CallOverrides): Promise<BigNumber>;
        getAddress(_verificationFacet: string, _owner: BytesLike, _salt: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getBytecode(_accountFacet: string, _verificationFacet: string, _entryPoint: string, _facetRegistry: string, _defaultFallback: string, _ownerPublicKey: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getCreationCode(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        accountFacet(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createAccount(_verificationFacet: string, _owner: BytesLike, _salt: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        defaultFallback(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        entryPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        facetRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAddress(_verificationFacet: string, _owner: BytesLike, _salt: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBytecode(_accountFacet: string, _verificationFacet: string, _entryPoint: string, _facetRegistry: string, _defaultFallback: string, _ownerPublicKey: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCreationCode(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
