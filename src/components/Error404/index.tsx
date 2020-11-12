import React from 'react';
// Routing
import { navigate } from 'hookrouter';
import { LinkEnum } from 'routes';
// Components
import Heading from 'components/Heading';
import Button from 'components/Button';
import Error404Image from './-Image';
import Error404Content from './-Content';
// Styles
import s from './index.m.scss';

const Error404 = () => {
  return (
    <section className={s.root}>
      <Error404Image />
      <Error404Content>
        <Heading variant="h2">
          <span className={s.text}>The rocket team</span> <span className={s.text}>has won this time.</span>
        </Heading>
        <Button onClick={() => navigate(LinkEnum.HOME)} text="Return" size="default" theme="yellow" />
      </Error404Content>
    </section>
  );
};

export default Error404;
