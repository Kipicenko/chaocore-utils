import { uniq } from "#src/uniq";

const consoleError = jest.spyOn(console, "error");

describe("uniq", () => {
    test("should return the new duplicate free array", () => {
        const arrayExampleOne = [1, 1, 3, 4, 4, 5, 6, 6];

        expect(uniq(arrayExampleOne)).toEqual([1, 3, 4, 5, 6]);

        const arrayExampleTwo = [
            { id: 1, name: "Anna" },
            { id: 2, name: "Andrey" },
            { id: 4, name: "Kate" },
            { id: 3, name: "Alexey" },
            { id: 4, name: "Kate" },
            { id: 2, name: "Andrey" },
            { id: 2, name: "Andrey" },
            { id: 3, name: "Alexey" },
        ];

        expect(uniq(arrayExampleTwo, (obj) => obj.id)).toEqual([
            { id: 1, name: "Anna" },
            { id: 2, name: "Andrey" },
            { id: 4, name: "Kate" },
            { id: 3, name: "Alexey" },
        ]);

        expect(consoleError).not.toHaveBeenCalled();
    });

    test("should return empty array if an error occurred", () => {
        const arrayExample = [
            {
                id: 1,
                name: "Anna",
                fn: () => {
                    return "Test";
                },
            },
            {
                id: 2,
                name: "Andrey",
                fn: () => {
                    return "Test";
                },
            },
        ];

        expect(uniq(arrayExample, (obj) => obj.id)).toEqual([]);
        expect(consoleError).toHaveBeenCalled();
    });
});
