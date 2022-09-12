import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./Corousel.module.scss";
import Movie from "../Movie/Movie";

const Corousel = () => {
  const [movies, setMovies] = useState();
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const response = fetch("https://api-club-mrank.herokuapp.com/api/movies")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);
  return (
    <div>
      <h2 style={{ color: "#fff" }}> Featured Movies</h2>
      <Slider {...settings}>
        {movies?.map((movie) => (
          <div>
            <Movie
              movieName={movie.name}
              image={movie.poster}
              rate={"10"}
              movieId={movie.id}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Corousel;
