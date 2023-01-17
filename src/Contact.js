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
      <div
        className="contact-page-request-the-band"
        id="contact-page-request-the-band"
      >
        <h2>Request the Band</h2>
        <p id="requestBandPTag">
          To request local support, complete a{" "}
          <a
            id="requestBandInfo"
            href="https://www.usar.army.mil/Portals/98/Documents/For_Commands/dd2536.pdf"
          >
            DD Form 2536 - Request for Armed Forces Participation in Public
            Events
          </a>{" "}
          and indicate the type of support requested. Submit the form to the
          78th Army Band no less than 60 days prior to the scheduled event.
        </p>
        <br />
        <a href="mailto:78tharmyband@gmail.com?subject=Request%78th%Army%Band">
          <button>Request the Band</button>
        </a>
        <p>
          Or copy/paste our email and reach out to us at: 78tharmyband@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Contact;
