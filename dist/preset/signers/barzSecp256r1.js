"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarzSecp256r1 = void 0;
const ethers_1 = require("ethers");
const js_base64_1 = require("js-base64");
const elliptic_1 = require("elliptic");
class BarzSecp256r1 {
    constructor(privateKey) {
        this.ec = new elliptic_1.ec("p256");
        this.privateKey = this.ec.keyFromPrivate(ethers_1.ethers.utils.arrayify(privateKey));
    }
    static generatePrivateKey() {
        const key = new elliptic_1.ec("p256").genKeyPair();
        return ethers_1.ethers.utils.hexlify(key.getPrivate().toBuffer());
    }
    getPublicKey() {
        return __awaiter(this, void 0, void 0, function* () {
            return ethers_1.ethers.utils.hexlify(this.privateKey.getPublic().encode("array", false));
        });
    }
    // Note: Barz accounts follow the WebAuthn API and hence require values for authenticatorData and
    // clientDataJSON to be encoded as part of the signature. However these fields are not explicitly
    // checked on-chain so we can set a null value.
    signMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            const authenticatorData = ethers_1.ethers.constants.HashZero;
            const clientDataJSONPre = "";
            const uoHashBase64 = (0, js_base64_1.fromUint8Array)(ethers_1.ethers.utils.arrayify(message), true);
            const clientDataJSONPost = "";
            const clientDataJSON = `${clientDataJSONPre}${uoHashBase64}${clientDataJSONPost}`;
            const clientHash = ethers_1.ethers.utils.sha256(ethers_1.ethers.utils.toUtf8Bytes(clientDataJSON));
            const sigHash = ethers_1.ethers.utils.sha256(ethers_1.ethers.utils.concat([authenticatorData, clientHash]));
            const sig = this.privateKey.sign(ethers_1.ethers.utils.arrayify(sigHash));
            return ethers_1.ethers.utils.defaultAbiCoder.encode(["uint256", "uint256", "bytes", "string", "string"], [
                sig.r.toString(),
                sig.s.toString(),
                authenticatorData,
                clientDataJSONPre,
                clientDataJSONPost,
            ]);
        });
    }
}
exports.BarzSecp256r1 = BarzSecp256r1;
