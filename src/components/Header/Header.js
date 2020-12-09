import React from "react";
import styles from "./Header.module.scss";



const Header = () => (
    <section className={styles.headerSection}>
      <div className={styles.headerSection__body}>
          <h1>Git Search</h1>
      </div>
    </section>
  );
  
  export default Header;