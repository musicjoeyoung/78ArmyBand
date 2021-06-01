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
            <div id="footerLinksDiv">
              <h3 id="learnMore">Learn More</h3>
              <h4 id="linksH4">Contact Us</h4>
              <h4 id="linksH4">Calendar</h4>
              <h4 id="linksH4">Careers</h4>
              <h4 id="linksH4">Request the Band</h4>
              <h4 id="linksH4">Webmaster Contact</h4>
            </div>
            <div id="footerLinksDiv">
              <h3 id="importantLinks">Important Links</h3>
              <h4 id="linksH4">Terms of Use</h4>
              <h4 id="linksH4">US Army</h4>
              <h4 id="linksH4">US Army Reserves</h4>
              <h4 id="linksH4">99th RSC</h4>
              <h4 id="linksH4">Fort Dix</h4>
              <h4 id="linksH4">Fort Totten</h4>
            </div>
            <div id="footerLinksDiv">
              <h3 id="socialMedia">Social Media</h3>
              <h4 id="linksH4">YouTube</h4>
              <h4 id="linksH4">Instagram</h4>
              <h4 id="linksH4">Facebook</h4>
              <h4 id="linksH4">Twitter</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
