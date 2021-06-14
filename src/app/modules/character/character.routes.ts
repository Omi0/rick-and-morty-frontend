import { Routes } from '@angular/router';
import { CharacterViewComponent } from './components/character-view/character-view.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';

export const characterRoutes: Routes = [
  { path: '', component: CharactersListComponent },
  { path: ':id', component: CharacterViewComponent },
];
