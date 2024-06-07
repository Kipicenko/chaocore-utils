import { isArray } from "#src/is-array";

/**
 * Finds the median of an array of numbers.
 * @example
 *   calcMedian([8, 3, 5]) //=> 5
 *   calcMedian([4, 7, 2, 9]) //=> 5.5
 */
export function calcMedian(arr: Array<number>): number | undefined {
    if (!isArray(arr) || !arr.length) return;
    const s = [...arr].sort((a, b) => a - b);
    const mid = Math.floor(s.length / 2);
    return s.length % 2 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
}
