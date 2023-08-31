import React from "react";
import "./EnsemblesProfiles.scss"
const reactStringReplace = require("react-string-replace");

const EnsemblesProfiles = ({ ensembles }) => {
  return ensembles.map((ensemble) => (
    <div key={ensemble.id} className="ensemble">
      <h1 className="ensemble__h1">Ensembles</h1>
      <p className="ensemble__description">
        The 78th Army Band's many ensembles perform throughout the larger
        tri-state area for all communities. They play a vital role in the Army
        by providing musical support for various troops, units and branches,
        entertaining civilians, and serving as musical ambassadors of the Army.
      </p>
      <h2 className="ensemble__h2">{ensemble.name}</h2>
      <img className="ensemble__img" alt="bioImage" src={ensemble.img} />
      <div className="ensemble__bio">
        {reactStringReplace(ensemble.bio, "¶", (match, i) => (
          <div key={i}>
            <br />
          </div>
        ))}
      </div>
    </div>
  ));
};
export default EnsemblesProfiles;
