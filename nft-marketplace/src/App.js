import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Clients from "./components/Clients";
import Create from "./components/Create";

function App() {
  return (
    <div className="App">
      <Home />
      <Navbar />
      <Clients />
      <Create />

    </div>
  );
}

export default App;
