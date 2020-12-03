import React from 'react';
import s from './index.m.scss';

const Loading = () => {
  return (
    <div className={s.root}>
      <div className={s.loaderInner}>
        <div className={s.loaderLineWrap}>
          <div className={s.loaderLine} />
        </div>
        <div className={s.loaderLineWrap}>
          <div className={s.loaderLine} />
        </div>
        <div className={s.loaderLineWrap}>
          <div className={s.loaderLine} />
        </div>
        <div className={s.loaderLineWrap}>
          <div className={s.loaderLine} />
        </div>
        <div className={s.loaderLineWrap}>
          <div className={s.loaderLine} />
        </div>
      </div>
    </div>
  );
};

export default Loading;
