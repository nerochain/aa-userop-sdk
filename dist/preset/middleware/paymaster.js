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
exports.neroPaymaster = void 0;
const ethers_1 = require("ethers");
const utils_1 = require("../../utils");
const constants_1 = require("../../constants");
const neroPaymaster = (context) => (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    console.log('call neroPaymaster: ', ctx.paymasterOptions);
    if (!ctx.paymasterOptions['apikey']) {
        console.log('neropaymaster  no apikey set');
        return;
    }
    if (ctx.paymasterOptions['type'] == 'none') {
        return;
    }
    const mode = parseInt(ctx.paymasterOptions['type']);
    if (mode < 0 || mode > 2) {
        console.log('neropaymaster unsupported type: ', ctx.paymasterOptions['type']);
        return;
    }
    if (mode > 0 && !ctx.paymasterOptions['token']) {
        console.log('neropaymaster no erc20 token set');
        return;
    }
    const rpc = (_a = ctx.paymasterOptions['rpc']) !== null && _a !== void 0 ? _a : constants_1.ERC4337.PaymasterRPC;
    // ctx.op.verificationGasLimit = ethers.BigNumber.from(
    //   ctx.op.verificationGasLimit
    // ).mul(3);
    const provider = new ethers_1.ethers.providers.JsonRpcProvider(rpc);
    const pm = (yield provider.send("pm_sponsor_userop", [
        (0, utils_1.OpToJSON)(ctx.op),
        ctx.paymasterOptions['apikey'],
        ctx.entryPoint,
        {
            type: '' + (ctx.paymasterOptions['type'] || (context === null || context === void 0 ? void 0 : context.type)),
            token: ctx.paymasterOptions['token'] || (context === null || context === void 0 ? void 0 : context.token)
        }
    ]));
    ctx.op.paymasterAndData = pm.paymasterAndData;
    ctx.op.preVerificationGas = pm.preVerificationGas;
    ctx.op.verificationGasLimit = pm.verificationGasLimit;
    ctx.op.callGasLimit = pm.callGasLimit;
});
exports.neroPaymaster = neroPaymaster;
