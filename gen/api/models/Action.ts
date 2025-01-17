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
 * @interface Action
 */
export interface Action {
  /**
   * @type {string}
   * @memberof Action
   */
  action: ActionActionEnum;
  /**
   * @type {{ [key: string]: string; }}
   * @memberof Action
   */
  inputs: { [key: string]: string };
}

/**
 * @export
 */
export const ActionActionEnum = {
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
export type ActionActionEnum =
  typeof ActionActionEnum[keyof typeof ActionActionEnum];

/**
 * Check if a given object implements the Action interface.
 */
export function instanceOfAction(value: object): value is Action {
  if (!("action" in value) || value["action"] === undefined) return false;
  if (!("inputs" in value) || value["inputs"] === undefined) return false;
  return true;
}

export function ActionFromJSON(json: any): Action {
  return ActionFromJSONTyped(json, false);
}

export function ActionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): Action {
  if (json == null) {
    return json;
  }
  return {
    "action": json["action"],
    "inputs": json["inputs"],
  };
}

export function ActionToJSON(value?: Action | null): any {
  if (value == null) {
    return value;
  }
  return {
    "action": value["action"],
    "inputs": value["inputs"],
  };
}
