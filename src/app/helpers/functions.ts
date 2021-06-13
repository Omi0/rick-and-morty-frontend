/**
 * Returns true if provided value is not-empty object only
 *
 * @param obj
 * @returns boolean
 */
export function nonEmptyObject(val: any): boolean {
  return typeof val === 'object' && val !== null && Object.keys(val).length > 0;
}
