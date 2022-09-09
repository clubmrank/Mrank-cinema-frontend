import React from "react";
import styles from "./movieDetails.module.scss";
import { IoIosArrowRoundBack } from "react-icons/io";
import { BsCalendar4 } from "react-icons/bs";
import { Button } from "antd";

const MovieDetails = ({ movieName }) => {
  return (
    <div className={styles.movieMain}>
      <header className={styles.seatHeader}>
        <div className={styles.backIcon}>
          <IoIosArrowRoundBack size="50px" />
        </div>
        <div className={styles.middleText}>
          <h2>Your Movie Details </h2>
        </div>
        <div className={styles.calandericon}>
          {/* <BsCalendar4 size="20px" onClick={showModal} /> */}
        </div>
      </header>

      <div className={styles.movieDetailsCont}>
        <div className={styles.tableRow}>
          <h2>{movieName || "Movie Name"}</h2>
        </div>
        <hr />
        <div className={styles.table}>
          <div className={styles.tableRow}>
            <p>Cinema</p>
            <p>Mrank Cinema 7</p>
          </div>
          <div className={styles.tableRow}>
            <p>Date</p>
            <p>6 April 2022,17:00</p>
          </div>{" "}
          <div className={styles.tableRow}>
            <p>Hall</p>
            <p>7</p>
          </div>
          <div className={styles.tableRow}>
            <p>Seats</p>
            <p>C1,C2</p>
          </div>
          <div className={styles.tableRow}>
            <p>1xAdult</p>
            <p>R 70.00</p>
          </div>{" "}
          <div className={styles.tableRow}>
            <p>1xChild</p>
            <p>R 30.00 </p>
          </div>{" "}
          <div className={styles.tableRow}>
            <p>2 Total</p>
            <p>R 100.00</p>
          </div>
        </div>
      </div>
      <div className={styles.confirmButton}>
        <Button
          style={{
            width: "100%",
            color: "#fff",
            backgroundColor: "#8A51E7",
            height: "100%",
          }}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default MovieDetails;
