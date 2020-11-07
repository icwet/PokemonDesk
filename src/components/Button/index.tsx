import React, { FC, MouseEvent } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
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
  const sizes = {
    default: s.default,
    small: s.small,
    large: s.large,
  };

  const themes = {
    green: s.green,
    yellow: s.yellow,
    blue: s.blue,
  };
  return href ? (
    <Link to={href} className={cn(s.root, sizes[size], themes[theme])}>
      {text}
    </Link>
  ) : (
    <button type="button" className={cn(s.root, sizes[size], themes[theme])}>
      {text}
    </button>
  );
};

export default Button;
