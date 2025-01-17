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
import type { Transaction } from "./Transaction";
import {
  TransactionFromJSON,
  TransactionFromJSONTyped,
  TransactionToJSON,
} from "./Transaction";
import type { Hop } from "./Hop";
import { HopFromJSON, HopFromJSONTyped, HopToJSON } from "./Hop";

/**
 * @export
 * @interface RouteShortcutTransaction
 */
export interface RouteShortcutTransaction {
  /**
   * @type {string}
   * @memberof RouteShortcutTransaction
   */
  gas: string;
  /**
   * @type {object}
   * @memberof RouteShortcutTransaction
   */
  amountOut: object;
  /**
   * Price impact in basis points, null if USD price not found
   * @type {number}
   * @memberof RouteShortcutTransaction
   */
  priceImpact: number;
  /**
   * An array of the fee amount collected for each tokenIn
   * @type {Array<string>}
   * @memberof RouteShortcutTransaction
   */
  feeAmount: Array<string>;
  /**
   * Block number the transaction was created on
   * @type {number}
   * @memberof RouteShortcutTransaction
   */
  createdAt: number;
  /**
   * The tx object to use in `ethers`
   * @type {Transaction}
   * @memberof RouteShortcutTransaction
   */
  tx: Transaction;
  /**
   * The route the shortcut will use
   * @type {Array<Hop>}
   * @memberof RouteShortcutTransaction
   */
  route: Array<Hop>;
}

/**
 * Check if a given object implements the RouteShortcutTransaction interface.
 */
export function instanceOfRouteShortcutTransaction(
  value: object,
): value is RouteShortcutTransaction {
  if (!("gas" in value) || value["gas"] === undefined) return false;
  if (!("amountOut" in value) || value["amountOut"] === undefined) return false;
  if (!("priceImpact" in value) || value["priceImpact"] === undefined) {
    return false;
  }
  if (!("feeAmount" in value) || value["feeAmount"] === undefined) return false;
  if (!("createdAt" in value) || value["createdAt"] === undefined) return false;
  if (!("tx" in value) || value["tx"] === undefined) return false;
  if (!("route" in value) || value["route"] === undefined) return false;
  return true;
}

export function RouteShortcutTransactionFromJSON(
  json: any,
): RouteShortcutTransaction {
  return RouteShortcutTransactionFromJSONTyped(json, false);
}

export function RouteShortcutTransactionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): RouteShortcutTransaction {
  if (json == null) {
    return json;
  }
  return {
    "gas": json["gas"],
    "amountOut": json["amountOut"],
    "priceImpact": json["priceImpact"],
    "feeAmount": json["feeAmount"],
    "createdAt": json["createdAt"],
    "tx": TransactionFromJSON(json["tx"]),
    "route": ((json["route"] as Array<any>).map(HopFromJSON)),
  };
}

export function RouteShortcutTransactionToJSON(
  value?: RouteShortcutTransaction | null,
): any {
  if (value == null) {
    return value;
  }
  return {
    "gas": value["gas"],
    "amountOut": value["amountOut"],
    "priceImpact": value["priceImpact"],
    "feeAmount": value["feeAmount"],
    "createdAt": value["createdAt"],
    "tx": TransactionToJSON(value["tx"]),
    "route": ((value["route"] as Array<any>).map(HopToJSON)),
  };
}
