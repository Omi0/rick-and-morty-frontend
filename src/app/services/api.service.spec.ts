import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { Resources } from '@models/resource';
import { environment } from '@environments/environment';

describe('ApiService', () => {
  let injector: TestBed;
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });
    injector = getTestBed();
    service = injector.inject(ApiService);
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('constructor()', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });

  describe('getUrlByType()', () => {
    it('should return resource url for a given type', () => {
      const resources: Partial<Resources> = {
        characters: 'characters',
      };

      service.getResourceUrlByType('characters').subscribe((res) => {
        expect(res).toEqual('characters');
      });

      const req = httpMock.expectOne(environment.baseUrl);
      expect(req.request.method).toBe('GET');
      req.flush(resources);
    });

    it('should throw an error for invalid resource type', () => {
      const resources: Partial<Resources> = {
        characters: 'characters',
      };

      service.getResourceUrlByType('unknown' as any).subscribe(
        () => {},
        (err: Error) => {
          expect(err.message).toBe(`Invalid resource type: 'unknown'`);
        }
      );

      const req = httpMock.expectOne(environment.baseUrl);
      expect(req.request.method).toBe('GET');
      req.flush(resources);
    });
  });
});
