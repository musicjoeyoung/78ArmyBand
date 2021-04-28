import React, { Component } from "react";
import WelcomeCarousel from "./WelcomeCarousel";

export class Welcome extends Component {
  render() {
    return (
      <div href="/home">
        <WelcomeCarousel />
      </div>
    );
  }
}

export default Welcome;
