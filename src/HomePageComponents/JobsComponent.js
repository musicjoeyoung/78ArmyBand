import React, { Component } from "react";
import NavComponent from "../Jobs/NavComponent";

export class JobsComponent extends Component {
  render() {
    return (
      <div className="jobs">
        <h3 id="mainDivTitle">Career Opportunities</h3>
        <div className="jobsChildContainer">
          <div className="vacancies">
            <h4>Vacancies</h4>
            <div>Bassoon</div>
            <div>Bass Guitar</div>
            <div>Oboe</div>
          </div>

          <NavComponent id="jobsNavCompHomepage" />
        </div>
      </div>
    );
  }
}

export default JobsComponent;
