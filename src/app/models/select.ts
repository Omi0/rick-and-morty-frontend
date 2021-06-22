export type Select<T = SelectOption> = T[];

export interface SelectOption {
  name: string;
  value: string;
}
