import React from "react";
import $ from "jquery";

const NavComponent = ({ setSection }) => {
  $(document).ready(function () {
    let offset = $(".ensemblesNavComp").offset();
    $(window).scroll(function () {
      let scrollTop = $(window).scrollTop();
      if (offset.top < scrollTop) {
        $(".ensemblesNavComp").addClass("fixed");
      } else {
        $(".ensemblesNavComp").removeClass("fixed");
      }
    });
  });
  return (
    <div>
      <div className="ensemblesNavComp">
        <button className="ensembleNameNavComp" onClick={setSection}>
          Command Team
        </button>
        <button className="ensembleNameNavComp" onClick={setSection}>
          Brass
        </button>
        <button className="ensembleNameNavComp" onClick={setSection}>
          Woodwinds
        </button>
        <button className="ensembleNameNavComp" onClick={setSection}>
          Percussion
        </button>
        <button className="ensembleNameNavComp" onClick={setSection}>
          Piano
        </button>
        <button className="ensembleNameNavComp" onClick={setSection}>
          Vocals
        </button>
        <button className="ensembleNameNavComp" onClick={setSection}>
          Bass Guitar
        </button>
      </div>
    </div>
  );
};

export default NavComponent;
