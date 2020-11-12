export type PokemonTypes = 'grass' | 'fire' | 'bug' | 'poison' | 'water' | 'normal' | 'electric';
export type PokemonStats = {
  hp: number;
  attack: number;
  defense: number;
  'special-attack': number;
  'special-defense': number;
  speed: number;
};
export type PokemonAbilities = Array<string>;

export interface IPokemon {
  name_clean: string;
  abilities: PokemonAbilities;
  stats: PokemonStats;
  types: PokemonTypes[];
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
  pokemons: IPokemon[];
  total: number;
}
