import React, { Component } from "react";
import Textile1 from "./images/Textile1.png";
import Selector from "./Selector";
import "./Specs.css";

class Main extends Component {
  render() {
    return (
      <div className="container">
        <h1>
          <header className="header .d-sm-flex">
            Na'dia
            <br />
            Correia Gonc,alves
          </header>
        </h1>
        <h2>
          <img src={Textile1} alt="" className="textile" />
        </h2>
        <h3>
          <Selector />
        </h3>
      </div>
    );
  }
}

export default Main;
