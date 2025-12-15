import { isString } from "#src/is-string";

/**
 * Makes the first character of a string uppercase while leaving the rest unchanged.
 * @example
 *   capitalize("hello") //=> "Hello"
 */
export function capitalize<T extends string>(str: T): Capitalize<T> {
  if (!isString(str)) {
    console.error("Capitalize: The value is not a string");
    return "" as Capitalize<T>;
  }
  return (str.charAt(0).toUpperCase() + str.slice(1)) as Capitalize<T>;
}
