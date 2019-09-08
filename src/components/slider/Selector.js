import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

class Selector extends Component {
  state = {};

  handleColorSelector = () => {
    if (this.props.selector === [0])
      return (
        <div>
          <div>
            <FontAwesomeIcon
              icon={faCircle}
              size="1x"
              className="topCircle"
              aria-hidden="true"
              style={{ color: "#70634e" }}
            />
            <span className="topColorSubTitle">Kakhi</span>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faCircle}
              size="1x"
              className="bottomCircle"
              aria-hidden="true"
              style={{ color: "#292f45" }}
            />
            <span className="bottomColorSubTitle">Dark Saphire</span>
          </div>
        </div>
      );
    if (this.props.selector === [1])
      return (
        <div>
          <div>
            <FontAwesomeIcon
              icon={faCircle}
              size="1x"
              className="topCircle"
              aria-hidden="true"
              style={{ color: "#fc1c03" }}
            />
            <span className="topColorSubTitle">Kakhi</span>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faCircle}
              size="1x"
              className="bottomCircle"
              aria-hidden="true"
              style={{ color: "#292f45" }}
            />
            <span className="bottomColorSubTitle">Dark Saphire</span>
          </div>
        </div>
      );
  };

  render() {
    return <div>{this.handleColorSelector()}</div>;
  }
}

export default Selector;
