import React, { useState } from "react";
import styles from "./seat.module.scss";
import { BsCalendar4 } from "react-icons/bs";
import { GrLinkPrevious } from "react-icons/gr";
import { IoIosArrowRoundBack } from "react-icons/io";

import { Button, Modal } from "antd";
import { AiOutlineClose } from "react-icons/ai";
import Seats from "../../components/Seats/Seats";
const Seat = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.seatMain}>
      <header className={styles.seatHeader}>
        <div className={styles.backIcon}>
          <IoIosArrowRoundBack size="50px" />
        </div>
        <div className={styles.middleText}>
          <h2>Select Your Seats </h2>
        </div>
        <div className={styles.calandericon}>
          <BsCalendar4 size="20px" onClick={showModal} />
        </div>
      </header>
      <div className={styles.seats}>
        <Seats />
      </div>
      <div
        className={styles.modalMain}
        style={{ display: isModalOpen ? "block" : "none" }}
      >
        <div
          className={styles.mask}
          style={{ display: isModalOpen ? "block" : "none" }}
        >
          <div className={styles.seatModalmain}>
            <header>
              <h3>Select Viewing Time</h3>
              <AiOutlineClose onClick={showModal} />
            </header>
            <div className={styles.modalContent}>
              <div className={styles.modalItem}>
                <p>14:00 pm</p>
              </div>
              <div className={styles.modalItem}>
                <p>17:00 pm</p>
              </div>
              <div className={styles.modalItem}>
                <p>19:00 pm</p>
              </div>
            </div>
            <div className={styles.okButton}>
              <Button>OK</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seat;
