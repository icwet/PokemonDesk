import React, { FC } from 'react';
// Components
import Header from 'components/Header';
import Footer from 'components/Footer';
// Styles
import styles from './App.module.scss';

const App: FC = () => {
  return (
    <div>
      <div className={styles.App__main}>
        <Header />
        <div className={styles.App__container}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam assumenda aut autem dolore
          dolorum, fugiat, impedit nihil non pariatur quaerat quisquam quod quos, recusandae repellat unde ut veritatis
          voluptatum.
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
