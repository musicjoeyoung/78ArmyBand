import React, { Component } from "react";
import HomeCarousel from "./HomeCarousel";
import Navbar from "./Navbar";

export class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <HomeCarousel />
      </div>
    );
  }
}

export default Home;
