import { isEmpty } from "#src/is-empty";

describe("isEmpty", () => {
  test.each([
    undefined,
    null,
    "",
    [],
    {},
    new Map(),
    new Set(),
    new WeakMap(),
    new WeakSet(),
  ])("should return true if the value is considered empty", (value) => {
    expect(isEmpty(value)).toBe(true);
  });

  test.each([
    "hello",
    { name: "Alex" },
    { size: 0 },
    { length: 0 },
    { [Symbol("a")]: "hello" },
    [1, 2, 3],
    new Map([["position", 0]]),
    new Set(["apple"]),
    false,
    0,
    () => {},
    new Date(),
    new RegExp(/javascript/gi),
    /abc/,
  ])("should return false if the value is not considered empty", (value) => {
    expect(isEmpty(value)).toBe(false);
  });
});
