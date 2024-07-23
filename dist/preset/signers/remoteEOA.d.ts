import { Bytes, ethers } from "ethers";
import { EOASigner } from "../../types";
export declare class RemoteEOA implements EOASigner {
    provider: ethers.providers.JsonRpcProvider;
    constructor(url: string);
    getAddress(): Promise<string>;
    signMessage(message: string | Bytes): Promise<string>;
}
