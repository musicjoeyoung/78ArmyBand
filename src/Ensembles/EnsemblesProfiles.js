import React from "react";
const reactStringReplace = require("react-string-replace");

const EnsemblesProfiles = ({ ensembles }) => {
  return ensembles.map((ensemble) => (
    <div>
      <h2 key={ensembles.id} id="ensembleH2Name">
        {ensemble.name}
      </h2>
      <img
        key={ensembles.img}
        id="ensembleImg"
        alt="bioImage"
        src={ensemble.img}
      />
      <p key={ensembles.bio} id="bioText">
        {/* {ensemble.bio} */}
        {reactStringReplace(ensemble.bio, "¶", (match, i) => (
          <div>
            <br />
          </div>
        ))}
      </p>
    </div>
  ));
};
export default EnsemblesProfiles;
