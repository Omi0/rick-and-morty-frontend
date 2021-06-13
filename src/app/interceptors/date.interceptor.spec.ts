import { DateInterceptor } from './date.interceptor';

describe('DateInterceptor', () => {
  let fixture: DateInterceptor;

  beforeEach(() => {
    fixture = new DateInterceptor();
  });

  describe('constructor()', () => {
    it('should be created', () => {
      expect(fixture).toBeTruthy();
    });
  });

  describe('postProcessDates()', () => {
    it('should recurevely convert iso8601 date strings into Date object', () => {
      const res = fixture.postProcessDates({
        key: '2021-01-01T00:00:00.250Z',
        child: {
          key: '2021-01-01T00:00:00.250Z',
        },
      });

      expect(res.key).toBeInstanceOf(Date);
      expect(res.child.key).toBeInstanceOf(Date);
    });
  });
});
