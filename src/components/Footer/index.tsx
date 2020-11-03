import React, { FC } from 'react';
import styles from './index.module.scss';

interface FooterItems {
  text: string;
  icon: string;
}

const Footer: FC = () => {
  const footerItems: Array<FooterItems> = [
    {
      text: 'Make with',
      icon: '❤️',
    },
    {
      text: 'Ours Team',
      icon: '',
    },
  ];

  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer__container}>
        {footerItems.map((footerItem) => (
          <a className={styles.Footer__link} href="#">
            {footerItem.text}{' '}
            {footerItem.icon && (
              <span aria-label="love emoji" role="img">
                {footerItem.icon}
              </span>
            )}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
