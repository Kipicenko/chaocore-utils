/**
 * Checks if the passed parameter is a (RegExp object) and narrows its type accordingly.
 * @example
 *   isRegex(new RegExp("javascript", "gi")) //=> true
 *   isRegex(/javascript/gi) //=> true
 *   isRegex({}) //=> false
 *   isRegex(new Set()) //=> false
 */
export function isRegex(value: any): value is RegExp {
    return (
        typeof value === "object" &&
        value !== null &&
        value.constructor === RegExp
    );
}
