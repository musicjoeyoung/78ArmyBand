import React from "react";
import $ from "jquery";

const NavComponent = ({ setName }) => {
  $(document).ready(function () {
    // check where the shoppingcart-div is
    let offset = $(".ensemblesNavComp").offset();
    $(window).scroll(function () {
      let scrollTop = $(window).scrollTop();
      // check the visible top of the browser
      if (offset.top < scrollTop) {
        $(".ensemblesNavComp").addClass("fixed");
      } else {
        $(".ensemblesNavComp").removeClass("fixed");
      }
    });
  });
  return (
    <div>
      <div className="ensemblesNavComp" role="navigation" aria-live="polite">
        <button
          className="ensembleNameNavComp"
          onClick={setName}
          id="ConcertBand"
          aria-label="Concert Band"
          aria-pressed={false}
        >
          Concert Band
        </button>
        <button
          className="ensembleNameNavComp"
          onClick={setName}
          id="MarchingCeremonialBand"
          aria-label="Marching Ceremonial Band"
          aria-pressed={false}
        >
          Marching/Ceremonial Band
        </button>
        <button
          className="ensembleNameNavComp"
          onClick={setName}
          id="BrassQuintet"
          aria-label="Brass Quintet"
          aria-pressed={false}
        >
          Brass Quintet
        </button>

        <button
          className="ensembleNameNavComp"
          onClick={setName}
          id="Checkmate"
          aria-label="Checkmate rock band"
          aria-pressed={false}
        >
          Checkmate
        </button>
        <button
          className="ensembleNameNavComp"
          onClick={setName}
          id="FortDixielandBrassBand"
          aria-label="Fort Dixieland Brass Band"
          aria-pressed={false}
        >
          Fort Dix-ieland Brass Band
        </button>
{/*         <button
          className="ensembleNameNavComp"
          onClick={setName}
          id="FortDixielandBrassBand"
          aria-label="Lady Liberty musical group"
          aria-pressed={false}
        >
          Lady Liberty
        </button> */}
        <button
          className="ensembleNameNavComp"
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

export default NavComponent;
