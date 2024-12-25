import { ethers } from "ethers";
import { UserOperationMiddlewareFn } from "../../types";
import { OpToJSON } from "../../utils";
import { ERC4337 } from "../../constants";

interface NeroPaymasterResult {
  paymasterAndData: string;
  preVerificationGas: string;
  verificationGasLimit: string;
  callGasLimit: string;
}

export const neroPaymaster = (): UserOperationMiddlewareFn => async (ctx) => {
  if (!ctx.paymasterOptions["apikey"]) {
    return;
  }
  if (ctx.paymasterOptions["type"] == "none") {
    return;
  }
  const mode = parseInt(ctx.paymasterOptions["type"]);
  if (mode < 0 || mode > 2) {
    return;
  }
  if (mode > 0 && !ctx.paymasterOptions["token"]) {
    return;
  }

  const rpc = ctx.paymasterOptions["rpc"] ?? ERC4337.PaymasterRPC;
  // ctx.op.verificationGasLimit = ethers.BigNumber.from(
  //   ctx.op.verificationGasLimit
  // ).mul(3);

  const provider = new ethers.providers.JsonRpcProvider(rpc);
  const pm = (await provider.send("pm_sponsor_userop", [
    OpToJSON(ctx.op),
    ctx.paymasterOptions["apikey"],
    ctx.entryPoint,
    {
      type: "" + mode,
      token: ctx.paymasterOptions["token"],
    },
  ])) as NeroPaymasterResult;

  ctx.op.paymasterAndData = pm.paymasterAndData;
  ctx.op.preVerificationGas = pm.preVerificationGas;
  ctx.op.verificationGasLimit = pm.verificationGasLimit;
  ctx.op.callGasLimit = pm.callGasLimit;
};
