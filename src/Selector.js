import React, { Component } from "react";
import Slide from "./Slide";
import Tailored from "./images/Tailored.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import "./Selector.css";

class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://unsplash.com/photos/Q-72wa9-7Dg",
        "https://unsplash.com/photos/5gkYsrH_ebY",
        "https://unsplash.com/photos/1VOtJMtghZ0"
      ],
      currentIndex: 0,
      translateValue: 0
    };
  }

  nextSlide = () => {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1
    }));
  };

  prevSlide = () => {
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }
  };

  render() {
    return (
      <div>
        <FontAwesomeIcon
          icon={faChevronCircleLeft}
          size="1x"
          className="chevronLeft"
          onClick={this.prevSlide}
        />
        <FontAwesomeIcon icon={faCircle} size="1x" className="topCircle" />
        <span className="topColorName">Kakhi</span>
        <FontAwesomeIcon icon={faCircle} size="1x" className="bottomCircle" />
        <span className="bottomColorName">Dark Saphire</span>
        <div
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: "transform ease-out 0.45s"
          }}
        >
          {this.state.images.map((image, i) => (
            <Slide key={i} image={image} className="specsPieces" />
          ))}
        </div>
        <FontAwesomeIcon
          icon={faChevronCircleRight}
          size="1x"
          className="chevronRight"
          onClick={this.nextSlide}
        />
      </div>
    );
  }
}

export default Selector;
