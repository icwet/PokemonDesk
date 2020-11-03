import React, { FC } from 'react';
import styles from 'components/Header/index.module.scss';

interface MenuItems {
  id: number;
  text: string;
}

const HeaderNav: FC = () => {
  const menuItems: Array<MenuItems> = [
    {
      id: 0,
      text: 'Home',
    },
    {
      id: 1,
      text: 'Pokédex',
    },
    {
      id: 2,
      text: 'Legendaries',
    },
    {
      id: 3,
      text: 'Documentation',
    },
  ];

  return (
    <nav className={styles.Header__nav}>
      <ul className={styles.Header__ul}>
        {menuItems.map((menuItem) => (
          <li key={menuItem.id}>
            <a className={styles.Header__link} href="#">
              {menuItem.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;
