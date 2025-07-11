import { formatString } from "#src/format-string";

describe("formatString", () => {
  test("should return a formatted string", () => {
    expect(
      formatString("Hello {{name}} - {{years}} years", {
        name: "Alex",
        years: "27",
      }),
    ).toBe("Hello Alex - 27 years");
  });
});
