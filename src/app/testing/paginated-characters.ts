import { Character } from '@models/character';
import { Paginated } from '@models/paginated';
import { stubCharacter } from './character';

export const paginatedCharacters: Paginated<Character[]> = {
  info: {
    count: 2,
    pages: 2,
    next: 'https://rickandmortyapi.com/api/character/?page=2',
    prev: null,
  },
  results: [stubCharacter, stubCharacter],
};
