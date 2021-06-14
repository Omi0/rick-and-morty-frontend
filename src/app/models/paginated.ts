import { Nullable } from '../modules/core/models/nullable';

export interface Paginated<T> {
  info: PaginatedInfo;
  results: T[];
}

export interface PaginatedInfo {
  count: number;
  pages: number;
  next: Nullable<string>;
  prev: Nullable<string>;
}
