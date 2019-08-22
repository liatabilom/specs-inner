import React, { Component } from "react";
import Draggable from "react-draggable";
import Hanger18 from "./images/hanger/Hanger18.png";
import Hanger19 from "./images/hanger/Hanger19.png";
import Hanger20 from "./images/hanger/Hanger20.png";
import Hanger21 from "./images/hanger/Hanger21.png";
import "./Hanger.css";

class Hanger extends Component {
  render() {
    return (
      <div className="container hangerContainer" style={{ width: 1140 }}>
        <img
          src={Hanger18}
          alt=""
          className="hangerImg"
          style={{ width: 200, height: 250 }}
        />
        <img
          src={Hanger19}
          alt=""
          className="hangerImg"
          style={{ width: 250, height: 280 }}
        />
        <img
          src={Hanger20}
          alt=""
          className="hangerImg"
          style={{ width: 200, height: 250 }}
        />
        <img
          src={Hanger21}
          alt=""
          className="hangerImg"
          style={{ width: 250, height: 280 }}
        />
      </div>
    );
  }
}

export default Hanger;
