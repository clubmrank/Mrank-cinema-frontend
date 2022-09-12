import React from "react";
import styles from "./movieDetails.module.scss";
import { IoIosArrowRoundBack } from "react-icons/io";
import { BsCalendar4 } from "react-icons/bs";
import { Button } from "antd";
import HeaderCustom from "../../components/Header/HeaderCustom";
import ConfirmTicket from "../../components/ConfirmTicket/ConfirmTicket";
import { Outlet } from "react-router-dom";

const MovieDetails = ({ movieName }) => {
  return (
    <div className={styles.movieMain}>
      <HeaderCustom calander={false} text="Confirm Movie Details" />

      <Outlet />
    </div>
  );
};

export default MovieDetails;
