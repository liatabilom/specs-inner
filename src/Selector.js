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
        <FontAwesomeIcon icon={faCircle} size="1x" className="topCircle" />
        <span className="topColorName">Kakhi</span>
        <FontAwesomeIcon icon={faCircle} size="1x" className="bottomCircle" />
        <span className="bottomColorName">Dark Saphire</span>
        <div>
          <img src={Tailored} alt="" className="specsPieces" />
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
