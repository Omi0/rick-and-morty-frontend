import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Character } from '@models/character';
import { stubCharacter } from '@testing/character';
import { Observable, of } from 'rxjs';
import { CharactersService } from '../../services/characters.service';
import { CharacterViewComponent } from './character-view.component';

class MockCharactersService {
  getOne = (id: number): Observable<Character> => of(stubCharacter);
}

describe('CharacterViewComponent', () => {
  let component: CharacterViewComponent;
  let fixture: ComponentFixture<CharacterViewComponent>;
  let service: CharactersService;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [{ provide: CharactersService, useClass: MockCharactersService }],
      declarations: [CharacterViewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterViewComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(CharactersService);
    route = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should set character$ OnInit if param 'id' is present`, () => {
    const spyRoute = spyOn(route.snapshot.paramMap, 'get');
    spyRoute.and.returnValue('1');
    component.ngOnInit();
    expect(component.character$).toBeTruthy();
  });

  it(`should not set character$ OnInit if param 'id' is null`, () => {
    const spyRoute = spyOn(route.snapshot.paramMap, 'get');
    spyRoute.and.returnValue(null);
    component.ngOnInit();
    expect(component.character$).toBeFalsy();
  });

  it(`should display 'notFound' in template if character$ undefined`, () => {
    component.character$ = of(undefined);
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).toContain('No Character found');
  });

  it(`should display character$ description in template`, () => {
    component.character$ = of(stubCharacter);
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    const div: HTMLDivElement = element.querySelector('.description')!;
    expect(div.textContent).toContain(stubCharacter.name);
    expect(div.textContent).toContain(stubCharacter.status);
    expect(div.textContent).toContain(stubCharacter.species);
    expect(div.textContent).toContain(stubCharacter.gender);
  });

  it(`should display character$ img in template`, () => {
    component.character$ = of(stubCharacter);
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    const img: HTMLImageElement = element.querySelector('img')!;
    expect(img.src).toEqual(stubCharacter.image);
  });
});
