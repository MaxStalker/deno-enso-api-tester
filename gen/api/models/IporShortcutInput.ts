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
 * @interface IporShortcutInput
 */
export interface IporShortcutInput {
  /**
   * Flag that indicates whether to use the shared router
   * @type {boolean}
   * @memberof IporShortcutInput
   */
  isRouter?: boolean | null;
  /**
   * Amount of tokenIn in wei
   * @type {string}
   * @memberof IporShortcutInput
   */
  amountIn: string;
  /**
   * Address of the tokenIn. For ETH, use 0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
   * @type {string}
   * @memberof IporShortcutInput
   */
  tokenIn: string;
  /**
   * Address of the tokenBToBuy
   * @type {string}
   * @memberof IporShortcutInput
   */
  tokenBToBuy: string;
  /**
   * Percentage of tokenB to buy in basis points (1/10000)
   * @type {string}
   * @memberof IporShortcutInput
   */
  percentageForTokenB: string;
  /**
   * Slippage in basis points (1/10000). Default is 300
   * @type {string}
   * @memberof IporShortcutInput
   */
  slippage?: string;
  /**
   * Flag that indicates whether to simulate the transaction, verify some assertions, return simulationURL and events
   * @type {boolean}
   * @memberof IporShortcutInput
   */
  simulate?: boolean | null;
}

/**
 * Check if a given object implements the IporShortcutInput interface.
 */
export function instanceOfIporShortcutInput(
  value: object,
): value is IporShortcutInput {
  if (!("amountIn" in value) || value["amountIn"] === undefined) return false;
  if (!("tokenIn" in value) || value["tokenIn"] === undefined) return false;
  if (!("tokenBToBuy" in value) || value["tokenBToBuy"] === undefined) {
    return false;
  }
  if (
    !("percentageForTokenB" in value) ||
    value["percentageForTokenB"] === undefined
  ) return false;
  return true;
}

export function IporShortcutInputFromJSON(json: any): IporShortcutInput {
  return IporShortcutInputFromJSONTyped(json, false);
}

export function IporShortcutInputFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IporShortcutInput {
  if (json == null) {
    return json;
  }
  return {
    "isRouter": json["isRouter"] == null ? undefined : json["isRouter"],
    "amountIn": json["amountIn"],
    "tokenIn": json["tokenIn"],
    "tokenBToBuy": json["tokenBToBuy"],
    "percentageForTokenB": json["percentageForTokenB"],
    "slippage": json["slippage"] == null ? undefined : json["slippage"],
    "simulate": json["simulate"] == null ? undefined : json["simulate"],
  };
}

export function IporShortcutInputToJSON(value?: IporShortcutInput | null): any {
  if (value == null) {
    return value;
  }
  return {
    "isRouter": value["isRouter"],
    "amountIn": value["amountIn"],
    "tokenIn": value["tokenIn"],
    "tokenBToBuy": value["tokenBToBuy"],
    "percentageForTokenB": value["percentageForTokenB"],
    "slippage": value["slippage"],
    "simulate": value["simulate"],
  };
}
