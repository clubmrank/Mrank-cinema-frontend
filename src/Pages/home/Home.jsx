import React from "react";
import Logo from "../../components/Logo/Logo";
import styles from "./home.module.scss";
import { Input, Space } from "antd";
import { BsSearch } from "react-icons/bs";
import "antd/dist/antd.css";
import Corousel from "../../components/Slider/Corousel";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.home_main} style={{ marginTop: "-55px" }}>
      <div className={styles.logo}>
        <Logo />
      </div>

      <div className={styles.search}>
        <input placeholder="Search" type="search" />
        <BsSearch />
      </div>
      <div className={styles.home_slider}>
        <Corousel />
      </div>
    </div>
  );
};

export default Home;
