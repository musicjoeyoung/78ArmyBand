import { useState } from "react";
import { ensembles } from "../../assets/ensembles/ensemblesArray";
import "./Ensembles.scss"

const Ensembles = () => {
  const [name, setName] = useState("Concert Band");

  const handleSectionChange = (event) => {
    setName(event.target.value);
  };

  const filteredEnsemble = name === "All" ? ensembles : ensembles.filter(member => member.name === name);

  const renderBio = (bio) => {
    const paragraphs = bio.split("¶");
    return paragraphs.map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ));
  };

  return (
    <div className="ensembles">
      <h1>Ensembles</h1>
      <p className="ensembles__description">The 78th Army Band's many ensembles perform throughout the larger tri-state area for all communities. They play a vital role in the Army by providing musical support for various troops, units and branches, entertaining civilians, and serving as musical ambassadors of the Army.</p>
      <div className="section-selector">
        <label htmlFor="section">Select Section: </label>
        <select value={name} onChange={handleSectionChange}>
          <option value="All">All</option>
          <option value="Concert Band">Concert Band</option>
          <option value="Marching/Ceremonial Band">Marching/Ceremonial Band</option>
          <option value="Brass Quintet">Brass Quintet</option>
          <option value="Checkmate">Checkmate</option>
          <option value="9x9">9x9</option>
          <option value="Liberty Vibes">Liberty Vibes</option>
        </select>
      </div>
      {filteredEnsemble.map((ensemble, index) => {
        return (
          <div key={index} className="ensemble">
            <h2>{ensemble.name}</h2>
            <div >
              <img className="ensemble__img" alt="bioImage" src={ensemble.img} />
              <div className="ensemble__bio">{renderBio(ensemble.bio)}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Ensembles;
