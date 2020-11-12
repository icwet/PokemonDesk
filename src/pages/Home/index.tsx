import React, { FC } from 'react';
// Components
import Main from 'components/Main';
// Styles
import s from './index.m.scss';

const Home: FC = () => {
  return (
    <div>
      <div className={s.root}>
        <Main />
      </div>
    </div>
  );
};

export default Home;
