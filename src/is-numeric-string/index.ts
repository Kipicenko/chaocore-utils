import { isString } from "@src/is-string";

export function isNumericString(str: string): boolean {
    if (!isString(str)) return false;
    return /^\d+$/.test(str) && (str.length > 1 ? str[0] !== "0" : true);
}
