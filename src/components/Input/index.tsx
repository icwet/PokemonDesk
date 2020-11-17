import React, { FC, ChangeEvent } from 'react';
import cn from 'classnames';
import s from './index.m.scss';

type InputTypes = 'search';

interface InputProps {
  type: InputTypes;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ type, placeholder, onChange }) => {
  return (
    <div className={s.inputWrapper}>
      <input className={cn(s.root, s[type])} placeholder={placeholder} onChange={onChange} />
    </div>
  );
};

export default Input;
