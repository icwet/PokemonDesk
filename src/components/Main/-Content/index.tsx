import React, { FC } from 'react';
// Components
import Heading from 'components/Heading';
import Typography from 'components/Typography';
import Button from 'components/Button';
// Styles
import s from './index.m.scss';

const MainContent: FC = () => {
  return (
    <div className={s.root}>
      <Heading variant="h1">
        <span style={{ fontWeight: 'bold' }}>Find</span> all your favorite{' '}
        <span style={{ fontWeight: 'bold' }}>Pokemon</span>
      </Heading>
      <Typography variant="p" size="big">
        You can know the type of Pokemon, its strengths, disadvantages and abilities
      </Typography>
      <Button href="/pokedex" text="See pokemons" size="default" theme="green" />
    </div>
  );
};

export default MainContent;
