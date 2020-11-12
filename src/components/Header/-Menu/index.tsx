import React, { FC } from 'react';
import { GeneralMenu } from 'routes';
import { usePath } from 'hookrouter';
// Components
import HeaderList from 'components/Header/-List';
import AppLink from 'components/AppLink';
// Styles
import s from './index.m.scss';

const HeaderMenu: FC = () => {
  const currentPath = usePath();

  return (
    <nav className={s.root}>
      <HeaderList>
        {GeneralMenu.map((menuItem) => (
          <li key={menuItem.title}>
            <AppLink
              href={menuItem.link}
              linkText={menuItem.title}
              classNames={[s.link, { [s.active]: currentPath === menuItem.link }]}
            />
          </li>
        ))}
      </HeaderList>
    </nav>
  );
};

export default HeaderMenu;
