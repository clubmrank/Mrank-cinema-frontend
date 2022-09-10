import React from "react";
import Ticket from "../../components/Ticket/Ticket";
import styles from "./ticketConfirmed.module.scss";
import { IoIosArrowRoundBack } from "react-icons/io";
import { BsCalendar4 } from "react-icons/bs";
const TicketConfirmed = () => {
  return (
    <div className={styles.ticketConfirmedMain}>
      <header className={styles.seatHeader}>
        <div className={styles.backIcon}>
          <IoIosArrowRoundBack size="50px" />
        </div>
        <div className={styles.middleText}>
          <h2>Ticket Confirmed </h2>
        </div>
        <div className={styles.calandericon}>
          {/* <BsCalendar4 size="20px" /> */}
        </div>
      </header>

      <div className={styles.ticketConfirmedCont}>
        <Ticket />
      </div>
    </div>
  );
};

export default TicketConfirmed;
