import React from "react";
import Barcode from "react-barcode";
import styles from "./ticket.module.scss";
import imgExample from "../../assets/images/black-widow.jpg";
import { Button } from "antd";
const Ticket = () => {
  return (
    <div className={styles.ticketMain}>
      <div className={styles.ticketCont}>
        <div className={styles.digitalTicket}>
          <div className={styles.ticketTop}>
            <div className={styles.ticketImg}>
              <img src={imgExample} alt="movie poster" />
            </div>
          </div>
          <div className={styles.ticketBottom}>
            <div className={styles.movieName}>
              <h2>
                <b>Movie name</b>
              </h2>
              <p>Friday, 17:00</p>
            </div>
            <div className={styles.midText}>
              <p>
                Hall: <span>Lux</span>
              </p>
              <p>
                Seats: <span>2</span>
              </p>
            </div>
            <div className={styles.barcode}>
              <Barcode value="ticket number" width={1} height={30} />
            </div>
          </div>
        </div>
        <div className={styles.downloadTicket}>
          <Button>Download</Button>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
