import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Clients from "./components/Clients";
import Create from "./components/Create";
import Us from "./components/Us";
import MarketPlace from "./components/Marketplace";

function App() {
  return (
    <div className="App">
      <Home />
      <Navbar />
      <Clients />
      <Create />
      <Us />
      <MarketPlace />

    </div>
  );
}

export default App;
