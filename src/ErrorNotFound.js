import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ErrorNotFound = () => {
  return (
    <div>
      <Navbar />
      <h2>You have found this page in error. </h2>
      <h1>But since you're here...</h1>
      <h3>Consider joining the band today!</h3>
      <iframe
        width="760"
        height="515"
        src="https://www.youtube.com/embed/SAKaR-RCgeQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <Footer />
    </div>
  );
};

export default ErrorNotFound;
