// App.js
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import ChartTerminal from "./Components/ChartTerminal/ChartTerminal";
import OrderBook from "./Components/OrderBook/OrderBook";
import SignUpTerminal from "./Components/SignUpTerminal/SignUpTerminal";
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";
import NavbarTwo from "./Components/NavbarTwo/NavbarTwo";
import RecentTrades from "./Components/RecentTrades/RecentTrades";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar className="Navbar" />
      <NavbarTwo className="Navbar"/>
      <div className="chart-row">
        <ChartTerminal className="chart-terminal" />
        <OrderBook className="order-book"/>
        <PlaceOrder className="place-order"/>
      </div>
    </div>
  );
}

export default App;
