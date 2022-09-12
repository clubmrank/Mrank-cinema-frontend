import "./App.css";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./Pages/home/Home";
import MovieDetails from "./Pages/MovieDetails/MovieDetails";
import PaymentSelection from "./Pages/PaymentSelection/PaymentSelection";
import Seat from "./Pages/Seat/Seat";
import TicketConfirmed from "./Pages/TicketConfirmed/TicketConfirmed";
import HeaderCustom from "./components/Header/HeaderCustom";
import Payment from "./Pages/PaymentDetails/Payment";
function App() {
  return (
    <div className="App">
      {/* <HeaderCustom /> */}
      <Home />
    </div>
  );
}

export default App;
