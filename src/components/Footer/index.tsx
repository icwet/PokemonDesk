import React, { FC } from 'react';
// Components
import Layout from 'components/Layout';
import AppLink from 'components/AppLink';
import FooterContent from 'components/Footer/-Content';
// Styles
import s from './index.m.scss';

interface FooterItems {
  id: number;
  text: string;
  href: string;
  icon?: {
    value: string;
    role: string;
    ariaLabel: string;
  };
}

const footerItems: Array<FooterItems> = [
  {
    id: 0,
    text: 'Make with',
    href: '/',
    icon: {
      value: '❤️',
      role: 'img',
      ariaLabel: 'love emoji',
    },
  },
  {
    id: 1,
    href: '/',
    text: 'Ours Team',
  },
];

const Footer: FC = () => {
  return (
    <footer className={s.root}>
      <Layout>
        <FooterContent>
          {footerItems.map((footerItem) => (
            <AppLink key={footerItem.id} href={footerItem.href} linkText={footerItem.text}>
              {' '}
              {footerItem.icon && (
                <span aria-label={footerItem.icon.ariaLabel} role={footerItem.icon.role}>
                  {footerItem.icon.value}
                </span>
              )}
            </AppLink>
          ))}
        </FooterContent>
      </Layout>
    </footer>
  );
};

export default Footer;
