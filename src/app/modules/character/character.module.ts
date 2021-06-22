import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CharacterViewComponent } from './components/character-view/character-view.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharactersFilterComponent } from './components/characters-filter/characters-filter.component';
import { characterRoutes } from './character.routes';
import { CharactersService } from './services/characters.service';
import { CoreModule } from '../core/core.module';

@NgModule({
  providers: [CharactersService],
  declarations: [CharacterViewComponent, CharactersListComponent, CharactersFilterComponent],
  imports: [CoreModule, RouterModule.forChild(characterRoutes)],
})
export class CharacterModule {}
