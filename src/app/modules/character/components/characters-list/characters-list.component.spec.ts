import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Character, CharacterParams } from '@models/character';
import { Paginated } from '@models/paginated';
import { paginatedCharacters } from '@testing/paginated-characters';
import { Observable, of } from 'rxjs';
import { CharactersService } from '../../services/characters.service';
import { CharactersListComponent } from './characters-list.component';

class MockCharactersService {
  getPage = (params?: Partial<CharacterParams>): Observable<Paginated<Character[]>> => of(paginatedCharacters);
}

describe('CharactersListComponent', () => {
  let component: CharactersListComponent;
  let fixture: ComponentFixture<CharactersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CharactersService],
      declarations: [CharactersListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should display 'noResults' in template if page$ undefined`, () => {
    component.page$ = of(undefined) as any;
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).toContain('No results found');
  });

  it(`should display 'noResults' in template if page$ undefined`, () => {
    component.page$ = of(undefined) as any;
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).toContain('No results found');
  });
});
