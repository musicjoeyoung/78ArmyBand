import $ from "jquery";
import "./NavComponent.scss"

const NavComponent = ({ setSection }) => {
  $(document).ready(function () {
    let offset = $(".ensemblesNavContainer").offset();
    $(window).scroll(function () {
      let scrollTop = $(window).scrollTop();
      if (offset.top < scrollTop) {
        $(".ensemblesNavContainer").addClass("fixed");
      } else {
        $(".ensemblesNavContainer").removeClass("fixed");
      }
    });
  });
  $(document).ready(function () {
    let footerHeight = $(".fixed-footer").outerHeight();
    $(".ensemblesNavContainer").css("margin-bottom", footerHeight);
  });
  return (
    <div>
      <div className="ensemblesNavContainer" role="navigation" aria-live="polite">
        <button
          className="ensemblesNavContainer__ensemble"
          onClick={setSection}
          aria-label="Command Team"
          aria-pressed={true}
        >
          Command Team
        </button>
        <button
          className="ensemblesNavContainer__ensemble"
          onClick={setSection}
          aria-label="Brass"
          aria-pressed={false}
        >
          Brass
        </button>
        <button
          className="ensemblesNavContainer__ensemble"
          onClick={setSection}
          aria-label="Woodwinds"
          aria-pressed={false}
        >
          Woodwinds
        </button>
        <button
          className="ensemblesNavContainer__ensemble"
          onClick={setSection}
          aria-label="Percussion"
          aria-pressed={false}
        >
          Percussion
        </button>
        <button
          className="ensemblesNavContainer__ensemble"
          onClick={setSection}
          aria-label="Piano"
          aria-pressed={false}
        >
          Piano
        </button>
        <button
          className="ensemblesNavContainer__ensemble"
          onClick={setSection}
          aria-label="Vocals"
          aria-pressed={false}
        >
          Vocals
        </button>
        <button
          className="ensemblesNavContainer__ensemble"
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
