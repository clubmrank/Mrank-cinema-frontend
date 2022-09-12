import { Button } from "antd";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import MovieDetails from "../../Pages/MovieDetails/MovieDetails";

import styles from "./clientDetails.module.scss";
const ClientDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = useParams();

  const [userDetails, setUserDetails] = useState({
    movie_id: params.id,
    seat: "",
    timeBooked: location.state[1],
    email: "",
    lastname: "",
    firstname: "",
  });

  const proceed = async (e) => {
    e.preventDefault();

    console.log(location.state[0]);

    location.state[0].forEach(async (elem) => {
      await fetch("https://api-club-mrank.herokuapp.com/api/movie", {
        headers: { "Content-Type": "application/json" },
        method: "post",
        body: JSON.stringify({
          movie_id: userDetails.movie_id,
          timeBooked: userDetails.timeBooked,
          seat: elem.seat,
          lastname: userDetails.lastname,
          firstname: userDetails.firstname,
          email: userDetails.email,
        }),
      })
        .then((res) => res.json())
        .then((data) =>
          navigate(`${location.pathname}/downloadTicket`, {
            state: [location.state[0], userDetails],
          })
        )
        .catch((res) => console.log(res));
    });
    // navigate(`${location.pathname}/downloadTicket`);
  };
  return (
    <div className={styles.clientMain}>
      <form className={styles.credit_card} onSubmit={proceed}>
        <div className={styles.form_header}>
          <h4 className={styles.title}>Credit card details</h4>
        </div>

        <div className={styles.form_body}>
          <div className={styles.names}>
            <div className={styles.personalInf}>
              <input
                required
                className={styles.name}
                type="text"
                placeholder="Name"
                onChange={(e) =>
                  setUserDetails((prev) => ({
                    ...prev,
                    firstname: e.target.value,
                  }))
                }
              />
              <input
                required
                className={styles.surname}
                type="text"
                placeholder="Surname"
                onChange={(e) =>
                  setUserDetails((prev) => ({
                    ...prev,
                    lastname: e.target.value,
                  }))
                }
              />
            </div>

            <input
              required
              className={styles.email}
              type="email"
              placeholder="email address"
              onChange={(e) =>
                setUserDetails((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>
          <input
            required
            type="text"
            className={styles.card_number}
            placeholder="Card Number"
          />

          <div className={styles.date_field}>
            <div className={styles.month}>
              <select name="Month">
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
              </select>
            </div>
            <div className={styles.year}>
              <select name="Year">
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
              </select>
            </div>
          </div>
          <div className={styles.card_verification}>
            <div className={styles.cvv_input}>
              <input required type="text" placeholder="CVV" />
            </div>
            <div className={styles.cvv_details}>
              <p>
                3 or 4 digits usually found <br /> on the signature strip
              </p>
            </div>
          </div>

          <Button
            htmlType="submit"
            typeof="submit"
            className={styles.proceed_btn}
          >
            Proceed
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ClientDetails;
