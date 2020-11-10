import React, { FC } from 'react';
import Error404 from 'components/Error404';
import s from './index.m.scss';

const NotFound: FC = () => {
  return (
    <div className={s.root}>
      <Error404 />
    </div>
  );
};

export default NotFound;
