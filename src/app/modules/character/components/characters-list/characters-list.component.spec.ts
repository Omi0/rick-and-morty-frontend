import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
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
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [{ provide: CharactersService, useClass: MockCharactersService }],
      declarations: [CharactersListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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

  it(`should display page$ list in template`, () => {
    component.ngOnInit();
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    const items: HTMLCollectionOf<Element> = element.getElementsByClassName('item');
    expect(items).toBeTruthy();
    expect(items.length).toBe(2);
    expect(items[0].textContent).toContain(paginatedCharacters.results[0].name);
    expect(items[0].textContent).toContain(paginatedCharacters.results[0].status);
    expect(items[0].textContent).toContain(paginatedCharacters.results[0].species);
    expect(items[0].textContent).toContain(paginatedCharacters.results[0].gender);
  });

  it(`should set routerLink for .item`, () => {
    component.page$ = of(paginatedCharacters);
    const debugElement: DebugElement = fixture.debugElement;
    const item: DebugElement = debugElement.query(By.css('.item'));
    expect(item.nativeElement.getAttribute('href')).toEqual('/1');
  });
});
