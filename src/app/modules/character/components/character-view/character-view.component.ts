import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.scss'],
})
export class CharacterViewComponent implements OnInit {
  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {}
}
