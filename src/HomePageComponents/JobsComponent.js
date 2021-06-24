import React, { Component } from "react";

export class JobsComponent extends Component {
  render() {
    return (
      <div className="jobs">
        <h3 id="mainDivTitle">Career Opportunities</h3>
        <div className="jobsChildContainer">
          <div className="vacancies">
            <h4>Vacancies</h4>
            <div>instrument</div>
            <div>instrument</div>
            <div>instrument</div>
          </div>
          <div className="auditionInfo">
            <h4>Audtion Information</h4>
            <label htmlFor="instruments">Instruments:</label>
            <select>
              <option disabled selected value>
                {" "}
                -- select instrument --{" "}
              </option>
              <optgroup label="Woodwinds">
                <option value="flute">Flute</option>
                <option value="clarinet">Clarinet</option>
                <option value="oboe">Oboe</option>
                <option value="bassoon">Bassoon</option>
                <option value="saxophone">Saxophone</option>
              </optgroup>
              <optgroup label="Brass">
                <option value="trumpet">Trumpet</option>
                <option value="frenchHorn">French Horn</option>
                <option value="trombone">Trombone</option>
                <option value="euphonium">Euphonium</option>
                <option value="tuba">Tuba </option>
              </optgroup>
              <optgroup label="Strings">
                <option value="guitar">Electric Guitar</option>
                <option value="bass">Bass Guitar/String Bass</option>
              </optgroup>
              <optgroup label="-----">-----</optgroup>
              <option value="percussion">Percussion</option>
              <option value="pianoKeyboard">Piano/Keyboard</option>
              <option value="vocals">Vocals</option>
              <option value="audioEngineer">Audio Engineer</option>
            </select>
            <div>description</div>
            <div>samples</div>
            <div>media resources</div>
          </div>
        </div>
      </div>
    );
  }
}

export default JobsComponent;
