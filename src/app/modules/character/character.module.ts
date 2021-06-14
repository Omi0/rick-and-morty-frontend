import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CharacterViewComponent } from './components/character-view/character-view.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharactersFilterComponent } from './components/characters-filter/characters-filter.component';
import { characterRoutes } from './character.routes';
import { CharactersService } from './services/characters.service';

@NgModule({
  providers: [CharactersService],
  declarations: [CharacterViewComponent, CharactersListComponent, CharactersFilterComponent],
  imports: [CommonModule, RouterModule.forChild(characterRoutes)],
})
export class CharacterModule {}
