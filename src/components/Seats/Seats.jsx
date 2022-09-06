import React from "react";
import { Col, Row } from "antd";
import styles from "./seats.module.scss";
import { BsFillCircleFill } from "react-icons/bs";
const Seats = () => {
  const seats = [Array.from(Array(9).keys())];
  const frontseats = [Array.from(Array(4).keys())];
  const backSeats = [Array.from(Array(5).keys())];

  const seatClicked = () => {
    console.log("seat");
  };
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
          {frontseats[0].map((seat) => (
            <Col span={2.5}>
              <div className={styles.seat} onClick={seatClicked}></div>
            </Col>
          ))}
        </Row>
        <Row
          gutter={{ xs: 10, sm: 10, md: 10 }}
          style={{ justifyContent: "center", marginTop: "20px" }}
        >
          {seats[0].map((seat) => (
            <Col span={2} onClick={seatClicked}>
              <div className={styles.seat}></div>
            </Col>
          ))}
        </Row>
        <Row
          gutter={{ xs: 10, sm: 10, md: 10 }}
          style={{ justifyContent: "center", marginTop: "20px" }}
        >
          {seats[0].map((seat) => (
            <Col span={2} onClick={seatClicked}>
              <div className={styles.seat}></div>
            </Col>
          ))}
        </Row>
        <Row
          gutter={{ xs: 10, sm: 10, md: 10 }}
          style={{ justifyContent: "center", marginTop: "20px" }}
        >
          {seats[0].map((seat) => (
            <Col span={2}>
              <div className={styles.seat}></div>
            </Col>
          ))}
        </Row>
        <Row
          gutter={{ xs: 10, sm: 10, md: 10 }}
          style={{ justifyContent: "center", marginTop: "20px" }}
        >
          {seats[0].map((seat) => (
            <Col span={2}>
              <div className={styles.seat}></div>
            </Col>
          ))}
        </Row>
        <Row
          gutter={{ xs: 10, sm: 10, md: 10 }}
          style={{ justifyContent: "center", marginTop: "20px" }}
        >
          {seats[0].map((seat) => (
            <Col span={2}>
              <div className={styles.seat}></div>
            </Col>
          ))}
        </Row>{" "}
        <Row
          gutter={{ xs: 10, sm: 10, md: 10 }}
          style={{ justifyContent: "center", marginTop: "20px" }}
        >
          {backSeats[0].map((seat) => (
            <Col span={2}>
              <div className={styles.seat}></div>
            </Col>
          ))}
        </Row>{" "}
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
    </div>
  );
};

export default Seats;
