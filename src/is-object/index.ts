import { isArray } from "@src/isArray";

export function isObject(value: any): boolean {
    return typeof value === "object" && value !== null && !isArray(value);
}
