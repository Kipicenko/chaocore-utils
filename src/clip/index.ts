import { isObject } from "#src/is-object";
import { isArray } from "#src/is-array";

/**
 * Returns a partial copy of an object omitting the keys specified. If option pick - false
 *
 * Creates an object composed of the picked object properties. If option pick - true
 * @example
 *   clip({a: 1, b: 2, c: 3, d: 4}, ["a", "d"]) //=> { b: 2, c: 3 }
 *   clip({a: 1, b: 2, c: 3, d: 4}, ["a", "d"], { pick: true }) //=> { a: 1, d: 4 }
 */
export function clip<T extends object = Record<string, any>>(
    obj: Record<string, any>,
    keys: Array<string>,
    options: { pick: boolean } = { pick: false },
): T {
    if (!isObject(obj) || !isArray(keys)) return {} as T;

    try {
        const cloneObject = structuredClone(obj);
        const collectionKeys = new Set(keys);

        const newClipObject: Record<string, any> = {};
        for (const key of Object.keys(cloneObject)) {
            if (
                options.pick
                    ? collectionKeys.has(key)
                    : !collectionKeys.has(key)
            ) {
                newClipObject[key] = cloneObject[key];
            }
        }

        return newClipObject as T;
    } catch (e) {
        console.error(e);
        return {} as T;
    }
}
