import React, { Component } from "react";
import ConcertBand from "../images/78ConcertBand.jpeg";
import MarchingCeremonialBand from "../images/armyband1.jpg";
import BrassQuintet from "../images/armyband7.jpeg";
import Checkmate from "../images/Checkmate.jpeg";
import FortDixielandBrassBand from "../images/FortDixielandBrassBand.jpeg";
import LadyLiberty from "../images/LadyLiberty.png";
import LibertyVibes from "../images/LibertyVibes.jpeg";

function changeImage1() {
  document.getElementById("ensembleImage").src = ConcertBand;
}
function changeImage2() {
  document.getElementById("ensembleImage").src = MarchingCeremonialBand;
}
function changeImage3() {
  document.getElementById("ensembleImage").src = BrassQuintet;
}
function changeImage4() {
  document.getElementById("ensembleImage").src = Checkmate;
}
function changeImage5() {
  document.getElementById("ensembleImage").src = FortDixielandBrassBand;
}
function changeImage6() {
  document.getElementById("ensembleImage").src = LadyLiberty;
}
function changeImage7() {
  document.getElementById("ensembleImage").src = LibertyVibes;
}

export class EnsemblesComponent extends Component {
  render() {
    return (
      <div className="ensembles">
        <h3 id="mainDivTitle">Ensembles</h3>
        <div className="ensembleChildContainer">
          <div className="ensembleNames">
            <div
              className="ensembleName"
              id="ConcertBand"
              onMouseOver={changeImage1}
            >
              Concert Band
            </div>
            <div
              className="ensembleName"
              id="MarchingCeremonialBand"
              onMouseOver={changeImage2}
            >
              Marching/Ceremonial Band
            </div>
            <div
              className="ensembleName"
              id="BrassQuintet"
              onMouseOver={changeImage3}
            >
              Brass Quintet
            </div>
            <div
              className="ensembleName"
              id="Checkmate"
              onMouseOver={changeImage4}
            >
              Checkmate
            </div>
            <div
              className="ensembleName"
              id="FortDixielandBrassBand"
              onMouseOver={changeImage5}
            >
              Fort Dix-ieland Brass Band
            </div>
            <div
              className="ensembleName"
              id="FortDixielandBrassBand"
              onMouseOver={changeImage6}
            >
              Lady Liberty
            </div>
            <div
              className="ensembleName"
              id="FortDixielandBrassBand"
              onMouseOver={changeImage7}
            >
              Liberty Vibes
            </div>
          </div>
          <div className="ensembleImageContainer">
            <img id="ensembleImage" alt="" src={ConcertBand} />
          </div>
        </div>
      </div>
    );
  }
}

export default EnsemblesComponent;
