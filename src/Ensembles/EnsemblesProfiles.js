import React from "react";
const reactStringReplace = require("react-string-replace");

const EnsemblesProfiles = ({ ensembles }) => {
  return ensembles.map((ensemble) => (
    <div key={ensemble.id}>
      <h2 id="ensembleH2Name">{ensemble.name}</h2>
      <img id="ensembleImg" alt="bioImage" src={ensemble.img} />
      <div id="bioText">
        {/* {ensemble.bio} */}
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
