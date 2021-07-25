/**
 * Determines if the provided value is null or undefined
 * @param {any} value The value to check
 * @return {boolean} Indicates if the value is null or undefined
 */
export function isNil(value: any): value is null | undefined {
  return value === null || value === undefined;
}
