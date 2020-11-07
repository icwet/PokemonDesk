import React, { FC } from 'react';
// Components
import Layout from 'components/Layout';
import HeaderLogo from 'components/Header/-Logo';
import HeaderMenu from 'components/Header/-Menu';
import HeaderContent from 'components/Header/-Content';
import AppLink from 'components/AppLink';
// Styles
import s from './index.m.scss';

interface MenuItems {
  id: number;
  text: string;
  href: string;
}

const menuItems: Array<Readonly<MenuItems>> = [
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

const Header: FC = () => {
  return (
    <header className={s.root}>
      <Layout>
        <HeaderContent>
          <HeaderLogo />
          <HeaderMenu>
            {menuItems.map((menuItem) => (
              <li key={menuItem.id}>
                <AppLink
                  href={menuItem.href}
                  linkText={menuItem.text}
                  classNames={[s.link, { [s.active]: window.location.pathname === menuItem.href }]}
                />
              </li>
            ))}
          </HeaderMenu>
        </HeaderContent>
      </Layout>
    </header>
  );
};

export default Header;
