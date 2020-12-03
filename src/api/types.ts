export interface QueryParams {
  id: string;
  name: string;
  limit: string;
}

export type PokemonTypes = 'grass' | 'fire' | 'bug' | 'poison' | 'water' | 'normal' | 'electric';

export type PokemonStats = {
  hp: number;
  attack: number;
  defense: number;
  'special-attack': number;
  'special-defense': number;
  speed: number;
};

export interface Pokemon {
  name_clean: string;
  abilities: Array<string>;
  stats: PokemonStats;
  types: Array<PokemonTypes>;
  img: string;
  name: string;
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  order: number;
  weight: number;
}

export interface PokemonData {
  count: number;
  limit: number;
  offset: number;
  pokemons: Array<Pokemon>;
  total: number;
}
