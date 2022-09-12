import React, { useState } from "react";
import styles from "./seat.module.scss";
import { BsCalendar4 } from "react-icons/bs";
import { GrLinkPrevious } from "react-icons/gr";
import { IoIosArrowRoundBack } from "react-icons/io";

import { Button, Modal } from "antd";
import { AiOutlineClose } from "react-icons/ai";
import Seats from "../../components/Seats/Seats";
import { Outlet } from "react-router-dom";
import HeaderCustom from "../../components/Header/HeaderCustom";
import { useNavigate } from "react-router-dom";
import { useLocation, useSearchParams } from "react-router-dom";

const Seat = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const [time, setTime] = useState({ time: null, seats: [] });
  const navigate = useNavigate();
  const location = useLocation();
  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleOk = () => {
    setIsModalOpen(!isModalOpen);
    navigate(`${location.pathname}`, { state: time });
  };

  const handleTime = (e) => {
    let temp = { ...time };
    temp.time = e;
    setTime({ ...temp });
  };

  return (
    <div className={styles.seatMain}>
      <HeaderCustom
        calander={false}
        showModal={showModal}
        text="Select Seats"
      />
      <div className={styles.seats}>
        <Outlet isModalOpen={isModalOpen} time={location.state} />
      </div>
      {/* <div
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
            </header>
            <div className={styles.modalContent}>
              <div onClick={() => handleTime("2")} className={styles.modalItem}>
                <p>14:00 pm</p>
              </div>
              <div className={styles.modalItem} onClick={() => handleTime("6")}>
                <p>17:00 pm</p>
              </div>
              <div className={styles.modalItem} onClick={() => handleTime("8")}>
                <p>19:00 pm</p>
              </div>
            </div>
            <div className={styles.okButton}>
              <Button onClick={handleOk} disabled={time.time ? false : true}>
                OK
              </Button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Seat;
