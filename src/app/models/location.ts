import { Entity } from './entity';

export interface Location extends Entity {
  type: string;
  dimension: string;
  residents: string[];
}
