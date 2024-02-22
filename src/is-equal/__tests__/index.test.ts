import { isEqual } from "@src/is-equal";

describe("isEqual", () => {
    test("should return true if the values are equivalent", () => {
        let oneObj: Record<string, any> = {
            name: "Anna",
            age: 20,
        };

        let twoObj: Record<string, any> = {
            name: "Anna",
            age: 20,
        };
        expect(isEqual(oneObj, twoObj)).toBe(true);

        oneObj = {
            name: "Anna",
            age: 20,
            address: {
                street: "street 12",
            },
        };

        twoObj = {
            name: "Anna",
            age: 20,
            address: {
                street: "street 12",
            },
        };

        expect(isEqual(oneObj, twoObj)).toBe(true);

        const address = {
            street: "street 12",
        };

        oneObj = {
            name: "Anna",
            age: 20,
            address,
        };

        twoObj = {
            name: "Anna",
            age: 20,
            address,
        };

        expect(isEqual(oneObj, twoObj)).toBe(true);
        expect(isEqual(oneObj, twoObj, { shallow: true })).toBe(true);

        oneObj = {
            name: "Anna",
            age: 20,
            address: {
                street: [155, 44, 55, { io: "st" }],
            },
        };

        twoObj = {
            name: "Anna",
            age: 20,
            address: {
                street: [155, 44, 55, { io: "st" }],
            },
        };
        expect(isEqual(oneObj, twoObj)).toBe(true);

        const setOne = new Set(["апельсин", "яблоко", "банан"]);
        const setTwo = new Set(["апельсин", "яблоко", "банан"]);

        expect(isEqual(setOne, setTwo)).toBe(true);

        const mapOne = new Map<any, any>([
            [1, "hoho"],
            ["kek", "toto"],
            [true, 555],
            ["hoo", { nm: 1 }],
        ]);
        const mapTwo = new Map<any, any>([
            [1, "hoho"],
            ["kek", "toto"],
            [true, 555],
            ["hoo", { nm: 1 }],
        ]);

        expect(isEqual(mapOne, mapTwo)).toBe(true);

        const dateOne = new Date("02-04-2023");
        const dateTwo = new Date("02-04-2023");
        expect(isEqual(dateOne, dateTwo)).toBe(true);

        let regexOne = new RegExp("js", "gi");
        let regexTwo = new RegExp("js", "gi");
        expect(isEqual(regexOne, regexTwo)).toBe(true);

        regexOne = /js/gi;
        regexTwo = /js/gi;
        expect(isEqual(regexOne, regexTwo)).toBe(true);

        const arrayOne = [1, 2, 5];
        const arrayTwo = [1, 2, 5];

        expect(isEqual(arrayOne, arrayTwo)).toBe(true);
    });

    test("should return false if the values are not equivalent", () => {
        let oneObj: Record<string, any> = {
            name: "Anna",
            age: 21,
        };

        let twoObj: Record<string, any> = {
            name: "Anna",
            age: 22,
        };
        expect(isEqual(oneObj, twoObj)).toBe(false);

        oneObj = {
            name: "Anna",
            age: 22,
            studying: true,
        };

        twoObj = {
            name: "Anna",
            age: 22,
            works: true,
        };

        expect(isEqual(oneObj, twoObj)).toBe(false);

        oneObj = {
            name: "Anna",
            works: true,
        };

        twoObj = {
            name: "Anna",
            age: 28,
            works: true,
        };

        expect(isEqual(oneObj, twoObj)).toBe(false);

        oneObj = {
            name: "Anna",
            age: 22,
            code: {},
        };

        twoObj = {
            name: "Anna",
            age: 22,
            code: {},
        };

        expect(isEqual(oneObj, twoObj, { shallow: true })).toBe(false);

        const setOne = new Set(["апельсин", "яблоко", "банан"]);
        const setTwo = new Set(["апельсин", "яблоко", "груша"]);

        expect(isEqual(setOne, setTwo)).toBe(false);

        const mapOne = new Map<any, any>([
            [1, "hoho"],
            ["kek", "toto"],
            [true, 555],
            ["hoo", { nm: 1 }],
        ]);
        const mapTwo = new Map<any, any>([
            [1, "hoho"],
            ["kek", "toto"],
            [true, 555],
            ["hoo", { nm: 125 }],
        ]);

        expect(isEqual(mapOne, mapTwo)).toBe(false);

        const dateOne = new Date("02-04-2023");
        const dateTwo = new Date("03-04-2023");
        expect(isEqual(dateOne, dateTwo)).toBe(false);

        let regexOne = new RegExp("js", "gi");
        let regexTwo = new RegExp("go", "gi");
        expect(isEqual(regexOne, regexTwo)).toBe(false);

        regexOne = /js/gi;
        regexTwo = /go/gi;
        expect(isEqual(regexOne, regexTwo)).toBe(false);

        const arrayOne = [1, 2, 5];
        const arrayTwo = [1, 5, 5];

        expect(isEqual(arrayOne, arrayTwo)).toBe(false);
    });
});
