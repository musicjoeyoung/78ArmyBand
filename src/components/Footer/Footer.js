import React from "react";
import armylogo from "../../assets/images/ArmyLogo.webp";
import "./Footer.scss"

const Footer = () => {
  return (
    <div className="footer">
      <a
        href="https://www.goarmy.com/"
        className="footer__img-a"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link to goarmy.com website"
      >
        <img src={armylogo} alt="army logo" className="footer__img" />
      </a>
      <div className="footer__links-div">
        <h3 className="footer__h3">Learn More</h3>
        <a
          className="footer__a"
          href="./contact"
          rel="noopener noreferrer"
          aria-label="Link to Contact page"
        >
          Contact
        </a>

        <a
          className="footer__a"
          href="https://www.goarmy.com/band.html"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to goarmy.com/band website"
        >
          US Army Bands
        </a>
        <a
          className="footer__a"
          href="./contact"
          aria-label="Link to Contact page"
        >
          Request the Band
        </a>
        <a
          className="footer__a"
          href="mailto:joseph.m.young72.mil@mail.mil?subject=78th Army Band Website"
          aria-label="Link to email the Webmaster"
        >
          Contact Webmaster
        </a>
      </div>

      <div className="footer__links-div">
        <h3 className="footer__h3">Important Links</h3>
        <a
          className="footer__a"
          href="./termsofuse"
          aria-label="Link to Terms of Use page"
        >
          Terms of Use
        </a>
        <a
          className="footer__a"
          href="https://www.goarmy.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to goarmy.com website"
        >
          US Army
        </a>
        <a
          className="footer__a"
          href="https://www.usar.army.mil/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to Army Reserve website"
        >
          US Army Reserve
        </a>
        <a
          className="footer__a"
          href="https://www.usar.army.mil/99thRD/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to 99th Readiness Division's website"
        >
          99th RD
        </a>
        <a
          className="footer__a"
          href="https://www.jbmdl.jb.mil/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to Joint Base McGuire-Dix-Lakehurst's website"
        >
          Fort Dix
        </a>
        {/* <a>Fort Totten</a> */}
      </div>

      <div className="footer__links-div">
        <h3 className="footer__h3">Social Media</h3>
        <a
          className="footer__a"
          href="https://www.youtube.com/user/78thArmyBand"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to the 78th Army Band's Youtube channel"
        >
          YouTube
        </a>
        <a
          className="footer__a"
          href="https://www.instagram.com/78tharmyband/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to the 78th Army Band's Instragram account"
        >
          Instagram
        </a>
        <a
          className="footer__a"
          href="https://www.facebook.com/78thArmyBand"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to the 78th Army Band's Facebook page"
        >
          Facebook
        </a>
        <a
          className="footer__a"
          href="https://twitter.com/78thArmyBand?s=20"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to the 78th Army Band's Twitter account"
        >
          Twitter
        </a>
      </div>
    </div>

  );
};

export default Footer;
