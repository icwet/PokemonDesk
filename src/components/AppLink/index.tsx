import React, { FC } from 'react';
import { A } from 'hookrouter';
import cn from 'classnames';
// Styles
import s from './index.m.scss';

interface AppLinkProps {
  linkText: string;
  classNames?: Array<string | object>;
  href: string;
}

const AppLink: FC<Readonly<AppLinkProps>> = ({ children, href, linkText, classNames }) => {
  return (
    <A href={href} className={cn(s.root, classNames)}>
      <span>{linkText}</span>
      {children}
    </A>
  );
};

export default AppLink;
