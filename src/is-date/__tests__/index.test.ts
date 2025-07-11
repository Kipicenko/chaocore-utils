import { isDate } from "#src/is-date";

describe("isDate", () => {
  test("should return true if the value Date", () => {
    expect(isDate(new Date())).toBe(true);
  });

  test.each([
    undefined,
    null,
    1,
    "str",
    false,
    { name: "Alexey" },
    [],
    () => "check",
    new RegExp(/javascript/gi),
    new Map(),
    new Set(),
    new Error("error"),
  ])("should return false if the value not Date", (value) => {
    expect(isDate(value)).toBe(false);
  });
});
