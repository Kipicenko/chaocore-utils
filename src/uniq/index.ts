import { isFunction } from "#src/is-function";
import { isArray } from "#src/is-array";

/**
 * Creates a duplicate-free version of an array.
 * @example
 *   uniq([1, 1, 3, 4, 4, 5, 6, 6]) //=> [1, 3, 4, 5, 6]
 *   uniq(
 *     [
 *         { name: "Anna" },
 *         { name: "Dima" },
 *         { name: "Anna" },
 *     ],
 *     (obj) => obj.name,
 *   ); //=> [{ name: "Anna" }, { name: "Dima" }]
 */
export function uniq<T>(
  array: Array<T>,
  transformer?: (value: T) => any,
): Array<T> {
  if (!isArray(array)) return [];

  try {
    const copyArray = structuredClone(array);

    if (!isFunction(transformer)) return [...new Set<any>(copyArray)];

    const uniqKey = new Set<any>();
    const uniqArray = [];

    for (const item of copyArray) {
      const identifier = transformer(item);
      if (!uniqKey.has(identifier)) {
        uniqArray.push(item);
        uniqKey.add(identifier);
      }
    }
    return uniqArray;
  } catch (e) {
    console.error(e);
    return [];
  }
}
