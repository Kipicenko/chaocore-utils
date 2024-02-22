import { isString } from "@src/is-string";

/**
 * Returns the file format from a string.
 * @example
 *   getFormat("avatar.jpg") //=> ".jpg"
 *   getFormat("avatar.jpg", false) //=> "jpg"
 *   getFormat("avatar") //=> ""
 */
export function getFormat(str: string, dot: boolean = true): string {
    if (!isString(str)) return "";
    const format: RegExpMatchArray | null = str.match(/\.([a-zA-Z]+)$/);
    if (format) {
        return dot ? format[0] : format[1];
    }
    return "";
}
