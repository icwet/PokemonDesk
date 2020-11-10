import React, { FC, MouseEvent } from 'react';
import cn from 'classnames';
import { A } from 'hookrouter';
// Styles
import s from './index.m.scss';

type ButtonThemes = 'green' | 'yellow' | 'blue';
type ButtonSizes = 'small' | 'default' | 'large';

interface ButtonProps {
  text: string;
  size: ButtonSizes;
  theme: ButtonThemes;
  href?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<Readonly<ButtonProps>> = ({ text, size, theme, href }) => {
  return href ? (
    <A className={cn(s.root, s[size], s[theme])} href={href}>
      {text}
    </A>
  ) : (
    <button type="button" className={cn(s.root, s[size], s[theme])}>
      {text}
    </button>
  );
};

export default Button;
