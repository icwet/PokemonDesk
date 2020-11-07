import React, { FC } from 'react';
import cn from 'classnames';
// Styles
import s from './index.m.scss';

type TypographyVariants = 'p' | 'small';
type TypographySize = 'small' | 'normal' | 'big';

interface TypographyProps {
  variant: TypographyVariants;
  size: TypographySize;
}

const Typography: FC<TypographyProps> = ({ children, variant, size }) => {
  const TagName = variant;
  const sizes = {
    small: s.small,
    normal: s.normal,
    big: s.big,
  };
  return <TagName className={cn(s.root, sizes[size])}>{children}</TagName>;
};

export default Typography;
