import { Nullable } from './nullable';

export interface Paginated<T extends Iterable<any>> {
  info: PaginatedInfo;
  results: T;
}

export interface PaginatedInfo {
  count: number;
  pages: number;
  next: Nullable<string>;
  prev: Nullable<string>;
}
