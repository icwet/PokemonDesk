import React, { FC } from 'react';
// Components
import Layout from 'components/Layout';
import Heading from 'components/Heading';
import Typography from 'components/Typography';
// Styles
import s from './index.m.scss';
import pokeball from './img/poke-ball-2.svg';

interface ErrorProps {
  title: string;
  errorMessage: string;
}

const Error: FC<ErrorProps> = ({ title, errorMessage }) => {
  return (
    <Layout>
      <section className={s.root}>
        <img className={s.img} src={pokeball} alt="pokeball" />
        <div>
          <Heading variant="h3">{title}</Heading>
          <Typography variant="p" size="small">
            {errorMessage}
          </Typography>
        </div>
      </section>
    </Layout>
  );
};

export default Error;
