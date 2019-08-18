import React, { Component } from "react";
import Tailored from "./images/Tailored.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import "./Selector.css";

class Selector extends Component {
  render() {
    return (
      <div>
        <FontAwesomeIcon
          icon={faChevronCircleLeft}
          size="1x"
          className="chevronLeft"
        />
        <div>
          <FontAwesomeIcon icon={faCircle} size="1x" className="topCircle" />
          <img src={Tailored} alt="" className="specsPieces" />
          <FontAwesomeIcon icon={faCircle} size="1x" className="bottomCircle" />
        </div>
        <FontAwesomeIcon
          icon={faChevronCircleRight}
          size="1x"
          className="chevronRight"
        />
      </div>
    );
  }
}

export default Selector;
