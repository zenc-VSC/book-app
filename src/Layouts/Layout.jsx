import React from "react";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h2>Book App</h2>
        <p>React.<span className={styles.highlight}>js</span> Full Course</p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Ali 🤞</p>
      </footer>
    </>
  );
}

export default Layout;
