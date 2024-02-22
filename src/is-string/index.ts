/**
 * Checks if the passed parameter is a string and narrows its type accordingly.
 * @example
 *   isString("hello") //=> true
 *   isString(null) //=> false
 *   isString(5) //=> false
 */
export function isString(value: any): value is string {
    return typeof value === "string";
}
