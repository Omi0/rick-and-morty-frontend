export type Resource = 'character' | 'location' | 'episode';

export type Resources = {
  [K in Resource as `${K}s`]: string;
};

export interface ResourceParams {
  page: number;
}
