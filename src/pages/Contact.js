import React from "react";
import ContactForm from "../components/ContactForm.js";
import instagram from "/Users/musicjoeyoung/Desktop/Coding/Army/78armyband/src/assets/images/instagram.png";
import twitter from "/Users/musicjoeyoung/Desktop/Coding/Army/78armyband/src/assets/images/twitter.png";
import facebook from "/Users/musicjoeyoung/Desktop/Coding/Army/78armyband/src/assets/images/facebook.png";
import youtube from "/Users/musicjoeyoung/Desktop/Coding/Army/78armyband/src/assets/images/youtube.png";

const Contact = () => {
  return (
    <div className="parentDiv">
      <h1>Contact</h1>

      <div
        className="contact-page-request-the-band"
        id="contact-page-request-the-band"
      >
        <h2>Request the Band</h2>
        <p id="requestBandPTag">
          To request the 78th Army Band, complete a{" "}
          <a
            id="requestBandInfo"
            href="https://www.usar.army.mil/Portals/98/Documents/For_Commands/dd2536.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to Request the Band PDF"
          >
            DD Form 2536 - Request for Armed Forces Participation in Public
            Events
          </a>{" "}
          and indicate the type of support requested. Email the form to the 78th
          Army Band at{" "}
          <a
            aria-label="Link to email the 78th Army Band"
            href="mailto:78tharmyband@gmail.com?subject=Request 78th Army Band"
          >
            78tharmyband@gmail.com
          </a>{" "}
          no less than 60 days prior to the scheduled event.
        </p>
      </div>
      <div className="emailContainer">
        <p id="contact-page-pText2">
          The 78th Army Band wants to give you the best musical experience.
          Please follow us on social media and let us know what you think.
        </p>

        <div className="contactSocialContainer">
          <a
            href="https://www.instagram.com/78tharmyband/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to the 78th Army Band's Instagram account"
          >
            <img src={instagram} className="socialLogo" alt="Instagram" />
          </a>
          <a
            href="https://twitter.com/78tharmyband"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to the 78th Army Band's Twitter account"
          >
            <img src={twitter} className="socialLogo" alt="Twitter" />
          </a>
          <a
            href="https://www.facebook.com/78thArmyBand"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to the 78th Army Band's Facebook page"
          >
            <img src={facebook} className="socialLogo" alt="Facebook" />
          </a>
          <a
            href="https://www.youtube.com/@78thArmyBand"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to the 78th Army Band's Youtube channel"
          >
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
