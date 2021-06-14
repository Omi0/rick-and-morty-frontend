import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersFilterComponent } from './characters-filter.component';

describe('CharactersFilterComponent', () => {
  let component: CharactersFilterComponent;
  let fixture: ComponentFixture<CharactersFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
