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
import type { Network } from "./Network";
import {
  NetworkFromJSON,
  NetworkFromJSONTyped,
  NetworkToJSON,
} from "./Network";

/**
 * @export
 * @interface StandardAction
 */
export interface StandardAction {
  /**
   * @type {string}
   * @memberof StandardAction
   */
  action: StandardActionActionEnum;
  /**
   * @type {{ [key: string]: string; }}
   * @memberof StandardAction
   */
  inputs: { [key: string]: string };
  /**
   * @type {string}
   * @memberof StandardAction
   */
  name: string;
  /**
   * @type {Array<string>}
   * @memberof StandardAction
   */
  functionNames: Array<string>;
  /**
   * @type {Array<Network>}
   * @memberof StandardAction
   */
  supportedChains: Array<Network>;
}

/**
 * @export
 */
export const StandardActionActionEnum = {
  Approve: "approve",
  Borrow: "borrow",
  Deposit: "deposit",
  Harvest: "harvest",
  Permittransferfrom: "permittransferfrom",
  Redeem: "redeem",
  Repay: "repay",
  Swap: "swap",
  Transfer: "transfer",
  Transferfrom: "transferfrom",
  Route: "route",
  Call: "call",
  Split: "split",
  Merge: "merge",
} as const;
export type StandardActionActionEnum =
  typeof StandardActionActionEnum[keyof typeof StandardActionActionEnum];

/**
 * Check if a given object implements the StandardAction interface.
 */
export function instanceOfStandardAction(
  value: object,
): value is StandardAction {
  if (!("action" in value) || value["action"] === undefined) return false;
  if (!("inputs" in value) || value["inputs"] === undefined) return false;
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("functionNames" in value) || value["functionNames"] === undefined) {
    return false;
  }
  if (!("supportedChains" in value) || value["supportedChains"] === undefined) {
    return false;
  }
  return true;
}

export function StandardActionFromJSON(json: any): StandardAction {
  return StandardActionFromJSONTyped(json, false);
}

export function StandardActionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): StandardAction {
  if (json == null) {
    return json;
  }
  return {
    "action": json["action"],
    "inputs": json["inputs"],
    "name": json["name"],
    "functionNames": json["functionNames"],
    "supportedChains":
      ((json["supportedChains"] as Array<any>).map(NetworkFromJSON)),
  };
}

export function StandardActionToJSON(value?: StandardAction | null): any {
  if (value == null) {
    return value;
  }
  return {
    "action": value["action"],
    "inputs": value["inputs"],
    "name": value["name"],
    "functionNames": value["functionNames"],
    "supportedChains":
      ((value["supportedChains"] as Array<any>).map(NetworkToJSON)),
  };
}