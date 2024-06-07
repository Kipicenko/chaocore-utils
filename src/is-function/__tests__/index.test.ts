import { isFunction } from "#src/is-function";

describe("isFunction", () => {
    test("should return true if the value function", () => {
        let fn = () => 5;
        expect(isFunction(fn)).toBe(true);

        fn = function () {
            return 5;
        };

        expect(isFunction(fn)).toBe(true);

        function Start(str: string): string {
            return str;
        }

        expect(isFunction(Start)).toBe(true);

        const info = {
            name: "Alexey",
            getName(): string {
                return this.name;
            },
        };

        expect(isFunction(info.getName)).toBe(true);
    });

    test.each([
        undefined,
        null,
        1,
        "str",
        false,
        { name: "Alexey" },
        [],
        new Date(),
        new Map(),
        new Set(),
        new RegExp(/javascript/gi),
        new Error("error"),
    ])("should return false if the value not function", (value) => {
        expect(isFunction(value)).toBe(false);
    });
});
