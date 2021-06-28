import React from "react";

const EnsemblesProfiles = ({ ensembles }) => {
  return ensembles.map((ensemble) => (
    <div>
      <h2 key={ensembles.name} id="ensembleH2Name">
        {ensemble.name}
      </h2>
      <img
        key={ensembles.img}
        id="ensembleImg"
        alt="bioImage"
        src={ensemble.img}
      />
      <p key={ensembles.bio} id="bioText">
        {ensemble.bio}
      </p>
    </div>
  ));
};
export default EnsemblesProfiles;
