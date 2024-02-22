import { clip } from "@src/clip";

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
    });
});
