import React from "react";
import Specs from "./Specs";
import Technical from "./Technical";
import Hanger from "./Hanger";
import "./App.css";

function App() {
  return (
    <div className="container mainContainer mt-3">
      <Specs />
      <Technical />
      <Hanger />
    </div>
  );
}

export default App;
