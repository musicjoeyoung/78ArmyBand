import "./Footer.scss"

const Footer = () => {
  return (
    <div className="footer">
      <a
        href="https://www.goarmy.com/"
        className="footer__img-a"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="https://res.cloudinary.com/dfbuwtl5q/image/upload/v1694789738/army-reserve-white.png" alt="army logo" className="footer__img" />
      </a>
      <div className="footer__all-links">
        <div className="footer__links-div">
          <h3 className="footer__h3">Learn More</h3>
          <a
            className="footer__a"
            href="./contact"
            rel="noopener noreferrer"

          >
            Contact
          </a>

          <a
            className="footer__a"
            href="https://www.goarmy.com/band.html"
            target="_blank"
            rel="noopener noreferrer"

          >
            US Army Bands
          </a>
          <a
            className="footer__a"
            href="./contact"

          >
            Request the Band
          </a>
          <a
            className="footer__a"
            href="mailto:joseph.m.young72.mil@mail.mil?subject=78th Army Band Website"

          >
            Contact Webmaster
          </a>
        </div>

        <div className="footer__links-div">
          <h3 className="footer__h3">Important Links</h3>
          <a
            className="footer__a"
            href="./termsofuse"

          >
            Terms of Use
          </a>
          <a
            className="footer__a"
            href="https://www.goarmy.com/"
            target="_blank"
            rel="noopener noreferrer"

          >
            US Army
          </a>
          <a
            className="footer__a"
            href="https://www.usar.army.mil/"
            target="_blank"
            rel="noopener noreferrer"

          >
            US Army Reserve
          </a>
          <a
            className="footer__a"
            href="https://www.usar.army.mil/99thRD/"
            target="_blank"
            rel="noopener noreferrer"

          >
            99th RD
          </a>
          <a
            className="footer__a"
            href="https://www.jbmdl.jb.mil/"
            target="_blank"
            rel="noopener noreferrer"

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

          >
            YouTube
          </a>
          <a
            className="footer__a"
            href="https://www.instagram.com/78tharmyband/"
            target="_blank"
            rel="noopener noreferrer"

          >
            Instagram
          </a>
          <a
            className="footer__a"
            href="https://www.facebook.com/78thArmyBand"
            target="_blank"
            rel="noopener noreferrer"

          >
            Facebook
          </a>
          <a
            className="footer__a"
            href="https://twitter.com/78thArmyBand?s=20"
            target="_blank"
            rel="noopener noreferrer"

          >
            Twitter
          </a>
        </div>
      </div>
    </div>

  );
};

export default Footer;
