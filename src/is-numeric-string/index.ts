import { isString } from "is-string";

export function isNumericString(str: string): boolean {
    if (!isString(str)) return false;
    return /^\d+$/.test(str);
}
