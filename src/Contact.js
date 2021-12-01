import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import trombones from "./images/trombones.jpeg";
import ContactForm from "./ContactForm.js";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="contact-page-bg-text">
        <h1>Contact us!</h1>
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
      </div>
      <br />
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
        <h2 id="talkToUs">Talk To Us!</h2>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
