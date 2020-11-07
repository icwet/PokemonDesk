import React, { FC } from 'react';
import { Link } from 'react-router-dom';
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
    <Link to={href} className={cn(s.root, classNames)}>
      <span>{linkText}</span>
      {children}
    </Link>
  );
};

export default AppLink;
