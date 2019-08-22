import React, { Component } from "react";
import CarouselAuto from "./images/CarouselAuto.png";
import Draggable from "react-draggable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./ClothingDisplay.css";

class ClothingDisplay extends Component {
  render() {
    return (
      <div className="container clothesScroll">
        <div className="clearfix">
          <div className="card-body p-0 col-lg-3 border border-dark">
            <div
              className="parent"
              style={{
                height: "500px",
                width: "268px",
                position: "relative",
                overflow: "auto",
                padding: "0"
              }}
            >
              <div style={{ height: "1000px", padding: "0" }}>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  size="2x"
                  className="plusIcon2"
                  onMouseOver={this.arrow}
                />
                <Draggable
                  axis="y"
                  bounds={(0, 10, 0, 10)}
                  handle=".handle"
                  grid={(25, 25)}
                  allowAnyClick={true}
                  disabled={true}
                >
                  <img
                    src={CarouselAuto}
                    alt=""
                    style={{ height: 2500, width: 248 }}
                  />
                </Draggable>
                <FontAwesomeIcon
                  icon={faChevronUp}
                  size="2x"
                  className="plusIcon2"
                  onMouseOver={this.arrow}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClothingDisplay;
