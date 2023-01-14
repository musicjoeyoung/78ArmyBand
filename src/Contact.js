import React from "react";
import Navbar from "./Navbar";
import trombones from "./images/trombones.webp";
import ContactForm from "./ContactForm.js";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="contact-page-bg-text">
        <h1>Contact</h1>
        <p id="contact-page-pText">
          The 78th Army Band wants to give you the best musical experience.
          <br />
          Please reach out and let us know what you think. <br />
        </p>
        <h2>We want to hear from you!</h2>
      </div>
      <div className="contact-page-pic-and-text">
        <div className="contact-page-pic">
          <img src={trombones} className="contact-page-bg-image" alt="" />
        </div>
      </div>

      {/* <div className="contact-page-newsletter-signup">
          <h2>Sign up for our newsletter!</h2>
          <div id="email">
            email:
            <input></input>
          </div>
          <div id="firstAndLastName">
            first:
            <input></input>
            last: <input></input>
          </div>
          <br />
          <button>sign up</button>
        </div> */}
      <div className="contact-page-email-form">
        <h2 id="talkToUs">Contact</h2>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
