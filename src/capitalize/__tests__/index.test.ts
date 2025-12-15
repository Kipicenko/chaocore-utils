import { capitalize } from "#src/capitalize";

describe("capitalize", () => {
  test("should return a capitalize string", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("heLlo WoRlD")).toBe("HeLlo WoRlD");
    expect(capitalize("HELLO WORLD")).toBe("HELLO WORLD");
  });

  test("empty string", () => {
    expect(capitalize("")).toBe("");
  });
});
