import React, { FC } from 'react';
// Components
import PokemonCard from 'components/PokemonCard';
import Layout from 'components/Layout';
// Styles
import { PokemonData } from 'api/types';
import s from './index.m.scss';
import Error from '../Error';
import Loading from '../Loading';

interface PokemonCardsProps {
  pokemons: PokemonData | null;
  loading: boolean;
  error: string;
}

const PokemonCards: FC<PokemonCardsProps> = ({ pokemons, loading, error }) => {
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error title="Something went wrong" errorMessage={error} />;
  }

  return (
    <Layout>
      <div className={s.root}>
        {pokemons?.pokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </Layout>
  );
};

export default PokemonCards;
