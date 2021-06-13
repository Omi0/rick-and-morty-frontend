import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { CharactersService } from './characters.service';
import { Resources } from '@models/resource';
import { ApiService } from './api.service';
import { of } from 'rxjs';
import { Paginated } from '@models/paginated';
import { Character } from '@models/character';

class ApiServiceMock {
  public getResourceUrlByType(type: keyof Resources) {
    return of('mockUrl');
  }
}

describe('CharactersService', () => {
  let injector: TestBed;
  let service: CharactersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CharactersService, { provide: ApiService, useClass: ApiServiceMock }],
    });
    injector = getTestBed();
    service = injector.inject(CharactersService);
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

  describe('getCharacter()', () => {
    it('should return response of type Character', () => {
      const id: number = 1;
      const responseStub: Character = {
        id: id,
      } as any;

      service.get(1).subscribe((res) => {
        expect(res).toEqual(responseStub);
      });

      const req = httpMock.expectOne(`mockUrl/${id}`);
      expect(req.request.method).toBe('GET');
      req.flush(responseStub);
    });
  });

  describe('getCharacters()', () => {
    it('should return response of type Paginated<Character[]>', () => {
      const responseStub: Paginated<Character[]> = {
        info: {} as any,
        results: [],
      };
      service.getAll().subscribe((res) => {
        expect(res).toEqual(responseStub);
      });

      const req = httpMock.expectOne('mockUrl');
      expect(req.request.method).toBe('GET');
      req.flush(responseStub);
    });
  });
});
