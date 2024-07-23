import { Bytes, BytesLike } from "ethers";
import { ISigner } from "../../types";
export declare class BarzSecp256r1 implements ISigner {
    private ec;
    private privateKey;
    constructor(privateKey: BytesLike);
    static generatePrivateKey(): BytesLike;
    getPublicKey(): Promise<string>;
    signMessage(message: string | Bytes): Promise<string>;
}
