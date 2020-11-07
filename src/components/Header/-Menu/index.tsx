import React, { FC } from 'react';
// Components
import HeaderList from 'components/Header/-List';
import AppLink from 'components/AppLink';
// Styles
import s from './index.m.scss';

interface MenuItems {
  id: number;
  text: string;
  href: string;
}

const menuItems: Array<MenuItems> = [
  {
    id: 0,
    text: 'Home',
    href: '/',
  },
  {
    id: 1,
    text: 'Pokédex',
    href: '/pokedex',
  },
  {
    id: 2,
    text: 'Legendaries',
    href: '#',
  },
  {
    id: 3,
    text: 'Documentation',
    href: '#',
  },
];

const HeaderMenu: FC = () => {
  return (
    <nav className={s.root}>
      <HeaderList>
        {menuItems.map((menuItem) => (
          <li key={menuItem.id}>
            <AppLink
              href={menuItem.href}
              linkText={menuItem.text}
              classNames={[s.link, { [s.active]: window.location.pathname === menuItem.href }]}
            />
          </li>
        ))}
      </HeaderList>
    </nav>
  );
};

export default HeaderMenu;
