import React from "react";
import styles from "./header.module.scss";
import { BsCalendar4 } from "react-icons/bs";
import { GrLinkPrevious } from "react-icons/gr";
import { IoIosArrowRoundBack } from "react-icons/io";

import { Button, Modal } from "antd";
import { AiOutlineClose } from "react-icons/ai";

const HeaderCustom = ({ showModal, calander, text }) => {
  return (
    <header className={styles.seatHeader}>
      <div className={styles.backIcon}>
        <IoIosArrowRoundBack size="50px" />
      </div>
      <div className={styles.middleText}>
        <h2>{text}</h2>
      </div>
      <div className={styles.calandericon}>
        <BsCalendar4
          size="20px"
          onClick={showModal}
          style={{ display: calander ? "block" : "none" }}
        />
      </div>
    </header>
  );
};

export default HeaderCustom;
