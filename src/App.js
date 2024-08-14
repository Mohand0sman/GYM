import React from "react";
import NavBar  from "./components/navbar";
import Header  from "./components/Header";
import Feature  from "./components/Feature";
import Offer from "./components/Offer";
import About from "./components/About";
import Conatct from "./components/Conatct";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Feature />
      <Offer />
      <About />
      <Conatct />
    </div>
  );
}

export default App;
