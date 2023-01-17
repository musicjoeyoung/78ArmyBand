import React from "react";
import Navbar from "./Navbar";
import ContactForm from "./ContactForm.js";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <h1>Contact</h1>
      <p id="contact-page-pText">
        The 78th Army Band wants to give you the best musical experience.
        <br />
        Please reach out and let us know what you think. <br />
      </p>
      <h2>We want to hear from you!</h2>
      <div className="contact-page-email-form">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
