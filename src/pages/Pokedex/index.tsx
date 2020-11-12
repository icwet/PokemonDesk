import React, { FC } from 'react';
// Components
import PokemonCards from 'components/PokemonCards';
import Heading from 'components/Heading';
import useDataFetch from './actions';
import { PokemonData } from './types';
// Styles
import s from './index.m.scss';

const Pokedex: FC = () => {
  const { result, isLoading, error } = useDataFetch<Readonly<PokemonData>>(
    'http://zar.hosthot.ru/api/v1/pokemons?limit=50',
  );

  return (
    <div className={s.root}>
      <Heading variant="h2">
        {result?.count} <span className={s.bold}>Pokemons</span> for you to choose your favorite
      </Heading>
      <PokemonCards pokemons={result} loading={isLoading} error={error} />
    </div>
  );
};

export default Pokedex;
