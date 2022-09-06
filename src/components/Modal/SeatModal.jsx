import React, { useState } from "react";
import styles from "./seatModal.module.scss";
import { Button, Modal } from "antd";
import { AiOutlineClose } from "react-icons/ai";
const SeatModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const showModal = () => {
    setIsModalOpen(true);
    console.log(isModalOpen);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div
      className={styles.mask}
      style={{ display: isModalOpen ? "block" : "none" }}
    >
      <div className={styles.seatModalmain}>
        <header>
          <h3>Select Viewing Time</h3>
          <AiOutlineClose onClick={handleCancel} />
        </header>
        <div className={styles.modalContent}>
          <div className={styles.modalItem}>
            <p>14:00 pm</p>
          </div>
          <div className={styles.modalItem}>
            <p>14:00 pm</p>
          </div>
          <div className={styles.modalItem}>
            <p>14:00 pm</p>
          </div>
        </div>
        <div className={styles.okButton}>
          <Button>OK</Button>
        </div>
      </div>
    </div>
  );
};

export default SeatModal;
