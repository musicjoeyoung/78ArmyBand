import React from "react";
import NavComponent from "../Jobs/NavComponent";
import VacanciesComp from "../Jobs/VacanciesComp";

const JobsComponent = () => {
  return (
    <div className="jobs">
      <h3 id="mainDivTitle">
        <a href="./jobs" id="mainDivTitleEnsemble">
          Career Opportunities
        </a>
      </h3>
      <div className="jobsChildContainer">
        <VacanciesComp />
        <NavComponent id="jobsNavCompHomepage" />
      </div>
    </div>
  );
};

export default JobsComponent;
