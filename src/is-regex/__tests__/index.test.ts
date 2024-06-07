import { isRegex } from "#src/is-regex";

describe("isRegex", () => {
    test("should return true if the value RegExp", () => {
        expect(isRegex(new RegExp("javascript", "gi"))).toBe(true);
        expect(isRegex(new RegExp(/javascript/gi))).toBe(true);
        expect(isRegex(/javascript/gi)).toBe(true);
    });

    test.each([
        undefined,
        null,
        1,
        "str",
        "/str/",
        false,
        { name: "Alexey" },
        [],
        () => "check",
        new Date(),
        new Map(),
        new Set(),
        new Error("error"),
    ])("should return false if the value not RegExp", (value) => {
        expect(isRegex(value)).toBe(false);
    });
});
