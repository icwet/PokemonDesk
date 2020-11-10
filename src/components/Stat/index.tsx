import React, { FC } from 'react';
// Components
import Label from 'components/Label';
// Styles
import s from './index.m.scss';

interface StatProps {
  name: string;
  value: number;
}

const Stat: FC<StatProps> = ({ name, value }) => {
  return (
    <div className={s.root}>
      <span className={s.circle}>{value}</span>
      <Label theme="ghost" value={name} />
    </div>
  );
};

export default Stat;
