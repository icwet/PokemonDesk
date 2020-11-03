import React, { FC } from 'react';
import styles from './index.module.scss';

interface FooterItems {
  id: number;
  text: string;
  icon: string;
}

const Footer: FC = () => {
  const footerItems: Array<FooterItems> = [
    {
      id: 0,
      text: 'Make with',
      icon: '❤️',
    },
    {
      id: 1,
      text: 'Ours Team',
      icon: '',
    },
  ];

  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer__container}>
        {footerItems.map((footerItem) => (
          <a key={footerItem.id} className={styles.Footer__link} href="#">
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
