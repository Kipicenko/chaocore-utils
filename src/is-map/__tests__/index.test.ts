import { isMap } from "#src/is-map";

describe("isMap", () => {
  test("should return true if the value Map", () => {
    expect(isMap(new Map())).toBe(true);
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
    new Date(),
    new Set(),
    new Error("error"),
  ])("should return false if the value not Map", (value) => {
    expect(isMap(value)).toBe(false);
  });
});
