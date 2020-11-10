import React, { FC } from 'react';
// Components
import PokemonCard from 'components/PokemonCard';
import Heading from 'components/Heading';
import Layout from 'components/Layout';
import Label from 'components/Label';
import Stat from 'components/Stat';
import PokemonCardPicture, { PokemonTypes } from 'components/PokemonCard/-Picture';
import PokemonCardLabels from 'components/PokemonCard/-Labels';
import PokemonCardStats from 'components/PokemonCard/-Stats';
// Data
import data from './data.json';
// Styles
import s from './index.m.scss';

interface IPokemon {
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
          <PokemonCard key={pokemon.id}>
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
          </PokemonCard>
        ))}
      </div>
    </Layout>
  );
};

export default PokemonCards;
