import React, { Component } from "react";
import Slide from "./components/slider/Slide";
import RightArrow from "./components/slider/RightArrow";
import LeftArrow from "./components/slider/LeftArrow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import "./Slider.css";

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        "https://i.imgur.com/8lESqVq.png",
        "https://i.imgur.com/8nrHwtC.png",
        "https://i.imgur.com/mTlG0gC.png",
        "https://i.imgur.com/LEXKPD4.png",
        "https://i.imgur.com/r1f4CAK.png",
        "https://i.imgur.com/fOpO5L1.png",
        "https://i.imgur.com/CTICjhV.png",
        "https://i.imgur.com/YX7evhn.png"
      ],
      currentIndex: 0,
      translateValue: 0
    };
  }

  goToPrevSlide = () => {
    if (this.state.currentIndex === 0) return;

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }));
  };

  goToNextSlide = () => {
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth()
    }));
  };

  slideWidth = () => {
    return document.querySelector(".slide").clientWidth;
  };

  render() {
    return (
      <div>
        <div>
          <FontAwesomeIcon
            icon={faCircle}
            size="1x"
            className="topCircle"
            aria-hidden="true"
          />
          <span className="topColorSubTitle">Kakhi</span>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faCircle}
            size="1x"
            className="bottomCircle"
            aria-hidden="true"
          />
          <span className="bottomColorSubTitle">Dark Saphire</span>
        </div>
        <div className="slider">
          <div
            className="slider-wrapper"
            style={{
              transform: `translateX(${this.state.translateValue}px)`,
              transition: `transform ease-out 0.45s`
            }}
          >
            {this.state.images.map((image, i) => (
              <Slide image={image} key={i} />
            ))}
          </div>
          <LeftArrow goToPrevSlide={this.goToPrevSlide} />
          <RightArrow goToNextSlide={this.goToNextSlide} />
        </div>
      </div>
    );
  }
}

export default Slider;
