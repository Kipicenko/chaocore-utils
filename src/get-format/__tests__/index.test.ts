import { getFormat } from "get-format";

describe("getFormat", () => {
    test("should return .jpg or jpg if dot - false", () => {
        expect(getFormat("avatar.jpg")).toEqual(".jpg");
        expect(getFormat("avatar.jpg", false)).toEqual("jpg");
    });

    test("should return empty string if there is no extension", () => {
        expect(getFormat("avatar")).toEqual("");
    });
});
