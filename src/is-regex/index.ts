export function isRegex(value: any): value is RegExp {
    return (
        typeof value === "object" &&
        value !== null &&
        value.constructor === RegExp
    );
}
