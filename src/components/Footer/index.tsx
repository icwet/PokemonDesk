import React, { FC } from 'react';
import styles from './index.module.scss';

interface FooterItems {
  id: number;
  text: string;
  icon?: {
    value: string;
    role: string;
    ariaLabel: string;
  };
}

const Footer: FC = () => {
  const footerItems: Array<FooterItems> = [
    {
      id: 0,
      text: 'Make with',
      icon: {
        value: '❤️',
        role: 'img',
        ariaLabel: 'love emoji',
      },
    },
    {
      id: 1,
      text: 'Ours Team',
    },
  ];

  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer__container}>
        {footerItems.map((footerItem) => (
          <a key={footerItem.id} className={styles.Footer__link} href="#">
            {footerItem.text}{' '}
            {footerItem.icon && (
              <span aria-label={footerItem.icon.ariaLabel} role={footerItem.icon.role}>
                {footerItem.icon.value}
              </span>
            )}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
