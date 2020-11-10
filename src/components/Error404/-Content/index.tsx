import React, { FC } from 'react';
import s from './index.m.scss';

const Error404Content: FC = ({ children }) => {
  return <div className={s.root}>{children}</div>;
};

export default Error404Content;
