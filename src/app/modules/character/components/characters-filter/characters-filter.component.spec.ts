import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CharactersFilterComponent } from './characters-filter.component';

describe('CharactersFilterComponent', () => {
  let component: CharactersFilterComponent;
  let fixture: ComponentFixture<CharactersFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharactersFilterComponent],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should not display select in template if statusSelect is empty`, () => {
    component.statusSelect = [];
    component.genderSelect = [];
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    const select: HTMLSelectElement = element.querySelector('select')!;
    expect(select).toBeFalsy();
  });

  it(`should display status select in template`, () => {
    const statusSelectStub = { name: 'Alive', value: 'alive' };
    component.statusSelect = [statusSelectStub];
    component.genderSelect = [];
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    const select: HTMLSelectElement = element.querySelector('select')!;
    expect(select.options.length).toBe(2); // incl default one
    expect(select.options[1].value).toBe(statusSelectStub.value);
  });
});
