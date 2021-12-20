import React from "react";
const reactStringReplace = require("react-string-replace");

const EnsemblesProfiles = ({ ensembles }) => {
  return ensembles.map((ensemble) => (
    <div key={ensembles.id}>
      <h2 id="ensembleH2Name">{ensemble.name}</h2>
      <img
        key={ensembles.img}
        id="ensembleImg"
        alt="bioImage"
        src={ensemble.img}
      />
      <div key={ensembles.bio} id="bioText">
        {/* {ensemble.bio} */}
        {reactStringReplace(ensemble.bio, "¶", (match, i) => (
          <div>
            <br />
          </div>
        ))}
      </div>
    </div>
  ));
};
export default EnsemblesProfiles;
