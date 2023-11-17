import { getFormat } from "get-format";

describe("getFormat", () => {
    test("should return .jpg or jpg if dot - false", () => {
        expect(getFormat("avatar.jpg")).toBe(".jpg");
        expect(getFormat("avatar.jpg", false)).toBe("jpg");
    });

    test("should return empty string if there is no extension", () => {
        expect(getFormat("avatar")).toBe("");
    });
});
