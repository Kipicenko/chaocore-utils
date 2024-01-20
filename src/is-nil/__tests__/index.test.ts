import { isNil } from "@src/is-nil";

describe("isNil", () => {
    test("should return true if value null or undefined", () => {
        expect(isNil(null)).toBe(true);
        expect(isNil(undefined)).toBe(true);
    });

    test("should return false if value not undefined or not null", () => {
        expect(isNil(1)).toBe(false);
        expect(isNil("str")).toBe(false);
        expect(isNil(false)).toBe(false);
        expect(isNil({ name: "Alexey" })).toBe(false);
        expect(isNil([])).toBe(false);
        expect(isNil(() => true)).toBe(false);
    });
});
