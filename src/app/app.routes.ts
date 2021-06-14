import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'characters',
    loadChildren: () => import('./modules/character/character.module').then((m) => m.CharacterModule),
  },
  { path: '**', redirectTo: 'characters', pathMatch: 'full' },
];
