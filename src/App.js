import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import SocialContainer from "./components/SocialContainer/SocialContainer";
import UpArrow from "./components/UpArrow/UpArrow";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar/>
      <SocialContainer />
      <Footer />
      <UpArrow />
    </>
  );
};

export default App;
