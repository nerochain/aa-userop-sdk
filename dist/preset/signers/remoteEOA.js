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
exports.RemoteEOA = void 0;
const ethers_1 = require("ethers");
class RemoteEOA {
    constructor(url) {
        this.provider = new ethers_1.ethers.providers.JsonRpcProvider(url);
    }
    getAddress() {
        return this.provider.getSigner().getAddress();
    }
    signMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            const signer = this.provider.getSigner();
            let signature = yield signer.signMessage(message);
            // Code snippet from https://gist.github.com/kalaspuff/19365e21e01929c79d5d2638c1ee580e
            // See also https://github.com/ethereum/go-ethereum/issues/19751#issuecomment-504900739
            if (/(^0[xX]|^)[0-9a-fA-F]{128}(00|01)$/.test(signature)) {
                const sigV = (parseInt(signature.slice(-2), 16) + 27).toString(16);
                signature = signature.slice(0, -2) + sigV;
            }
            return signature;
        });
    }
}
exports.RemoteEOA = RemoteEOA;
