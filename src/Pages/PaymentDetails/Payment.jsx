import React from "react";
import ClientDetails from "../../components/ClientDetails/ClientDetails";
import HeaderCustom from "../../components/Header/HeaderCustom";
import styles from "./payment.module.scss";
const Payment = () => {
  return (
    <div className={styles.paymentMain}>
      <HeaderCustom calander={false} text="Enter Payment Details" />
      <ClientDetails />
    </div>
  );
};

export default Payment;
