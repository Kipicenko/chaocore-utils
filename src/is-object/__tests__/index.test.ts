import { isObject } from "#src/is-object";

describe("isObject", () => {
  test("should return true if it's an object", () => {
    expect(isObject({})).toBe(true);
    expect(isObject({ name: "Alexey" })).toBe(true);
  });

  test.each([
    undefined,
    null,
    1,
    "str",
    false,
    [],
    () => "check",
    new Date(),
    new RegExp(/javascript/gi),
    new Map(),
    new Set(),
    new Error("error"),
  ])("should return false if it is not object", (value) => {
    expect(isObject(value)).toBe(false);
  });
});
