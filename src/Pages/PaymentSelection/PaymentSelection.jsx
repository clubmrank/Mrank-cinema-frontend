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
const PaymentSelection = () => {
  return (
    <div className={styles.paymentMain}>
      <header className={styles.seatHeader}>
        <div className={styles.backIcon}>
          <IoIosArrowRoundBack size="50px" />
        </div>
        <div className={styles.middleText}>
          <h2>Payment Selection </h2>
        </div>
        <div className={styles.calandericon}>
          {/* <BsCalendar4 size="20px" onClick={showModal} /> */}
        </div>
      </header>
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
                  <FaApplePay
                    size="large"
                    style={{
                      height: "100%",
                      margin: "0",
                      width: "25%",
                    }}
                    color="#000"
                    width="1005"
                  />
                </div>
                <div className={styles.paymentText}>
                  <p> Pay Via apple Pay</p>
                </div>
              </div>
            </div>
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
