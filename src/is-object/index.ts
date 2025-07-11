/**
 * Checks if the passed parameter is a simple object and narrows its type accordingly.
 * @example
 *   isObject({}) //=> true
 *   isObject({ name: "Alexey" }) //=> true
 *   isObject(new Map()) //=> false
 *   isObject(new Set()) //=> false
 *   isObject(new Date()) //=> false
 *   isObject([]) //=> false
 */
export function isObject<T extends object = Record<string, any>>(
  value: any,
): value is T {
  return (
    typeof value === "object" && value !== null && value.constructor === Object
  );
}
