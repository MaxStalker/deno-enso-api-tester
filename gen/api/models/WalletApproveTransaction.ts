/* tslint:disable */
/* eslint-disable */
/**
 * #### Enso API - Find detailed documentation on [docs.enso.finance](https://docs.enso.finance). - To use the API, **you must include your API Key in the Authorization header** (Bearer format). - For testing, Swagger pre-authorizes you using the key: `1e02632d-6feb-4a75-a157-documentation` (1rps). - Get your own API Key at [enso.finance/developers](https://enso.finance/developers).
 *
 * The version of the OpenAPI document: 1.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from "../runtime";
/**
 * @export
 * @interface WalletApproveTransaction
 */
export interface WalletApproveTransaction {
  /**
   * The tx object to use in `ethers`
   * @type {object}
   * @memberof WalletApproveTransaction
   */
  tx: object;
  /**
   * The gas estimate for the transaction
   * @type {string}
   * @memberof WalletApproveTransaction
   */
  gas: string;
  /**
   * The token address to approve
   * @type {string}
   * @memberof WalletApproveTransaction
   */
  token: string;
  /**
   * The amount of tokens to approve
   * @type {string}
   * @memberof WalletApproveTransaction
   */
  amount: string;
  /**
   * The spender address to approve
   * @type {string}
   * @memberof WalletApproveTransaction
   */
  spender: string;
}

/**
 * Check if a given object implements the WalletApproveTransaction interface.
 */
export function instanceOfWalletApproveTransaction(
  value: object,
): value is WalletApproveTransaction {
  if (!("tx" in value) || value["tx"] === undefined) return false;
  if (!("gas" in value) || value["gas"] === undefined) return false;
  if (!("token" in value) || value["token"] === undefined) return false;
  if (!("amount" in value) || value["amount"] === undefined) return false;
  if (!("spender" in value) || value["spender"] === undefined) return false;
  return true;
}

export function WalletApproveTransactionFromJSON(
  json: any,
): WalletApproveTransaction {
  return WalletApproveTransactionFromJSONTyped(json, false);
}

export function WalletApproveTransactionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): WalletApproveTransaction {
  if (json == null) {
    return json;
  }
  return {
    "tx": json["tx"],
    "gas": json["gas"],
    "token": json["token"],
    "amount": json["amount"],
    "spender": json["spender"],
  };
}

export function WalletApproveTransactionToJSON(
  value?: WalletApproveTransaction | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    "tx": value["tx"],
    "gas": value["gas"],
    "token": value["token"],
    "amount": value["amount"],
    "spender": value["spender"],
  };
}