import { isObject } from "is-object";

export function clip<T extends object = Record<string, any>>(
    obj: Record<string, any>,
    keys: Array<string>,
    pick: boolean = false,
): T {
    if (!isObject(obj) || !Array.isArray(keys)) return {} as T;
    return Object.keys(obj).reduce<Record<string, any>>((acc, key) => {
        if (pick ? keys.includes(key) : !keys.includes(key)) {
            acc[key] = obj[key];
        }
        return acc;
    }, {}) as T;
}
