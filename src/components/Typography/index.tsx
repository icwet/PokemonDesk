import React, { FC } from 'react';
import cn from 'classnames';
// Styles
import s from './index.m.scss';

type TypographyVariants = 'p';
type TypographySize = 'big' | 'small';

interface TypographyProps {
  variant: TypographyVariants;
  size: TypographySize;
}

const Typography: FC<Readonly<TypographyProps>> = ({ children, variant, size }) => {
  const TagName = variant;
  return <TagName className={cn(s.root, s[size])}>{children}</TagName>;
};

export default Typography;
