import React from "react";
import { BsFilm } from "react-icons/bs";
import styles from "./logo.module.scss";
const Logo = () => {
  return (
    <div className={styles.logo_main}>
      <div className={styles.icon}>
        <BsFilm size="sm" />
      </div>
      <div className={styles.text}>
        <h1 style={{ color: "#ffff" }}>
          <b>CLUB MRANK</b>
        </h1>
        <span>Welcome back Norman</span>
      </div>
    </div>
  );
};

export default Logo;
