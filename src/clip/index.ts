import { isObject } from "@src/is-object";
import { isArray } from "@src/is-array";
import clone from "rfdc";

export function clip<T extends object = Record<string, unknown>>(
    obj: Record<string, unknown>,
    keys: Array<string>,
    pick: boolean = false,
): T {
    if (!isObject(obj) || !isArray(keys)) return {} as T;
    const cloneObj = clone()(obj);
    return Object.keys(cloneObj).reduce<Record<string, any>>((acc, key) => {
        if (pick ? keys.includes(key) : !keys.includes(key)) {
            acc[key] = cloneObj[key];
        }
        return acc;
    }, {}) as T;
}
