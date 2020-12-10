import React from "react";
import styles from "./Header.module.scss";
import { NavLink } from 'react-router-dom';



const Header = () => (
    <section className={styles.headerSection}>
      <div className={styles.headerSection__body}>
          <h1>Git Search</h1>
          <NavLink to="/about">Zalożenia aplikacji</NavLink>
      </div>
    </section>
  );
  
  export default Header;