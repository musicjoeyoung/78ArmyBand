import React from "react";
import ContactForm from "./ContactForm.js";
import instagram from "./instagram.png";
import twitter from "./twitter.png";
import facebook from "./facebook.png";
import youtube from "./youtube.png";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>

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
            target="_blank"
            rel="noopener noreferrer"
          >
            DD Form 2536 - Request for Armed Forces Participation in Public
            Events
          </a>{" "}
          and indicate the type of support requested. Submit the form to the
          78th Army Band no less than 60 days prior to the scheduled event.
        </p>

        <a href="mailto:78tharmyband@gmail.com?subject=Request%78th%Army%Band">
          <button>Request the Band</button>
        </a>
      </div>
      <div className="emailContainer">
        <p id="contact-page-pText2">
          The 78th Army Band wants to give you the best musical experience.
        </p>
        <p>
          {" "}
          Please follow us on social media and let us know what you think.{" "}
          <br />
        </p>

        <div className="contactSocialContainer">
          <a href="https://www.instagram.com/78tharmyband/">
            <img src={instagram} className="socialLogo" alt="Instagram" />
          </a>
          <a href="https://twitter.com/78tharmyband">
            <img src={twitter} className="socialLogo" alt="Twitter" />
          </a>
          <a href="https://www.facebook.com/78thArmyBand">
            <img src={facebook} className="socialLogo" alt="Facebook" />
          </a>
          <a href="https://www.youtube.com/@78thArmyBand">
            <img src={youtube} className="socialLogo" alt="Youtube" />
          </a>
        </div>

        <h2>We want to hear from you!</h2>
        <div className="contact-page-email-form">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
