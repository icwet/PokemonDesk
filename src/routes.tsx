import React from 'react';
import Home from 'pages/Home';
import Pokedex from 'pages/Pokedex';

interface IGeneralMenu {
  title: string;
  link: string;
  component: () => JSX.Element;
}

export const GeneralMenu: IGeneralMenu[] = [
  {
    title: 'Home',
    link: '/',
    component: () => <Home />,
  },
  {
    title: 'Pokédex',
    link: '/pokedex',
    component: () => <Pokedex />,
  },
  {
    title: 'Legendaries',
    link: '/legendaries',
    component: () => <Pokedex />,
  },
  {
    title: 'Documentation',
    link: '/documentation',
    component: () => <Pokedex />,
  },
];

interface IMenu {
  [n: string]: () => JSX.Element;
}

const routes = GeneralMenu.reduce((acc: IMenu, item: IGeneralMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
