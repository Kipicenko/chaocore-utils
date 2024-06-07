import { isString } from "#src/is-string";

/**
 * Checks if the string is a number.
 * @example
 *   isNumericString("12345") //=> true
 *   isNumericString("2") //=> true
 *   isNumericString("0") //=> true
 *   isNumericString("abc45") //=> false
 *   isNumericString("123.45") //=> false
 *   isNumericString("012345") //=> false
 *   isNumericString("somethingElse") //=> false
 */
export function isNumericString(str: string): boolean {
    if (!isString(str)) return false;
    return /^\d+$/.test(str) && (str.length > 1 ? str[0] !== "0" : true);
}
