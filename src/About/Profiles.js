import React from "react";
const reactStringReplace = require("react-string-replace");
//? put a function here to map a <br/> within the bio every time a ¶ occurs?

const Profiles = ({ staff }) => {
  return staff.map((singleStaff) => (
    <div className="mainProfileDiv" key={singleStaff.id}>
      <img id="bioImg" alt="bioImage" src={singleStaff.img} />
      <h4 id="staffName">{singleStaff.name}</h4>
      <div id="bioText">
        {reactStringReplace(singleStaff.bio, "¶", (match, i) => (
          <div key={i}>
            <br />
          </div>
        ))}
      </div>
    </div>
  ));
};
export default Profiles;
