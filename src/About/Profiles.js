import React from "react";

const Profiles = ({ staff }) => {
  return staff.map((staff) => (
    <div>
      <img key={staff.img} id="bioImg" alt="bioImage" src={staff.img} />
      <h4 key={staff.name} id="staffName">
        {staff.name}
      </h4>
      <p key={staff.bio} id="bioText">
        {staff.bio}
      </p>
    </div>
  ));
};
export default Profiles;
