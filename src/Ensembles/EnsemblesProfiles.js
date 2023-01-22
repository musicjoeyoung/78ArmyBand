import React from "react";
const reactStringReplace = require("react-string-replace");

const EnsemblesProfiles = ({ ensembles }) => {
  return ensembles.map((ensemble) => (
    <div key={ensemble.id} className="ensembleContainer">
      <h1 className="desktopH1">Ensembles</h1>
      <p id="ensemblePageDescription">
        The 78th Army Band's many ensembles perform throughout the larger
        tri-state area for all communities. They play a vital role in the Army
        by providing musical support for various troops, units and branches,
        entertaining civilians, and serving as musical ambassadors of the Army.
      </p>
      <h2 id="ensembleH2Name">{ensemble.name}</h2>
      <img id="ensembleImg" alt="bioImage" src={ensemble.img} />
      <div id="bioText">
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
