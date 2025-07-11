/**
 * Checks if the passed parameter is null or undefined and narrows its type accordingly.
 * @example
 *   isNil(undefined) //=> true
 *   isNil(null) //=> true
 *   isNil(5) //=> false
 */
export function isNil(value: any): value is null | undefined {
  return value == null;
}
