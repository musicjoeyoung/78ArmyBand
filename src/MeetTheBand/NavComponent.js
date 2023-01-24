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
          tabIndex={1}
          className="ensembleNameNavComp"
          onClick={setSection}
          aria-label="Command Team"
          aria-pressed={true}
        >
          Command Team
        </button>
        <button
          tabIndex={2}
          className="ensembleNameNavComp"
          onClick={setSection}
          aria-label="Brass"
          aria-pressed={false}
        >
          Brass
        </button>
        <button
          tabIndex={3}
          className="ensembleNameNavComp"
          onClick={setSection}
          aria-label="Woodwinds"
          aria-pressed={false}
        >
          Woodwinds
        </button>
        <button
          tabIndex={4}
          className="ensembleNameNavComp"
          onClick={setSection}
          aria-label="Percussion"
          aria-pressed={false}
        >
          Percussion
        </button>
        <button
          tabIndex={5}
          className="ensembleNameNavComp"
          onClick={setSection}
          aria-label="Piano"
          aria-pressed={false}
        >
          Piano
        </button>
        <button
          tabIndex={6}
          className="ensembleNameNavComp"
          onClick={setSection}
          aria-label="Vocals"
          aria-pressed={false}
        >
          Vocals
        </button>
        <button
          tabIndex={7}
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
