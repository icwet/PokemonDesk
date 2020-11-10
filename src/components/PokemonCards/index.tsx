import React, { FC } from 'react';
// Components
import PokemonCard from 'components/PokemonCard';
import Layout from 'components/Layout';
import { PokemonTypes } from 'components/PokemonCard/-Picture';
// Data
import data from './data.json';
// Styles
import s from './index.m.scss';

export interface IPokemon {
  nameClean: string;
  abilities: Array<string>;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    'special-attack': number;
    'special-defense': number;
    speed: number;
  };
  types: Array<PokemonTypes>;
  img: string;
  name: string;
  baseExperience: number;
  height: number;
  id: number;
  isDefault: boolean;
  order: number;
  weight: number;
}

const PokemonCards: FC = () => {
  const pokemons: IPokemon[] = data;
  return (
    <Layout>
      <div className={s.root}>
        {pokemons.map((pokemon: IPokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </Layout>
  );
};

export default PokemonCards;
