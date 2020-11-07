import React, { FC } from 'react';
// Components
import HeaderList from 'components/Header/-List';
// Styles
import s from './index.m.scss';

const HeaderMenu: FC = ({ children }) => {
  return (
    <nav className={s.root}>
      <HeaderList>{children}</HeaderList>
    </nav>
  );
};

export default HeaderMenu;
