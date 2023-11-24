import { isString } from "is-string";

describe("isString", () => {
    test("should return true if value string", () => {
        expect(isString("str")).toBe(true);
    });

    test("should return false if value not string", () => {
        expect(isString(1)).toBe(false);
        expect(isString(false)).toBe(false);
        expect(isString({ name: "Alexey" })).toBe(false);
        expect(isString([])).toBe(false);
        expect(isString(null)).toBe(false);
        expect(isString(undefined)).toBe(false);
        expect(isString(() => "str")).toBe(false);
    });
});
