import { calcMedian } from "#src/calc-median";

describe("calcMedian", () => {
    test("should return median", () => {
        expect(calcMedian([8, 3, 5])).toBe(5);
        expect(calcMedian([4, 7, 2, 9])).toBe(5.5);
    });

    test("should return undefined if array empty", () => {
        expect(calcMedian([])).toBe(undefined);
    });
});
