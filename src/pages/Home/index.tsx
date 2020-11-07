import React, { FC } from 'react';
// Components
import Header from 'components/Header';
import Main from 'components/Main';
import Footer from 'components/Footer';
// Styles
import s from './index.m.scss';

const Home: FC = () => {
  return (
    <div>
      <div className={s.root}>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
