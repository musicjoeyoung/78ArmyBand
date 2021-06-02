import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import armyband3 from "./images/armyband3.jpeg";

export class Ensembles extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="ensembles-page-pic-and-text">
          <div className="ensembles-page-pic">
            <img src={armyband3} className="ensembles-page-bg-image" alt="" />
          </div>
          <div className="ensembles-page-bg-text">
            <h1>Ensembles</h1>
            <p id="ensembles-page-pText">
              The ensembles of the 78th Army Band...
            </p>
          </div>
        </div>
        <div className="ensemblesList">
          <h2>Ensembles</h2>
          <p>1-2 sentences here</p>
          <div className="individualEnsemble">
            <h2>Ensemble Name</h2>
            Include dropdown menu of abnds. Name that changes via Redux ("Lady
            Liberty", "Libety Vibes", "Brass Quintet", etc.)
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Ensembles;
