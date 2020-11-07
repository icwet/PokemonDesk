import React, { FC } from 'react';
import s from './index.m.scss';

const FooterContent: FC = ({ children }) => {
  return <div className={s.root}>{children}</div>;
};

export default FooterContent;
