export function isSet(value: any): value is Set<any> {
    return (
        typeof value === "object" && value !== null && value.constructor === Set
    );
}
