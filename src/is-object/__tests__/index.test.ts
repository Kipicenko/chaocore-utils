import { isObject } from "@src/is-object";

describe("isObject", () => {
    test("should return true if it's an object", () => {
        expect(isObject({})).toBe(true);
        expect(isObject({ name: "Alexey" })).toBe(true);
    });

    test("should return false if it is not object", () => {
        expect(isObject(1)).toBe(false);
        expect(isObject("str")).toBe(false);
        expect(isObject(true)).toBe(false);
        expect(isObject([])).toBe(false);
        expect(isObject([5, "str", {}])).toBe(false);
        expect(isObject(() => 10)).toBe(false);
        expect(isObject(null)).toBe(false);
        expect(isObject(undefined)).toBe(false);
    });
});
