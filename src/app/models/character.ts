import { Entity } from './entity';
import { ResourceParams } from './resource';

export interface Character extends Entity {
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: CharacterLocation;
  location: CharacterLocation;
  image: string;
  episode: string[];
}

export interface CharacterLocation {
  name: string;
  url: string;
}

export interface CharacterParams extends ResourceParams {
  name: string;
  status: 'alive' | 'dead' | 'unknown';
  species: string;
  type: string;
  gender: 'female' | 'male' | 'genderless' | 'unknown';
}
