/**
 * Checks if the passed parameter is a (Map object) and narrows its type accordingly.
 * @example
 *   isMap(new Map()) //=> true
 *   isMap({}) //=> false
 *   isMap(new Set()) //=> false
 */
export function isMap(value: any): value is Map<any, any> {
  return (
    typeof value === "object" && value !== null && value.constructor === Map
  );
}
