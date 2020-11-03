import React, { FC } from 'react';
import styles from 'components/Header/index.module.scss';

const HeaderNav: FC = () => {
  const menuItems: Array<string> = ['Home', 'Pokédex', 'Legendaries', 'Documentation'];

  return (
    <nav className={styles.Header__nav}>
      <ul className={styles.Header__ul}>
        {menuItems.map((menuItem) => (
          <li>
            <a className={styles.Header__link} href="#">
              {menuItem}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;
