import React from "react";
import { file } from "./InstrumentPDFs";

const JobsMap = ({ PDFs }) => {
  return PDFs.map((ensemble) => (
    <div>
      <p>{ensemble.bio}</p>
    </div>
  ));
};
export default EnsemblesProfiles;
