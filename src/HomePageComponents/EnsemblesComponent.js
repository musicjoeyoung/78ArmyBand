import React, { Component } from "react";
import ensemble1 from "../images/armyband1.jpg";
import ensemble2 from "../images/armyband2.jpeg";
import ensemble3 from "../images/armyband3.jpeg";
import ensemble4 from "../images/armyband4.jpeg";
import ensemble5 from "../images/armyband5.jpeg";
import armyband7 from "../images/armyband7.jpeg";

function changeImage1() {
  document.getElementById("ensembleImage").src = ensemble1;
}
function changeImage2() {
  document.getElementById("ensembleImage").src = ensemble2;
}
function changeImage3() {
  document.getElementById("ensembleImage").src = ensemble3;
}
function changeImage4() {
  document.getElementById("ensembleImage").src = ensemble4;
}
function changeImage5() {
  document.getElementById("ensembleImage").src = ensemble5;
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
              id="ensemble1"
              onMouseOver={changeImage1}
            >
              ensemble 1
            </div>
            <div
              className="ensembleName"
              id="ensemble2"
              onMouseOver={changeImage2}
            >
              ensemble 2
            </div>
            <div
              className="ensembleName"
              id="ensemble3"
              onMouseOver={changeImage3}
            >
              ensemble 3
            </div>
            <div
              className="ensembleName"
              id="ensemble4"
              onMouseOver={changeImage4}
            >
              ensemble 4
            </div>
            <div
              className="ensembleName"
              id="ensemble5"
              onMouseOver={changeImage5}
            >
              ensemble 5
            </div>
          </div>
          <div className="ensembleImageContainer">
            <img id="ensembleImage" alt="" src={armyband7} />
          </div>
        </div>
      </div>
    );
  }
}

export default EnsemblesComponent;
