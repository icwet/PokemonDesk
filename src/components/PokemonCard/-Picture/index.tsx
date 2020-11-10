import React, { FC } from 'react';
import cn from 'classnames';
// Styles
import s from './index.m.scss';

export type PokemonTypes = 'grass' | 'fire' | 'bug' | 'poison' | 'water';

interface PokemonCardPictureProps {
  href: string;
  background: PokemonTypes;
}

const PokemonCardPicture: FC<PokemonCardPictureProps> = ({ href, background }) => {
  return (
    <div className={cn(s.root, s[background])}>
      <img className={s.img} src={href} alt="" />
    </div>
  );
};

export default PokemonCardPicture;
