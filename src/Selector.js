import React, { Component } from "react";
import Tailored from "./images/Tailored.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./Selector.css";

class Selector extends Component {
  state = {
    isLoaded: false
  };
  showImage = () => {
    setState({
      isLoaded: true
    });
  };

  getImages = () => {
    let url = "https://api.unsplash.com/GET/collections/:894/photos";
    axios.get(url).then(this.showImage);
  };

  render() {
    return (
      <div>
        <FontAwesomeIcon
          icon={faChevronCircleLeft}
          size="1x"
          className="chevronLeft"
        />
        <FontAwesomeIcon
          icon={faCircle}
          size="1x"
          className="topCircle"
          onClick={this.showImage}
        />
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
