import React /* , { useState }  */ from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import armyband from "../images/78armybandrrecording.jpeg";
//import InstrumentPDFs from "./InstrumentPDFs.js";
import NavComponent from "./NavComponent";
import armymusic from "../images/band-overview.jpeg";

function Jobs() {
  /* const [instrument, setInstrument] = useState("test");
  const updateInstrument = (event) => setInstrument(event.target.innerText);

  console.log({ instrument }); */
  return (
    <div>
      <Navbar />
      <div className="jobs-page-pic-and-text">
        <div className="jobs-page-pic">
          <img src={armyband} className="jobs-page-bg-image" alt="" />
        </div>
        <div className="jobs-page-bg-text">
          <h1>Jobs</h1>
        </div>
      </div>
      <div className="jobs-page-description">
        {/* design similarly to https://www.goarmy.com/band/careers-and-jobs.html */}
        <h2>The role of an Army Musician</h2>
        <p>
          {/* **include musical img here** */}
          <strong>Job Description: </strong> Musicians specialize in one (or
          more) of the following instruments/specialties: tuba, trombone,
          euphonium, bassoon, electric bass guitar, saxophone, flute or piccolo,
          oboe, clarinet, French horn, percussion, cornet or trumpet, guitar,
          keyboard, vocalist, and music production. Musicians perform in a
          variety of ensembles ranging from ceremonial band to jazz band to
          small ensembles, playing all styles of music. They are primarily
          responsible for performing and rehearsing as a professional musician
          within different ensembles of an Army band.
        </p>
        <p>
          {/* **include PT img here** */}
          <strong>Qualifications: </strong> Sed biodiesel lo-fi do next level
          dolore meditation woke vexillologist pitchfork vice flexitarian
          iceland. Fam banjo yr selfies kombucha brunch trust fund distillery
          seitan man braid ramps authentic tilde enim. Echo park bitters offal,
          locavore viral tousled swag art party williamsburg schlitz palo santo.
          Cray art party chia gluten-free meditation post-ironic qui echo park
          twee.
        </p>
        <p>
          {/* **include generic friendly band img here** */}
          <strong>Salary & Benefits: </strong> As a musician in the Army
          Reserve, you'll receive benefits that allow you to do what you're best
          at: making great music. Benefits include: <br />
          <ul>Advanced initial rank (E-4 pay grade)</ul>
          <ul>Tuition Assistance</ul>
          <ul>
            Professional-quality instruments and supplies provided free of
            charge
          </ul>
          <ul>
            Check out all the benefits of being in the Army Reserve{" "}
            <a href="https://www.goarmy.com/reserve/benefits.html">here.</a>
          </ul>
        </p>
        <p>
          <strong>Audition: </strong> <br />
          1.{" "}
          <a href="mailto:paul.a.harding6.mil@mail.mil?subject: Request 78th Army Band">
            Reach out to us!
          </a>{" "}
          We'll get you set up and you will{" "}
          <a href="https://www.bands.army.mil/careers/auditions/form.asp">
            submit an audition request.
          </a>
          <br />
          2.{" "}
          <a href="https://www.goarmy.com/locate-a-recruiter.html">
            Contact your local recruiter.
          </a>
          (We'll help you with this!)
          <br />
          3. Schedule your audition with us.
          <br />
          4. Upon successful auditions and are deemed qualified for service, you
          will sign a contract for{" "}
          <a href="https://www.goarmy.com/careers-and-jobs/career-match/support-logistics/creative/42r-musician.html">
            OS 42R (Army Musician)
          </a>
          M and be assigned a training departure date.
        </p>
        <p>
          <strong>Who To Contact: </strong> Sed biodiesel
        </p>
      </div>
      <div className="jobs-page-vacancies">
        <h4>Vacancies</h4>
        <div>instrument</div>
        <div>instrument</div>
        <div>instrument</div>
      </div>
      <NavComponent />
      {/*    <div className="instrument-PDF">
        Instrument PDFs
        <InstrumentPDFs />
      </div> */}
      <div className="general-audition-info">General Audition Info</div>
      <div className="armyMusicCareers">
        <a href="https://www.goarmy.com/band.html" id="jobText">
          Army Music Careers
        </a>
        <img id="armyMusicImg" src={armymusic} />
      </div>
      <div className="armyCareers">Army Careers</div>
      <Footer />
    </div>
  );
}

export default Jobs;
