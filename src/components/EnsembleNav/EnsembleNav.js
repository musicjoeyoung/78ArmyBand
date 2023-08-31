import React from "react";
import $ from "jquery";
import "./EnsembleNav.scss"

const EnsembleNav = ({ setName }) => {
  $(document).ready(function () {
    // check where the shoppingcart-div is
    let offset = $(".ensembles-container").offset();
    $(window).scroll(function () {
      let scrollTop = $(window).scrollTop();
      // check the visible top of the browser
      if (offset.top < scrollTop) {
        $(".ensembles-container").addClass("fixed");
      } else {
        $(".ensembles-container").removeClass("fixed");
      }
    });
  });
  return (
    <div>
      <div className="ensembles-container" role="navigation" aria-live="polite">
        <button
          className="ensembles-container__ensemble-button"
          onClick={setName}
          id="ConcertBand"
          aria-label="Concert Band"
          aria-pressed={false}
        >
          Concert Band
        </button>
        <button
          className="ensembles-container__ensemble-button"
          onClick={setName}
          id="MarchingCeremonialBand"
          aria-label="Marching Ceremonial Band"
          aria-pressed={false}
        >
          Marching/Ceremonial Band
        </button>
        <button
          className="ensembles-container__ensemble-button"
          onClick={setName}
          id="BrassQuintet"
          aria-label="Brass Quintet"
          aria-pressed={false}
        >
          Brass Quintet
        </button>

        <button
          className="ensembles-container__ensemble-button"
          onClick={setName}
          id="Checkmate"
          aria-label="Checkmate rock band"
          aria-pressed={false}
        >
          Checkmate
        </button>
        <button
          className="ensembles-container__ensemble-button"
          onClick={setName}
          id="FortDixielandBrassBand"
          aria-label="Fort Dixieland Brass Band"
          aria-pressed={false}
        >
          Fort Dix-ieland Brass Band
        </button>
        <button
          className="ensembles-container__ensemble-button"
          onClick={setName}
          id="FortDixielandBrassBand"
          aria-label="Liberty Vibes Latin/jazz group"
          aria-pressed={false}
        >
          Liberty Vibes
        </button>
      </div>
    </div>
  );
};

export default EnsembleNav;
