import { Nullable } from "@models/nullable";

/**
 * Returns true if provided value is not-empty object only
 *
 * @param val
 * @returns boolean
 */
export function nonEmptyObject(val: any): boolean {
  return typeof val === 'object' && val !== null && Object.keys(val).length > 0;
}

/**
 * Retreives pageId from url
 *
 * @example
 * url: https://rickandmortyapi.com/api/character/?page=2
 * result: 2
 *
 * @param url
 * @returns number | undefined
 */
export function getPageIdFromUrl(url: Nullable<string>, param = 'page'): number | undefined {
  try {
    const nextPageUrl = new URL(url || '');
    const urlSearchParams = new URLSearchParams(nextPageUrl.searchParams);
    const pageId = urlSearchParams.get(param) || '';
    return !isNaN(parseInt(pageId)) ? parseInt(pageId): undefined;
  } catch (error) {
    return undefined;
  }
}
