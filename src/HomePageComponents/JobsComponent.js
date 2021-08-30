import React, { Component } from "react";
import NavComponent from "../Jobs/NavComponent";
import VacanciesComp from "../Jobs/VacanciesComp";

export class JobsComponent extends Component {
  render() {
    return (
      <div className="jobs">
        <h3 id="mainDivTitle">
          <a href="./Jobs/Jobs.js" id="mainDivTitleEnsemble">
            Career Opportunities
          </a>
        </h3>
        <div className="jobsChildContainer">
          <VacanciesComp />
          <NavComponent id="jobsNavCompHomepage" />
        </div>
      </div>
    );
  }
}

export default JobsComponent;
