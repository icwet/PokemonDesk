import React, { FC } from 'react';
// Components
import Parallax from 'components/Parallax';
// Styles
import s from './index.m.scss';

const MainParallax: FC = () => {
  return (
    <div className={s.root}>
      <Parallax />
    </div>
  );
};

export default MainParallax;
