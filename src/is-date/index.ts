/**
 * Checks if the passed parameter is a date and narrows its type accordingly.
 * @example
 *   isDate(new Date()) //=> true
 *   isDate({}) //=> false
 *   isDate("somethingElse") //=> false
 */
export function isDate(value: any): value is Date {
  return (
    typeof value === "object" && value !== null && value.constructor === Date
  );
}
