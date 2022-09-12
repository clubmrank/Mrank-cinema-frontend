import React, { useEffect } from "react";
import { Button, Col, Row } from "antd";
import styles from "./seats.module.scss";
import { BsFillCircleFill } from "react-icons/bs";
import { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
const Seats = () => {
  const [booked, setBooked] = useState([]);
  const params = useParams();
  const [time, setTime] = useState();

  const location = useLocation();
  const navigate = useNavigate();
  const [chairs, setChairs] = useState([]);
  const seatClicked = (e) => {
    if (e.isAvailable && !booked.find((chair) => chair.seat == e.seat)) {
      let temp = [...booked];
      temp.push(e);
      setBooked(temp);
    } else if (e.isAvailable && booked.find((chair) => chair.seat == e.seat)) {
      let temp = [...booked];
      temp = temp.filter((elem) => elem.seat != e.seat);
      setBooked(temp);
    }
  };

  const proceed = async (e) => {
    e.preventDefault();

    navigate(`${location.pathname}/confirmTicket/${params.id}`, {
      state: [booked, time],
    });
  };

  const handleTime = async (e) => {
    setTime(e);
    await fetch("https://api-club-mrank.herokuapp.com/api/seats", {
      headers: { "Content-Type": "application/json" },
      method: "post",
      body: JSON.stringify({
        movie_id: await params.id,
        time: e,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setChairs(data);
      });
  };
  // useEffect(() => {
  //   const response = async () =>
  //     await fetch("http://localhost:4231/api/seats", {
  //       headers: { "Content-Type": "application/json" },
  //       method: "post",
  //       body: JSON.stringify({
  //         movie_id: await params.id,
  //         time: location.state?.time,
  //       }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setChairs(data);
  //         console.log("data", data);
  //       });
  // }, [location.state]);
  return (
    <div className={styles.seatsMain}>
      <div classname={styles.svgCont}>
        <svg viewBox="0 10 100 10" width="100%">
          <path
            d="M20,20 Q50,10 80,20"
            fill="none"
            stroke=" #000"
            stroke-width="1px"
            className={styles.path}
          />
        </svg>
      </div>
      <div className={styles.rectangle}>
        <Row
          gutter={{ xs: 10, sm: 10, md: 10 }}
          style={{
            justifyContent: "center",
            marginTop: "20px",
            gap: "7px",
          }}
        >
          {chairs?.slice(0, 4)?.map((seat) => (
            <Col span={2.5}>
              <div
                className={styles.seat}
                style={{
                  backgroundColor: booked.find(
                    (chair) => chair.seat == seat.seat
                  )
                    ? "#FA18F1"
                    : !seat.isAvailable
                    ? "#6C19AD"
                    : "",
                }}
                onClick={() => seatClicked(seat)}
              ></div>
            </Col>
          ))}
        </Row>
        <Row
          gutter={{ xs: 10, sm: 10, md: 10 }}
          style={{ justifyContent: "center", marginTop: "20px" }}
        >
          {chairs?.slice(4, 13)?.map((seat) => (
            <Col span={2} onClick={() => seatClicked(seat)}>
              <div
                className={styles.seat}
                style={{
                  backgroundColor: booked.find(
                    (chair) => chair.seat == seat.seat
                  )
                    ? "#FA18F1"
                    : !seat.isAvailable
                    ? "#6C19AD"
                    : "",
                }}
              ></div>
            </Col>
          ))}
        </Row>
        <Row
          gutter={{ xs: 10, sm: 10, md: 10 }}
          style={{ justifyContent: "center", marginTop: "20px" }}
        >
          {chairs?.slice(13, 22)?.map((seat) => (
            <Col span={2} onClick={() => seatClicked(seat)}>
              <div
                className={styles.seat}
                style={{
                  backgroundColor: booked.find(
                    (chair) => chair.seat == seat.seat
                  )
                    ? "#FA18F1"
                    : !seat.isAvailable
                    ? "#6C19AD"
                    : "",
                }}
              ></div>
            </Col>
          ))}
        </Row>
        <Row
          gutter={{ xs: 10, sm: 10, md: 10 }}
          style={{ justifyContent: "center", marginTop: "20px" }}
        >
          {chairs?.slice(22, 31)?.map((seat) => (
            <Col span={2} onClick={() => seatClicked(seat)}>
              <div
                className={styles.seat}
                style={{
                  backgroundColor: booked.find(
                    (chair) => chair.seat == seat.seat
                  )
                    ? "#FA18F1"
                    : !seat.isAvailable
                    ? "#6C19AD"
                    : "",
                }}
              ></div>
            </Col>
          ))}
        </Row>
        <Row
          gutter={{ xs: 10, sm: 10, md: 10 }}
          style={{ justifyContent: "center", marginTop: "20px" }}
        >
          {chairs?.slice(31, 40).map((seat) => (
            <Col span={2}>
              <div
                className={styles.seat}
                style={{
                  backgroundColor: booked.find(
                    (chair) => chair.seat == seat.seat
                  )
                    ? "#FA18F1"
                    : !seat.isAvailable
                    ? "#6C19AD"
                    : "",
                }}
                onClick={() => seatClicked(seat)}
              ></div>
            </Col>
          ))}
        </Row>
      </div>

      <div className={styles.keys}>
        <div>
          <BsFillCircleFill style={{ color: " #9DB7DE" }} /> Available
        </div>
        <div>
          <BsFillCircleFill style={{ color: "#FA18F1" }} /> Selected
        </div>{" "}
        <div>
          <BsFillCircleFill style={{ color: "#6C19AD" }} /> Reserved
        </div>
      </div>

      <div className={styles.timeBtns}>
        <div className={styles.timeBtn}>
          <Button type="default" onClick={() => handleTime(2)}>
            14:00
          </Button>
        </div>
        <div className={styles.timeBtn}>
          <Button type="default" onClick={() => handleTime(6)}>
            17:00
          </Button>
        </div>
        <div className={styles.timeBtn}>
          <Button type="default" onClick={() => handleTime(8)}>
            20:00
          </Button>
        </div>
      </div>

      <div className={styles.proceedBtn}>
        <Button
          style={{
            width: "70%",
            color: "#fff",
            backgroundColor: "#8A51E7",
            height: "100%",
            margin: "auto",
          }}
          disabled={time == null || booked.length == 0 ? true : false}
          onClick={proceed}
        >
          Proceed
        </Button>
      </div>
    </div>
  );
};

export default Seats;
