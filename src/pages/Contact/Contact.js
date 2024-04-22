import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm.js";
import instagram from "../../assets/images/instagram.png";
import twitter from "../../assets/images/twitter.png";
import facebook from "../../assets/images/facebook.png";
import youtube from "../../assets/images/youtube.png";
import "./Contact.scss"

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-container__h1">Contact</h1>

      <div
        className="request"
      >
        <h2 className="request__h2">Request the Band</h2>
        <p className="request__p">
          To request the 78th Army Band, complete a{" "}
          <a
            className="request__info"
            href="https://www.usar.army.mil/Portals/98/Documents/For_Commands/dd2536.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            DD Form 2536 - Request for Armed Forces Participation in Public
            Events
          </a>{" "}
          and indicate the type of support requested. Email the form to the 78th
          Army Band at{" "}
          <a
            className="request__info"
            href="mailto:78tharmyband@gmail.com?subject=Request 78th Army Band"
          >
            78tharmyband@gmail.com
          </a>{" "}
          no less than 60 days prior to the scheduled event.
        </p>
      </div>
      <div className="email">
        <p className="email__p">
          The 78th Army Band wants to give you the best musical experience.
          Please follow us on social media and let us know what you think.
        </p>

        <div >
          <a
            href="https://www.instagram.com/78tharmyband/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} className="socialLogo" alt="Instagram" />
          </a>
          <a
            href="https://twitter.com/78tharmyband"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} className="socialLogo" alt="Twitter" />
          </a>
          <a
            href="https://www.facebook.com/78thArmyBand"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} className="socialLogo" alt="Facebook" />
          </a>
          <a
            href="https://www.youtube.com/@78thArmyBand"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtube} className="socialLogo" alt="Youtube" />
          </a>
        </div>

        <h2 className="email__h2">We want to hear from you!</h2>
        <div className="contact-page-email-form">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
