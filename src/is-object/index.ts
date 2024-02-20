export function isObject<T extends object = Record<string, any>>(
    value: any,
): value is T {
    return (
        typeof value === "object" &&
        value !== null &&
        value.constructor === Object
    );
}
