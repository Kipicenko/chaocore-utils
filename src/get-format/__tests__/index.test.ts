import { getFormat } from "get-format";

test("should return .jpg or jpg if dot - false", () => {
    expect(getFormat("avatar.jpg")).toEqual(".jpg");
    expect(getFormat("avatar.jpg", false)).toEqual("jpg");
});
