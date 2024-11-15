import { ethers } from "ethers";
import { ISigner, UserOperationMiddlewareFn } from "../../types";

export const EOASignature =
  (signer: ethers.Signer): UserOperationMiddlewareFn =>
  async (ctx) => {
    console.warn(
      "userop.js: Presets.Middleware.EOASignature is deprecated. Replace with Presets.Middleware.signUserOpHash."
    );
    ctx.op.signature = await signer.signMessage(
      ethers.utils.arrayify(ctx.getUserOpHash())
    );
  };

export const signUserOpHash =
  (signer: ISigner): UserOperationMiddlewareFn =>
  async (ctx) => {
    if (ctx.paymasterOptions['simulatedOnly']) {
      ctx.op.signature = '0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c'
    } else {
      ctx.op.signature = await signer.signMessage(
        ethers.utils.arrayify(ctx.getUserOpHash())
      );
    }
  };
