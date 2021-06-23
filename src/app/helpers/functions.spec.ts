import { getPageIdFromUrl, nonEmptyObject } from './functions';

describe('nonEmptyObject', () => {
  it('should return false for non-objects and empty object', () => {
    expect(nonEmptyObject(undefined)).toEqual(false);
    expect(nonEmptyObject(null)).toEqual(false);
    expect(nonEmptyObject(0)).toEqual(false);
    expect(nonEmptyObject('')).toEqual(false);
    expect(nonEmptyObject([])).toEqual(false);
    expect(nonEmptyObject({})).toEqual(false);
    expect(nonEmptyObject(true)).toEqual(false);
  });

  it('should return true for non-empty object', () => {
    expect(nonEmptyObject({ key: '' })).toEqual(true);
    expect(nonEmptyObject({ key: null })).toEqual(true);
    expect(nonEmptyObject({ key: undefined })).toEqual(true);
  });
});

describe('getPageIdFromUrl', () => {
  it('should return undefined', () => {
    expect(getPageIdFromUrl(null)).toEqual(undefined);
    expect(getPageIdFromUrl('')).toEqual(undefined);
    expect(getPageIdFromUrl('/')).toEqual(undefined);
    expect(getPageIdFromUrl('https://example.com/')).toEqual(undefined);
    expect(getPageIdFromUrl('https://example.com/?')).toEqual(undefined);
    expect(getPageIdFromUrl('https://example.com/?x=')).toEqual(undefined);
    expect(getPageIdFromUrl('https://example.com/?page=')).toEqual(undefined);
    expect(getPageIdFromUrl('https://example.com/?page=null')).toEqual(undefined);
    expect(getPageIdFromUrl('https://example.com/?page=undefined')).toEqual(undefined);
  });

  it('should return pageId', () => {
    expect(getPageIdFromUrl('https://example.com/?page=0')).toEqual(0);
    expect(getPageIdFromUrl('https://example.com/?page=1')).toEqual(1);
  });
});
