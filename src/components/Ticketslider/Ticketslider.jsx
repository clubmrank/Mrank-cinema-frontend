import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Ticket from "../Ticket/Ticket";
import { useLocation, useNavigate } from "react-router-dom";
const Ticketslider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
  };
  const location = useLocation();
  const navigate = useNavigate();
  const currentstate = location.state;
  console.log("state", location.state);
  return (
    <div>
      <Slider {...settings}>
        {currentstate[0]?.map((seat) => (
          <div>
            <Ticket seat={seat.seat} user={currentstate[1]} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Ticketslider;
