import React, { Component } from "react";

export class EnsemblesComponent extends Component {
  render() {
    return (
      <div className="ensembles">
        <h3 id="mainDivTitle">Ensembles</h3>
        <div className="ensembleChildContainer">
          <div className="ensembleNames">
            <div className="ensembleName" id="ensemble1">
              ensemble 2
            </div>
            <div className="ensembleName" id="ensemble2">
              ensemble 3
            </div>
            <div className="ensembleName" id="ensemble3">
              ensemble 4
            </div>
            <div className="ensembleName" id="ensemble4">
              ensemble 5
            </div>
            <div className="ensembleName" id="ensemble5">
              ensemble 6
            </div>
          </div>
          <div className="ensembleImageContainer">
            <div id="ensembleImage">changing image</div>
          </div>
        </div>
      </div>
    );
  }
}

export default EnsemblesComponent;
