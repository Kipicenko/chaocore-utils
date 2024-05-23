import { clip } from "@src/clip";

const consoleError = jest.spyOn(console, "error");

describe("clip", () => {
    test("should return omit object", () => {
        const testObj = {
            name: "Alexey",
            age: 25,
            street: "st 25",
            job: true,
        };
        expect(clip(testObj, ["job", "age"])).toEqual({
            name: "Alexey",
            street: "st 25",
        });
        expect(clip(testObj, ["name", "street"])).toEqual({
            age: 25,
            job: true,
        });

        expect(clip(testObj, [])).toEqual({
            name: "Alexey",
            age: 25,
            street: "st 25",
            job: true,
        });

        expect(consoleError).not.toHaveBeenCalled();
    });

    test("should return pick object", () => {
        const testObj = {
            name: "Alexey",
            age: 25,
            street: "st 25",
            job: true,
        };
        expect(clip(testObj, ["age", "job"], { pick: true })).toEqual({
            age: 25,
            job: true,
        });
        expect(clip(testObj, ["name"], { pick: true })).toEqual({
            name: "Alexey",
        });

        expect(clip(testObj, [], { pick: true })).toEqual({});

        expect(consoleError).not.toHaveBeenCalled();
    });

    test("should return empty object if an error occurred", () => {
        const testObj = {
            name: "Alexey",
            age: 25,
            fn: () => {
                return "Test";
            },
        };

        expect(clip(testObj, ["age"], { pick: true })).toEqual({});
        expect(consoleError).toHaveBeenCalled();
    });
});
