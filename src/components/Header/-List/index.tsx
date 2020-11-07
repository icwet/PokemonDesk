import React, { FC } from 'react';
import s from './index.m.scss';

const HeaderList: FC = ({ children }) => {
  return <ul className={s.root}>{children}</ul>;
};

export default HeaderList;
