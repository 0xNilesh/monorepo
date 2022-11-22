/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  RateLimited,
  RateLimitedInterface,
} from "../../../../contracts/messaging/libraries/RateLimited";

const _abi = [
  {
    inputs: [],
    name: "RateLimited__rateLimited_messageSendRateExceeded",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "updater",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newRateLimit",
        type: "uint256",
      },
    ],
    name: "SendRateLimitUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "lastSentBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rateLimitBlocks",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class RateLimited__factory {
  static readonly abi = _abi;
  static createInterface(): RateLimitedInterface {
    return new utils.Interface(_abi) as RateLimitedInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RateLimited {
    return new Contract(address, _abi, signerOrProvider) as RateLimited;
  }
}