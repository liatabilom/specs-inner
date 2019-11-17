import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

class ExtraColor extends Component {
  extraColor = () => {
    if (this.props.index === 2)
      return (
        <div style={{ color: "#964541" }}>
          {this.handleExtraColor()}
          <span className="colorSubTitle">Chili</span>
        </div>
      );
    if (this.props.index === 5)
      return (
        <div style={{ color: "#312C3D" }}>
          {this.handleExtraColor()}
          <span className="colorSubTitle">Dark Saphire</span>
        </div>
      );
    if (this.props.index === 0 || 1 || 3 || 4 || 6 || 7 || 8)
      return (
        <div style={{ color: "transparent" }}>{this.handleExtraColor()}</div>
      );
  };

  handleExtraColor = () => {
    return (
      <div className="extraCircle">
        <FontAwesomeIcon icon={faCircle} aria-hidden="true" />
      </div>
    );
  };

  render() {
    return <span>{this.extraColor()}</span>;
  }
}

export default ExtraColor;
