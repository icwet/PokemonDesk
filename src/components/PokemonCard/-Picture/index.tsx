import React, { FC } from 'react';
import cn from 'classnames';
// Types
import { PokemonTypes } from 'api/types';
// Styles
import s from './index.m.scss';

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
