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
  $(document).ready(function () {
    let footerHeight = $(".fixed-footer").outerHeight();
    $(".ensemblesNavComp").css("margin-bottom", footerHeight);
  });
  return (
    <div>
      <div className="ensemblesNavComp" role="navigation" aria-live="polite">
        <button
          className="ensembleNameNavComp"
          onClick={setSection}
          aria-label="Command Team"
          aria-pressed={true}
        >
          Command Team
        </button>
        <button
          className="ensembleNameNavComp"
          onClick={setSection}
          aria-label="Brass"
          aria-pressed={false}
        >
          Brass
        </button>
        <button
          className="ensembleNameNavComp"
          onClick={setSection}
          aria-label="Woodwinds"
          aria-pressed={false}
        >
          Woodwinds
        </button>
        <button
          className="ensembleNameNavComp"
          onClick={setSection}
          aria-label="Percussion"
          aria-pressed={false}
        >
          Percussion
        </button>
        <button
          className="ensembleNameNavComp"
          onClick={setSection}
          aria-label="Piano"
          aria-pressed={false}
        >
          Piano
        </button>
        <button
          className="ensembleNameNavComp"
          onClick={setSection}
          aria-label="Vocals"
          aria-pressed={false}
        >
          Vocals
        </button>
        <button
          className="ensembleNameNavComp"
          onClick={setSection}
          aria-label="Bass Guitar"
          aria-pressed={false}
        >
          Bass Guitar
        </button>
      </div>
    </div>
  );
};

export default NavComponent;
