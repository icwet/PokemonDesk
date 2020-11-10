import React, { FC } from 'react';
// Components
import Header from 'components/Header';
import PokemonCards from 'components/PokemonCards';
import Footer from 'components/Footer';
// Styles
import s from './index.m.scss';

const Pokedex: FC = () => {
  return (
    <div className={s.root}>
      <Header />
      <PokemonCards />
      <Footer />
    </div>
  );
};

export default Pokedex;
