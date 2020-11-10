import React, { FC } from 'react';
// Components
import { IPokemon } from 'components/PokemonCards';
import Heading from 'components/Heading';
import Label from 'components/Label';
import Stat from 'components/Stat';
import PokemonCardStats from './-Stats';
import PokemonCardLabels from './-Labels';
import PokemonCardPicture from './-Picture';
// Styles
import s from './index.m.scss';

interface PokemonCardProps {
  pokemon: IPokemon;
}

const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <div className={s.root}>
      <Heading variant="h3">{pokemon.name}</Heading>
      <PokemonCardStats>
        <Stat name="Attack" value={pokemon.stats.attack} />
        <Stat name="Defence" value={pokemon.stats.defense} />
      </PokemonCardStats>
      <PokemonCardLabels>
        {pokemon.abilities.map((ability, i) => (
          <Label theme={i === 0 ? 'green' : 'blue'} value={ability} />
        ))}
      </PokemonCardLabels>
      <PokemonCardPicture background={pokemon.types[0]} href={pokemon.img} />
    </div>
  );
};

export default PokemonCard;
