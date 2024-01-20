import { isArray } from "@src/is-array";

export function isObject(value: any): boolean {
    return typeof value === "object" && value !== null && !isArray(value);
}
