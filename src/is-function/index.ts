/**
 * Checks if the passed parameter is a function and narrows its type accordingly.
 * @example
 *   isFunction(() => {}) //=> true
 *   isFunction(null) //=> false
 *   isFunction("somethingElse") //=> false
 */
export function isFunction(value: any): value is (...arg: any[]) => any {
  return typeof value === "function";
}
