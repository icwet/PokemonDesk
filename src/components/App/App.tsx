import React, { FC } from "react";
import cn from "classnames";
import styles from "./App.modules.scss";

export const App: FC = () => {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <ul className={styles.ul}>
          <li className={styles.li}>Home</li>
          <li className={styles.li}>Blog</li>
          <li className={styles.li}>Contact</li>
          <li className={styles.li}>About</li>
        </ul>
      </header>
      <main className={styles.main}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, aspernatur at beatae consequatur, dolorem dolores
        eligendi est ex explicabo libero, maxime nulla numquam quaerat quia reiciendis rem totam vel veritatis.
      </main>
      <footer className={styles.footer}>
        <ul className={cn(styles.ul, styles.ul_type_footer)}>
          <li className={styles.li}>Home</li>
          <li className={styles.li}>Blog</li>
          <li className={styles.li}>Contact</li>
          <li className={styles.li}>About</li>
        </ul>
        <ul className={cn(styles.ul, styles.ul_type_footer)}>
          <li className={styles.li}>Home</li>
          <li className={styles.li}>Blog</li>
          <li className={styles.li}>Contact</li>
          <li className={styles.li}>About</li>
        </ul>
        <ul className={cn(styles.ul, styles.ul_type_footer)}>
          <li className={styles.li}>Home</li>
          <li className={styles.li}>Blog</li>
          <li className={styles.li}>Contact</li>
          <li className={styles.li}>About</li>
        </ul>
      </footer>
    </div>
  );
};
