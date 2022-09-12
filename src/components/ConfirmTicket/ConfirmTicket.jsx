import React, { useState, useEffect } from "react";
import styles from "./confirmTicket.module.scss";
import { Button } from "antd";
import { useLocation, useNavigate, useParams } from "react-router-dom";
const ConfirmTicket = ({ movieName }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const [movie, setMovie] = useState([]);

  console.log(location.state[0]);
  const currentState = location.state;
  const todaysDate = new Date();

  const seatsTotal = currentState[0]?.length;
  const totalPrice = movie[0]?.price * seatsTotal;

  const Proceed = (e) => {
    e.preventDefault();
    navigate(`${location.pathname}/selectPayment`, { state: location.state });
  };
  useEffect(() => {
    const response = fetch("http://localhost:4231/api/movies")
      .then((res) => res.json())
      .then((data) => {
        data = data.filter((elem) => elem.id == params.id);
        setMovie(data);
      });
  }, []);
  return (
    <div className={styles.movieMain}>
      <div className={styles.movieDetailsCont}>
        <div className={styles.tableRow}>
          <h2>{movie[0]?.name || "Movie Name"}</h2>
        </div>
        <hr />
        <div className={styles.table}>
          <div className={styles.tableRow}>
            <p>Cinema</p>
            <p>Mrank Cinema {params.id}</p>
          </div>
          <div className={styles.tableRow}>
            <p>Date</p>
            <p>
              {todaysDate.toDateString()}, {currentState[1]}pm
            </p>
          </div>{" "}
          <div className={styles.tableRow}>
            <p>Hall</p>
            <p>{params.id}</p>
          </div>
          <div className={styles.tableRow}>
            <p>Seats</p>
            <p>{currentState[0].map((elem) => `${elem.seat},`)}</p>
          </div>
          <div className={styles.tableRow}>
            <p>1xPerson</p>
            <p>R{movie[0]?.price}</p>
          </div>{" "}
          <div className={styles.tableRow}>
            <p>{seatsTotal} Total</p>
            <p>R{totalPrice}</p>
          </div>
        </div>
      </div>
      <div className={styles.confirmButton}>
        <Button
          onClick={Proceed}
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

export default ConfirmTicket;
