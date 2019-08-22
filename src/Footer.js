import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="container">
        <div className="row">
          <div className="card-body p-0 border-top footer">
            <span className="footerText">All Rights Reserved.</span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
