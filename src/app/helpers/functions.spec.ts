import { nonEmptyObject } from './functions';

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
