import React, { FC } from 'react';
// Actions
import useDataFetch from 'hooks/useDataFetch';
import { EndPoints } from 'api/getUrlWithParamsConfig';
import { Pokemon as IPokemon, QueryParams } from 'api/types';
// Styles
import Error from 'components/Error';
import Loading from 'components/Loading';
import s from './index.m.scss';

export interface PokemonProps {
  id: QueryParams;
}

const Pokemon: FC<PokemonProps> = ({ id }) => {
  const { result, isLoading, error } = useDataFetch<Readonly<IPokemon>>(EndPoints.getPokemon, { id: `${id}` });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error title="Something went wrong" errorMessage={error} />;
  }

  return <div className={s.root}>This is pokemon id equal: {result?.name}</div>;
};

export default Pokemon;
