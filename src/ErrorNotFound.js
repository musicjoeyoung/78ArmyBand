import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export class ErrorNotFound extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>You have found this page in error. </h1>
        <Footer />
      </div>
    );
  }
}

export default ErrorNotFound;
