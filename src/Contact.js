import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import armyband3 from "./images/armyband3.jpeg";

export class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <img src={armyband3} className="contact-page-bg-image" alt="" />

        <div className="contact-page-bg-text">
          <h1>Contact us!</h1>
          <p id="contact-page-pText">
            The 78th Army Band wants to give you the best musical experience.
            <br />
            Please reach out and let us know what you think. <br />
          </p>
          <h2>We want to hear from you!</h2>
        </div>
        <div className="contact-page-request-the-band">
          <h2>Request the Band</h2>
          <p>1-2 sentences here</p>
          <button>Request the Band</button>
        </div>
        <div classname="contact-page-newsletter-signup">
          <h2>Sign up for our newsletter!</h2>
          <input></input>
          email form here
          <button>sign up</button>
        </div>
        <div className="contact-page-email-form">
          email form and message box here
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
