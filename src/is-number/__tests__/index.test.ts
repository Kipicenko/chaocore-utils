import { isNumber } from "@src/is-number";

describe("isNumber", () => {
    test("should return true if value number", () => {
        expect(isNumber(5)).toBe(true);
    });

    test("should return false if value not number", () => {
        expect(isNumber(NaN)).toBe(false);
        expect(isNumber("5")).toBe(false);
        expect(isNumber(null)).toBe(false);
        expect(isNumber(undefined)).toBe(false);
        expect(isNumber({ name: "Alexey" })).toBe(false);
        expect(isNumber([])).toBe(false);
    });
});
