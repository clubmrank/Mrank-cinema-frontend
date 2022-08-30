import React from "react";
import styles from "./Movie.module.scss";
import { BsStar } from "react-icons/bs";
import { BsFillPlayCircleFill } from "react-icons/bs";
const Movie = ({ movieName, image, rate }) => {
  return (
    <div className="Movie_main">
      <div>
        <img src={image} alt={movieName} />
      </div>
      <h3 style={{ color: "#fff", marginTop: "10px" }}>{movieName}</h3>

      <div className={styles.bottom}>
        <div className={styles.rate}>
          <BsStar
            style={{
              color: "#8A51E7",
            }}
          />
          <b>{rate}</b>
        </div>
        <div className={styles.trailer}>
          <BsFillPlayCircleFill /> Watch the Trailer
        </div>
      </div>
    </div>
  );
};

export default Movie;
