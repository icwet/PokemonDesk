import React, { FC, useEffect, useState } from 'react';
// Svg
import { ReactComponent as CloudSmall } from './img/cloud-small.svg';
import { ReactComponent as CloudBig } from './img/cloud-big.svg';
import { ReactComponent as Pikachu } from './img/pikachu.svg';
import { ReactComponent as PokeBall1 } from './img/poke-ball-1.svg';
import { ReactComponent as PokeBall2 } from './img/poke-ball-2.svg';
// Styles
import s from './index.m.scss';

const Parallax: FC = () => {
  const [axisX, setAxisX] = useState(0);
  const [axisY, setAxisY] = useState(0);
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setAxisX(event.screenX);
      setAxisY(event.screenY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [axisX, axisY]);

  return (
    <div className={s.root}>
      <div className={s.cloudBig} style={{ transform: `translate(${axisX * 0.03}px, ${axisY * 0.02}px)` }}>
        <CloudBig />
      </div>
      <div className={s.cloud} style={{ transform: `translate(${axisX * 0.02}px, ${axisY * 0.03}px)` }}>
        <CloudSmall />
      </div>
      <div className={s.pikachu} style={{ transform: `translate(${axisX * 0.05}px, ${axisY * 0.02}px)` }}>
        <Pikachu />
      </div>
      <div className={s.smallPokeBall} style={{ transform: `translate(${axisX * 0.01}px, ${axisY * 0.02}px)` }}>
        <PokeBall1 />
      </div>
      <div className={s.pokeBall} style={{ transform: `translate(${axisX * 0.02}px, ${axisY * 0.02}px)` }}>
        <PokeBall2 />
      </div>
    </div>
  );
};

export default Parallax;
