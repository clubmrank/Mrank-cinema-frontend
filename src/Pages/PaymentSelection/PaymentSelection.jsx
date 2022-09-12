import React from "react";
import styles from "./PaymentSelection.module.scss";
import { IoIosArrowRoundBack } from "react-icons/io";
import { BsCalendar4 } from "react-icons/bs";
import { Button } from "antd";
import { SiVisa } from "react-icons/si";
import { BsFillCreditCardFill } from "react-icons/bs";
import { FaCcApplePay } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import HeaderCustom from "../../components/Header/HeaderCustom";
const PaymentSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const [booking, setBooking] = useState({
    movie_id: params.id,
  });
  console.log("selectPayment", location.state);
  const proceed = (e) => {
    e.preventDefault();
    navigate(`${location.pathname}/payment`, { state: location.state });
  };

  return (
    <div className={styles.paymentMain}>
      <HeaderCustom calander={false} text="Select Payment Option" />
      <div className={styles.paymentCont}>
        <form action="">
          <div className={styles.paymentOptions}>
            <div className={styles.paymentOption}>
              <div className={styles.inputRadio}>
                <input type="radio" name="payment" />
              </div>
              <div className={styles.right}>
                <div className={styles.paymentIcon}>
                  <BsFillCreditCardFill
                    size="md"
                    style={{
                      height: "100%",
                      margin: "0",
                      width: "20%",
                    }}
                    color="#F9EAB0"
                    width="1005"
                  />
                </div>
                <div className={styles.paymentText}>
                  <p> Pay Via Debit/Credit Card</p>
                </div>
              </div>
            </div>
            <div className={styles.paymentOption}>
              <div className={styles.inputRadio}>
                <input type="radio" name="payment" />
              </div>
              <div className={styles.right}>
                <div className={styles.paymentIcon}>
                  <SiVisa
                    size="md"
                    style={{
                      height: "100%",
                      margin: "0",
                      width: "20%",
                    }}
                    color="#172B85"
                    width="100%"
                  />
                </div>
                <div className={styles.paymentText}>
                  <p> Pay Via Visa</p>
                </div>
              </div>
            </div>{" "}
            <div className={styles.paymentOption}>
              <div className={styles.inputRadio}>
                <input type="radio" name="payment" />
              </div>
              <div className={styles.right}>
                <div className={styles.paymentIcon}>
                  <GiWallet
                    size="md"
                    style={{
                      height: "100%",
                      margin: "0",
                      width: "20%",
                    }}
                    color="#CA8B5F"
                    width="1005"
                  />
                </div>
                <div className={styles.paymentText}>
                  <p> Other Payment Method</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.proceedButton}>
            <Button
              type="submit"
              onClick={proceed}
              style={{
                width: "80%",
                color: "#fff",
                backgroundColor: "#8A51E7",
                height: "100%",
              }}
            >
              Proceed
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentSelection;
