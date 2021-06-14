import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DateInterceptor } from './date.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MockService {
  constructor(private http: HttpClient) {}

  get<T>() {
    return this.http.get<T>('');
  }
}

interface Testable {
  key: string | Date;
  child?: Testable;
}

describe(`DateInterceptor`, () => {
  let service: MockService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        MockService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: DateInterceptor,
          multi: true,
        },
      ],
    });

    service = TestBed.inject(MockService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should recurevely convert response iso8601 date strings into Date object', () => {
    const testCase: Testable = {
      key: '2021-01-01T00:00:00.250Z',
      child: {
        key: '2021-01-01T00:00:00.250Z',
      },
    };
    service.get<Testable>().subscribe((res) => {
      expect(res.key).toBeInstanceOf(Date);
      if (res.child && res.child.key) {
        expect(res.child.key).toBeInstanceOf(Date);
      }
    });

    const req = httpMock.expectOne('');
    expect(req.request.method).toBe('GET');
    req.flush(testCase);
  });
});
