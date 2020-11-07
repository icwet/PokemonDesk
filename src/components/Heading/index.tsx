import React, { FC } from 'react';
import cn from 'classnames';
// Styles
import s from './index.m.scss';

type HeadingVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

interface HeadingProps {
  variant: HeadingVariants;
}

const Heading: FC<HeadingProps> = ({ children, variant }) => {
  const TagName = variant;
  const variants = {
    h1: s.h1,
    h2: s.h2,
    h3: s.h3,
    h4: s.h4,
    h5: s.h5,
  };
  return <TagName className={cn(s.root, variants[variant])}>{children}</TagName>;
};

export default Heading;
