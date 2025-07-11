/**
 * Checks if the passed parameter is a number and narrows its type accordingly.
 * @example
 *   isNumber(5) //=> true
 *   isNumber(NaN) //=> false
 *   isNumber("5") //=> false
 */
export function isNumber(value: any): value is number {
  return typeof value === "number" && !isNaN(value);
}
