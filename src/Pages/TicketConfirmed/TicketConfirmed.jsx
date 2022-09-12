import React from "react";
import Ticket from "../../components/Ticket/Ticket";
import styles from "./ticketConfirmed.module.scss";
import { IoIosArrowRoundBack } from "react-icons/io";
import { BsCalendar4 } from "react-icons/bs";
import Ticketslider from "../../components/Ticketslider/Ticketslider";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import HeaderCustom from "../../components/Header/HeaderCustom";
const TicketConfirmed = () => {
  return (
    <div className={styles.ticketConfirmedMain}>
      <HeaderCustom text="Download Your Movie Ticket" />

      <div className={styles.ticketConfirmedCont}>
        <Ticketslider />
      </div>
    </div>
  );
};

export default TicketConfirmed;
