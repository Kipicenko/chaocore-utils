import { isSet } from "@src/is-set";

describe("isSet", () => {
    test("should return true if the value Set", () => {
        expect(isSet(new Set())).toBe(true);
    });

    test.each([
        undefined,
        null,
        1,
        "str",
        false,
        { name: "Alexey" },
        [],
        () => "check",
        new RegExp(/javascript/gi),
        new Date(),
        new Map(),
        new Error("error"),
    ])("should return false if the value not Set", (value) => {
        expect(isSet(value)).toBe(false);
    });
});
