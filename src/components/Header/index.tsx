import React, { FC } from 'react';
// Components
import Layout from 'components/Layout';
import HeaderLogo from 'components/Header/-Logo';
import HeaderMenu from 'components/Header/-Menu';
import HeaderContent from 'components/Header/-Content';
import AppLink from 'components/AppLink';
// Routing
import { GeneralMenu } from 'routes';
import { usePath } from 'hookrouter';
// Styles
import s from './index.m.scss';

const Header: FC = () => {
  const currentPath = usePath();

  return (
    <header className={s.root}>
      <Layout>
        <HeaderContent>
          <HeaderLogo />
          <HeaderMenu>
            {GeneralMenu.map((menuItem) => (
              <li key={menuItem.title}>
                <AppLink
                  href={menuItem.link}
                  linkText={menuItem.title}
                  classNames={[s.link, { [s.active]: currentPath === menuItem.link }]}
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
