import React, { FC } from 'react';
// Components
import PokemonCard from 'components/PokemonCard';
import Layout from 'components/Layout';
import Typography from 'components/Typography';
// Styles
import { PokemonData } from 'api/types';
import s from './index.m.scss';

interface PokemonCardsProps {
  pokemons: PokemonData | null;
  loading: boolean;
  error: string;
}

const PokemonCards: FC<PokemonCardsProps> = ({ pokemons, loading, error }) => {
  if (loading) {
    return (
      <Layout>
        <div className={s.info}>
          <Typography variant="p" size="big">
            ...loading
          </Typography>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className={s.info}>
          <Typography variant="p" size="big">
            {error}
          </Typography>
        </div>
      </Layout>
    );
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
