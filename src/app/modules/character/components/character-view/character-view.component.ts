import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Character } from '@models/character';
import { Nullable } from '@models/nullable';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.scss'],
})
export class CharacterViewComponent implements OnInit {
  public character$!: Observable<Character | undefined>;
  constructor(private route: ActivatedRoute, private router: Router, private charactersService: CharactersService) {}

  ngOnInit(): void {
    const id: Nullable<string> = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.character$ = this.charactersService.getOne(parseInt(id)).pipe(catchError((err) => of(undefined)));
    }
  }
}
