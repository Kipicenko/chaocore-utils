export function isMap(value: any): value is Map<any, any> {
    return (
        typeof value === "object" && value !== null && value.constructor === Map
    );
}
