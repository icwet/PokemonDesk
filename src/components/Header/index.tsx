import React, { FC } from 'react';
// Components
import HeaderLogo from 'components/Header/-Logo';
import HeaderNav from 'components/Header/-Nav';
// Styles
import styles from './index.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Header__container}>
        <HeaderLogo />
        <HeaderNav />
      </div>
    </header>
  );
};

export default Header;
