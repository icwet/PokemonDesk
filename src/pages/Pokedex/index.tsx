import React, { FC, ChangeEvent, useState } from 'react';
// Components
import Layout from 'components/Layout';
import PokemonCards from 'components/PokemonCards';
import Heading from 'components/Heading';
import Input from 'components/Input';
// Actions
import useDataFetch from 'hooks/useDataFetch';
import useDebounce from 'hooks/useDebounce';
import { EndPoints } from 'api/getUrlWithParamsConfig';
import { PokemonData, QueryParams } from 'api/types';
// Styles
import s from './index.m.scss';

const Pokedex: FC = () => {
  const [inputData, setInputData] = useState('');
  const [query, setQuery] = useState<Partial<QueryParams>>({ limit: '20' });
  const debouncedInputData = useDebounce(inputData, 1000);
  const { result, isLoading, error } = useDataFetch<Readonly<PokemonData>>(EndPoints.getPokemons, query, [
    debouncedInputData,
  ]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputData(event.target.value);
    setQuery((state) => ({
      ...state,
      name: event.target.value,
    }));
  };

  return (
    <div className={s.root}>
      <Layout>
        <Heading variant="h2">
          {result?.count} <span className={s.bold}>Pokemons</span> for you to choose your favorite
        </Heading>
        <Input type="search" placeholder="Encuentra tu pokémon..." onChange={handleChange} />
      </Layout>
      <PokemonCards pokemons={result} loading={isLoading} error={error} />
    </div>
  );
};

export default Pokedex;
