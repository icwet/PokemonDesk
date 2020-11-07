import React, { FC } from 'react';
// Components
import Layout from 'components/Layout';
import HeaderLogo from 'components/Header/-Logo';
import HeaderMenu from 'components/Header/-Menu';
import HeaderContent from 'components/Header/-Content';
// Styles
import s from './index.m.scss';

const Header: FC = () => {
  return (
    <header className={s.root}>
      <Layout>
        <HeaderContent>
          <HeaderLogo />
          <HeaderMenu />
        </HeaderContent>
      </Layout>
    </header>
  );
};

export default Header;
