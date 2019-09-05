import React, { Component } from "react";
import Slider from "./Slider";
import "./Specs.css";

class Main extends Component {
  render() {
    return (
      <div className="container .d-flex">
        <h1>
          <header className="header .d-sm-flex">
            Na'dia
            <br />
            Correia Gonc,alves
          </header>
        </h1>
        <h2>
          <img
            src="https://media.giphy.com/media/Qum9eMNAN9NNCLbhV9/giphy.gif"
            alt="textile"
            className="textile .d-flex"
          />
        </h2>
        <h3>
          <Slider />
        </h3>
      </div>
    );
  }
}

export default Main;
