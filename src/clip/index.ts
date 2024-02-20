import { isObject } from "@src/is-object";
import { isArray } from "@src/is-array";
import clone from "rfdc";

export function clip<T extends object = Record<string, any>>(
    obj: Record<string, any>,
    keys: Array<string>,
    pick: boolean = false,
): T {
    if (!isObject(obj) || !isArray(keys)) return {} as T;
    const cloneObject = clone()(obj);
    const collectionKeys = new Set(keys);

    const newClipObject: Record<string, any> = {};
    for (const key of Object.keys(cloneObject)) {
        if (pick ? collectionKeys.has(key) : !collectionKeys.has(key)) {
            newClipObject[key] = cloneObject[key];
        }
    }

    return newClipObject as T;
}
