import clone from "rfdc";
import { isFunction } from "@src/is-function";
import { isArray } from "@src/is-array";

export function uniq<T>(
    array: Array<T>,
    transformer?: (value: T) => any,
): Array<T> {
    if (!isArray(array)) return [];
    const copyArray = clone()(array);

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
}
