import React from 'react';
import img from './img/team-rocket.png';
import s from './index.m.scss';

const Error404Image = () => {
  return (
    <div className={s.root}>
      <div className={s.backText}>404</div>
      <img className={s.image} src={img} alt="404 Not Found" />
    </div>
  );
};

export default Error404Image;
