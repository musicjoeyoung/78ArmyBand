import React from "react";
import armylogo from "./images/ArmyLogo.png";
import band78 from "./images/band78.jpeg";
import ScrollButton from "./ScrollButton";

const Footer = () => {
  return (
    <div className="footer">
      <ScrollButton />
      {/* <h3 id="mainDivTitleFooter">About</h3> */}
      <div className="footerChildContainer">
        <div className="footerLogos">
          <a href="https://www.goarmy.com/">
            <img src={armylogo} alt="armylogo" id="armylogo" />
          </a>
          <a href="/home">
            <img src={band78} alt="band78" id="band78" />
          </a>
        </div>
        <div className="footerLinks">
          <div>
            <h3 id="learnMore">Learn More</h3>
            <div id="footerLinksDiv">
              <a id="footerATags" href="./contact">
                Contact Us
              </a>
              <a id="footerATags" href="./events">
                Calendar
              </a>
              <a id="footerATags" href="https://www.goarmy.com/band.html">
                US Army Bands
              </a>
              <a
                id="footerATags"
                href="./Contact#contact-page-request-the-band"
              >
                Request the Band
              </a>
              <a
                id="footerATags"
                href="mailto:joseph.m.young72.mil@mail.mil?subject: 78th Army Band Website"
              >
                Webmaster Contact
              </a>
            </div>
          </div>
          <div>
            <h3 id="importantLinks">Important Links</h3>
            <div id="footerLinksDiv">
              <a id="footerATags" href="./termsofuse">
                Terms of Use
              </a>
              <a id="footerATags" href="https://www.goarmy.com/">
                US Army
              </a>
              <a id="footerATags" href="https://www.usar.army.mil/">
                US Army Reserves
              </a>
              <a id="footerATags" href="https://www.usar.army.mil/99thRD/">
                99th RSC
              </a>
              <a id="footerATags" href="https://www.jbmdl.jb.mil/">
                Fort Dix
              </a>
              {/* <a>Fort Totten</a> */}
            </div>
          </div>
          <div>
            <h3 id="socialMedia">Social Media</h3>
            <div id="footerLinksDiv">
              <a
                id="footerATags"
                href="https://www.youtube.com/user/78thArmyBand"
              >
                YouTube
              </a>
              <a
                id="footerATags"
                href="https://www.instagram.com/78tharmyband/"
              >
                Instagram
              </a>
              <a id="footerATags" href="https://www.facebook.com/78thArmyBand">
                Facebook
              </a>
              <a id="footerATags" href="https://twitter.com/78thArmyBand?s=20">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
