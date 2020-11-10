import React, { FC } from 'react';
import s from './index.m.scss';

const PokemonCardStats: FC = ({ children }) => {
  return <div className={s.root}>{children}</div>;
};

export default PokemonCardStats;
