import { Entity } from './entity';

export interface Episode extends Entity {
  air_date: string;
  episode: string;
  characters: string[];
}
