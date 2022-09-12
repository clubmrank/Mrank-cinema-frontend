import React, { useEffect, useRef } from "react";
import Barcode from "react-barcode";
import styles from "./ticket.module.scss";
import imgExample from "../../assets/images/black-widow.jpg";
import { Button } from "antd";
import { ImSpinner9 } from "react-icons/im";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const Ticket = ({ user, seat }) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "ticket",
  });

  const downloadPdfDocument = () => {
    const input = document.getElementById("ticket");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("landscape", "px", "a4", "false");
      pdf.addImage(imgData, "JPEG", 50, 50, 100, 200, "None");
      pdf.save(`${val}.pdf`);
    });
  };

  console.log(user);
  const [movie, setMovie] = useState();
  const val = `${user.movie_id}${seat}${Math.floor(
    10000000000 + Math.random() * 90000000
  )}`;
  const todaysDate = new Date();
  const params = useParams();

  useEffect(() => {
    const response = fetch("https://api-club-mrank.herokuapp.com/api/movies")
      .then((res) => res.json())
      .then((data) => {
        data = data.filter((elem) => elem.id == params.id);
        setMovie(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className={styles.ticketMain} ref={componentRef} id="ticket">
      <div className={styles.ticketCont}>
        <div className={styles.digitalTicket}>
          <div className={styles.ticketTop}>
            <div className={styles.ticketImg}>
              {movie ? (
                movie[0].poster ? (
                  <img src={movie[0].poster} alt="movie poster" />
                ) : (
                  <ImSpinner9 />
                )
              ) : (
                <h2>
                  <ImSpinner9 />
                  Loading....
                </h2>
              )}
            </div>
          </div>
          <div className={styles.ticketBottom}>
            <div className={styles.movieName}>
              <h2>
                <b>{movie ? movie[0].name : <ImSpinner9 />}</b>
              </h2>
              <p>
                {todaysDate.toDateString()}, {user.timeBooked}pm
              </p>
            </div>
            <div className={styles.midText}>
              <p>
                Hall: <span>{user.movie_id}</span>
              </p>
              <p>
                Seats: <span>{seat}</span>
              </p>
            </div>
            <div className={styles.barcode}>
              <Barcode value={val} width={1} height={30} />
            </div>
          </div>
        </div>
        <div className={styles.downloadTicket}>
          <Button onClick={() => downloadPdfDocument()}>Download</Button>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
