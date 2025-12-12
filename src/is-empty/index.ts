import { isNil } from "#src/is-nil";
import { isArray } from "#src/is-array";
import { isObject } from "#src/is-object";
import { isDate } from "#src/is-date";
import { isRegex } from "#src/is-regex";

/**
 * Checks if the value is empty.
 * @example
 *   isEmpty(undefined) //=> true
 *   isEmpty(null) //=> true
 *   isEmpty("") //=> true
 *   isEmpty([]) //=> true
 *   isEmpty({}) //=> true
 *   isEmpty(new Map()) //=> true
 *   isEmpty(new Set()) //=> true
 *   isEmpty(new WeakMap()) //=> true
 *   isEmpty(new WeakSet()) //=> true
 *
 *   isEmpty("hello") //=> false
 *   isEmpty({ name: "Alex" }) //=> false
 *   isEmpty({ size: 0 }) //=> false
 *   isEmpty({ length: 0 }) //=> false
 *   isEmpty({ [Symbol("a")]: "hello" }) //=> false
 *   isEmpty([1, 2, 3]) //=> false
 *   isEmpty(new Map([["position", 0]])) //=> false
 *   isEmpty(new Set(["apple"])) //=> false
 *   isEmpty(false) //=> false
 *   isEmpty(0) //=> false
 *   isEmpty(() => {}) //=> false
 *   isEmpty(new Date()) //=> false
 *   isEmpty(new RegExp(/javascript/gi)) //=> false
 *   isEmpty(/abc/) //=> false
 */
export function isEmpty(value: any): boolean {
  if (isNil(value) || value === "") return true;

  if (typeof value !== "object" || isDate(value) || isRegex(value)) {
    return false;
  }

  if (isArray(value)) return value.length === 0;

  // For Maps, Sets
  if (!isObject(value) && "size" in value) {
    return value.size === 0;
  }

  // Instead of taking Object.keys (optimization)
  for (const _ in value) {
    return false;
  }

  // An extreme case is when an object properties contain only Symbols.
  return Object.getOwnPropertySymbols(value).length === 0;
}
