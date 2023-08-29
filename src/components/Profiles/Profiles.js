import "./Profiles.scss"
const reactStringReplace = require("react-string-replace");

const Profiles = ({ staff }) => {
  return staff.map((singleStaff) => (
    <div className="mainProfileDiv" key={singleStaff.id}>
      {/* <img id="bioImg" alt="bioImage" src={singleStaff.img} /> */}
      <h4 className="mainProfileDiv__staffName">{singleStaff.name}</h4>
      <div className="mainProfileDiv__bioText">
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
