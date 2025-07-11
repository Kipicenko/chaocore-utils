/**
 * Checks if the passed parameter is an array and narrows its type accordingly.
 * @example
 *   isArray([1, 2]) //=> true
 *   isArray({}) //=> false
 *   isArray("[]") //=> false
 */
export function isArray(value: any): value is Array<any> {
  return Array.isArray(value);
}
