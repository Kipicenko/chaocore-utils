/**
 * Checks if the passed parameter is a (Set object) and narrows its type accordingly.
 * @example
 *   isSet(new Set()) //=> true
 *   isSet({}) //=> false
 *   isSet(new Map()) //=> false
 */
export function isSet(value: any): value is Set<any> {
    return (
        typeof value === "object" && value !== null && value.constructor === Set
    );
}
