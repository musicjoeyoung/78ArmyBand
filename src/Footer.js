import React, { Component } from "react";
import armylogo from "./images/ArmyLogo.png";
import band78 from "./images/band78.jpeg";

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        {/* <h3 id="mainDivTitleFooter">About</h3> */}
        <div className="footerChildContainer">
          <div className="footerLogos">
            <img src={armylogo} alt="armylogo" id="armylogo" />
            <img src={band78} alt="band78" id="band78" />
          </div>
          <div className="footerLinks">
            <div>
              <h3 id="learnMore">Learn More</h3>
              <div id="footerLinksDiv">
                <a href="./Contact">Contact Us</a>
                <a>Calendar</a>
                <a href="https://www.goarmy.com/band.html">US Army Bands</a>
                <a>Request the Band</a>
                <a href="mailto:joseph.m.young72.mil@mail.mil?subject: 78th Army Band Website">
                  Webmaster Contact
                </a>
              </div>
            </div>
            <div>
              <h3 id="importantLinks">Important Links</h3>
              <div id="footerLinksDiv">
                <a href="./TermsOfUse">Terms of Use</a>
                <a href="https://www.goarmy.com/">US Army</a>
                <a href="https://www.usar.army.mil/">US Army Reserves</a>
                <a href="https://www.usar.army.mil/99thRD/">99th RSC</a>
                <a href="https://www.jbmdl.jb.mil/">Fort Dix</a>
                {/* <a>Fort Totten</a> */}
              </div>
            </div>
            <div>
              <h3 id="socialMedia">Social Media</h3>
              <div id="footerLinksDiv">
                <a href="https://www.youtube.com/user/78thArmyBand">YouTube</a>
                <a href="https://www.instagram.com/78tharmyband/">Instagram</a>
                <a href="https://www.facebook.com/78thArmyBand">Facebook</a>
                <a href="https://twitter.com/78thArmyBand?s=20">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
