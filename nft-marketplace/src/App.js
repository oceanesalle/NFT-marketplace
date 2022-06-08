import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Clients from "./components/Clients";
import Create from "./components/Create";
import Us from "./components/Us";
import MarketPlace from "./components/Marketplace";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <Navbar />
      <Clients />
      <Create />
      <Us />
      <MarketPlace />
      <Subscribe />
      <Footer />

    </div>
  );
}

export default App;
