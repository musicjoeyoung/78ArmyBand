import React from "react";
const reactStringReplace = require("react-string-replace");
//? put a function here to map a <br/> within the bio every time a ¶ occurs?

const Profiles = ({ staff }) => {
  return staff.map((staff) => (
    <div className="mainProfileDiv" key={staff.id}>
      <img key={staff.img} id="bioImg" alt="bioImage" src={staff.img} />
      <h4 key={staff.name} id="staffName">
        {staff.name}
      </h4>
      <p key={staff.bio} id="bioText">
        {reactStringReplace(staff.bio, "¶", (match, i) => (
          <div>
            <br />
          </div>
        ))}
      </p>
    </div>
  ));
};
export default Profiles;
