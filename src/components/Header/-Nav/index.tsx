import React, { FC } from 'react';
import styles from 'components/Header/index.module.scss';

const HeaderNav: FC = () => {
  return (
    <nav className={styles.Header__nav}>
      <ul className={styles.Header__ul}>
        <li>
          <a className={styles.Header__link} href="#">
            Pokédex
          </a>
        </li>
        <li>
          <a className={styles.Header__link} href="#">
            Legendaries
          </a>
        </li>
        <li>
          <a className={styles.Header__link} href="#">
            Documentation
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
