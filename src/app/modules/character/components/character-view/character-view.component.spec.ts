import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharactersService } from '../../services/characters.service';
import { CharacterViewComponent } from './character-view.component';

describe('CharacterViewComponent', () => {
  let component: CharacterViewComponent;
  let fixture: ComponentFixture<CharacterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CharactersService],
      declarations: [CharacterViewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
