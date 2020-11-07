import React from 'react';
// Components
import Layout from 'components/Layout';
import MainContent from 'components/Main/-Content';
import MainParallax from 'components/Main/-Parallax';
// Styles
import s from './index.m.scss';

const Main = () => {
  return (
    <Layout>
      <main className={s.root}>
        <MainContent />
        <MainParallax />
      </main>
    </Layout>
  );
};

export default Main;
