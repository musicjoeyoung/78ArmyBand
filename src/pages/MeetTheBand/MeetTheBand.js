import { useState } from "react";
import { staff } from "../../assets/meetTheBand/staffArray.js";
import "./MeetTheBand.scss";

const MeetTheBand = () => {
  const [section, setSection] = useState("Command Team");

  const rankOrder = ["CW4", "CW3", "CW2", "WO1", "1SG", "MSG", "SFC", "SSG", "SGT", "SPC", "PFC", "PV2", "PV1"]

  const handleSectionChange = (event) => {
    setSection(event.target.value);
  };

  const filteredStaff = section === "All" ? staff : staff.filter(member => member.section === section);

  const orderedStaff = filteredStaff.sort((a, b) => {
    const rankA = rankOrder.indexOf(a.rank);
    const rankB = rankOrder.indexOf(b.rank);
    return rankA - rankB;
  })

  const renderBio = (bio) => {
    const paragraphs = bio.split("¶");
    return paragraphs.map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ));
  };


  return (
    <div className="meet-the-band">
      <h1>Meet the Band</h1>
      <img
        src="https://res.cloudinary.com/dfbuwtl5q/image/upload/v1674497589/78armybandparade-min_1_25_keiu3b.jpg"
        alt="marching band"
        className="meet-the-band__img"
      />
      <div>
        <label htmlFor="section">Select Section: </label>
        <select value={section} onChange={handleSectionChange}>
          <option value="All">All</option>
          <option value="Command Team">Command Team</option>
          <option value="Brass">Brass</option>
          <option value="Woodwinds">Woodwind</option>
          <option value="Percussion">Percussion</option>
          <option value="Piano">Piano</option>
          <option value="Vocals">Vocals</option>
          <option value="Guitar">Guitar</option>
          <option value="Bass Guitar">Bass Guitar</option>
          <option value="Sound">Sound</option>
        </select>
      </div>
      <h2>{section}</h2>
      {orderedStaff.map((member) => {
        return (
          <div key={member.id} className="member">
            <div >
              <h3>{member.rank} {member.name}</h3>
              <div className="member__bio">{renderBio(member.bio)}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MeetTheBand;
