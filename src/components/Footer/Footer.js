import React from "react";
import armylogo from "/Users/musicjoeyoung/Desktop/Coding/Army/78armyband/src/assets/images/ArmyLogo.webp";

const Footer = () => {
  return (
    <div className="footer fixed-footer">
      <div className="footerChildContainer">
        <div className="footerLogos">
          <a
            href="https://www.goarmy.com/"
            className="milLogoDiv"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to goarmy.com website"
          >
            <img src={armylogo} alt="army logo" id="milLogo" />
          </a>
        </div>
        <div className="footerLinks">
          <div id="footerLinksDiv">
            <h3 id="learnMore">Learn More</h3>
            <a
              id="footerATags"
              href="./contact"
              rel="noopener noreferrer"
              aria-label="Link to Contact page"
            >
              Contact
            </a>

            <a
              id="footerATags"
              href="https://www.goarmy.com/band.html"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to goarmy.com/band website"
            >
              US Army Bands
            </a>
            <a
              id="footerATags"
              href="./contact"
              aria-label="Link to Contact page"
            >
              Request the Band
            </a>
            <a
              id="footerATags"
              href="mailto:joseph.m.young72.mil@mail.mil?subject=78th Army Band Website"
              aria-label="Link to email the Webmaster"
            >
              Contact Webmaster
            </a>
          </div>

          <div id="footerLinksDiv">
            <h3 id="importantLinks">Important Links</h3>
            <a
              id="footerATags"
              href="./termsofuse"
              aria-label="Link to Terms of Use page"
            >
              Terms of Use
            </a>
            <a
              id="footerATags"
              href="https://www.goarmy.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to goarmy.com website"
            >
              US Army
            </a>
            <a
              id="footerATags"
              href="https://www.usar.army.mil/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to Army Reserve website"
            >
              US Army Reserve
            </a>
            <a
              id="footerATags"
              href="https://www.usar.army.mil/99thRD/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to 99th Readiness Division's website"
            >
              99th RD
            </a>
            <a
              id="footerATags"
              href="https://www.jbmdl.jb.mil/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to Joint Base McGuire-Dix-Lakehurst's website"
            >
              Fort Dix
            </a>
            {/* <a>Fort Totten</a> */}
          </div>

          <div id="footerLinksDiv">
            <h3 id="socialMedia">Social Media</h3>
            <a
              id="footerATags"
              href="https://www.youtube.com/user/78thArmyBand"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to the 78th Army Band's Youtube channel"
            >
              YouTube
            </a>
            <a
              id="footerATags"
              href="https://www.instagram.com/78tharmyband/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to the 78th Army Band's Instragram account"
            >
              Instagram
            </a>
            <a
              id="footerATags"
              href="https://www.facebook.com/78thArmyBand"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to the 78th Army Band's Facebook page"
            >
              Facebook
            </a>
            <a
              id="footerATags"
              href="https://twitter.com/78thArmyBand?s=20"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to the 78th Army Band's Twitter account"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;