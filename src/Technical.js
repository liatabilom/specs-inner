import React, { Component } from "react";
import SubHeader from "./SubHeader";
import ClothingDisplay from "./ClothingDisplay";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "./Technical.css";

class Technical extends Component {
  render() {
    return (
      <div className="container technicalContainer" style={{ width: 1160 }}>
        <SubHeader />
        <ClothingDisplay />
        <Sidebar />
        <Footer />
      </div>
    );
  }
}

export default Technical;
