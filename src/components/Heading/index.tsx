import React, { FC } from 'react';
import cn from 'classnames';
// Styles
import s from './index.m.scss';

type HeadingVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

interface HeadingProps {
  variant: HeadingVariants;
}

const Heading: FC<Readonly<HeadingProps>> = ({ children, variant }) => {
  const TagName = variant;
  return <TagName className={cn(s.root, s[variant])}>{children}</TagName>;
};

export default Heading;
