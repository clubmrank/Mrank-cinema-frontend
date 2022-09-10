import "./App.css";

import Home from "./Pages/home/Home";
import MovieDetails from "./Pages/MovieDetails/MovieDetails";
import PaymentSelection from "./Pages/PaymentSelection/PaymentSelection";
import Seat from "./Pages/Seat/Seat";
import TicketConfirmed from "./Pages/TicketConfirmed/TicketConfirmed";
function App() {
  return (
    <div className="App">
      <Seat />
    </div>
  );
}

export default App;
