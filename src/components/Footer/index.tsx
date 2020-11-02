import React, { FC } from 'react';
import styles from './index.module.scss';

const Footer: FC = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer__container}>
        <a className={styles.Footer__link} href="#">
          Make with{' '}
          <span aria-label="love emoji" role="img">
            ❤️
          </span>
        </a>
        <a className={styles.Footer__link} href="#">
          Ours Team
        </a>
      </div>
    </footer>
  );
};

export default Footer;
