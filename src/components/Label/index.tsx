import React, { FC } from 'react';
import cn from 'classnames';
// Styles
import s from './index.m.scss';

type Themes = 'ghost' | 'blue' | 'green';

interface LabelProps {
  theme: Themes;
  value: string;
}

const Label: FC<Readonly<LabelProps>> = ({ theme, value }) => {
  return <div className={cn(s.root, s[theme])}>{value}</div>;
};

export default Label;
