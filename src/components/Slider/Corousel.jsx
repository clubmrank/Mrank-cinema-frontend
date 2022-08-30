import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./Corousel.module.scss";
import Movie from "../Movie/Movie";
import movies from "../../data/MoviesData/MoviesData";
const Corousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h2 style={{ color: "#fff" }}> Featured Movies</h2>
      <Slider {...settings}>
        {movies.map((movie) => (
          <div>
            <Movie movieName={movie.name} image={movie.img} rate={movie.rate} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Corousel;
