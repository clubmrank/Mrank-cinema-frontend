import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Seat from "./Pages/Seat/Seat";
import Home from "./Pages/home/Home";
import MovieDetails from "./Pages/MovieDetails/MovieDetails";
import TicketConfirmed from "./Pages/TicketConfirmed/TicketConfirmed";
import PaymentSelection from "./Pages/PaymentSelection/PaymentSelection";
import "./index.css";
import ConfirmTicket from "./components/ConfirmTicket/ConfirmTicket";
import Seats from "./components/Seats/Seats";
import ClientDetails from "./components/ClientDetails/ClientDetails";
import Payment from "./Pages/PaymentDetails/Payment";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route exact path="/selectSeats" element={<Seat />}>
          <Route path=":id/" element={<Seats />} />
        </Route>
        <Route
          path="/selectSeats/:movieName/confirmTicket"
          element={<MovieDetails />}
        >
          <Route path=":id" element={<ConfirmTicket />} />
        </Route>
        <Route
          path="/selectSeats/:movieName/confirmTicket/:id/selectPayment"
          element={<PaymentSelection />}
        />
        <Route
          path="/selectSeats/:movieName/confirmTicket/:id/selectPayment/payment"
          element={<Payment />}
        />

        <Route
          path="/selectSeats/:movieName/confirmTicket/:id/selectPayment/payment/downloadTicket"
          element={<TicketConfirmed />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
