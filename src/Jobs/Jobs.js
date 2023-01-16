import React from "react";
import Navbar from "../Navbar";
import sheetMusic from "../images/sheetMusic.webp";
import armymusic from "../images/band-overview.webp";
import flute from "../images/instruments/78Flute-Piccolo.jpeg";
import clarinet from "../images/instruments/78Clarinet.jpeg";
import euphonium from "../images/instruments/78Euphonium.jpeg";
import guitar from "../images/instruments/78Guitar.jpeg";
import horn from "../images/instruments/78Horn.jpeg";
import saxophone from "../images/instruments/78Saxophone.jpeg";
import engineer from "../images/instruments/78SoundEngineer.jpeg";
import trombone from "../images/instruments/78Trombone.jpeg";
import tuba from "../images/instruments/78Tuba.jpeg";
import vocals from "../images/instruments/78Vocalist.jpeg";
import percussion from "../images/instruments/78Percussion.jpeg";
import bass from "../images/instruments/78Bass.jpeg";
import trumpet from "../images/instruments/78Trumpet.jpeg";
import _9B from "../Jobs/AMPA Materials/9B.pdf";
import _9C from "../Jobs/AMPA Materials/9C.pdf";
import _9D from "../Jobs/AMPA Materials/9D.pdf";
import _9E from "../Jobs/AMPA Materials/9E.pdf";
import _9F from "../Jobs/AMPA Materials/9F.pdf";
import _9G from "../Jobs/AMPA Materials/9G.pdf";
import _9H from "../Jobs/AMPA Materials/9H.pdf";
import _9J from "../Jobs/AMPA Materials/9J.pdf";
import _9K from "../Jobs/AMPA Materials/9K.pdf";
import _9L from "../Jobs/AMPA Materials/9L.pdf";
import _9M from "../Jobs/AMPA Materials/9M.pdf";
import _9N from "../Jobs/AMPA Materials/9N.pdf";
import _9T from "../Jobs/AMPA Materials/9T.pdf";
import _9U from "../Jobs/AMPA Materials/9U.pdf";
import _9V from "../Jobs/AMPA Materials/9V.pdf";
import VacanciesComp from "./VacanciesComp";

const Jobs = () => {
  /* const [instrument, setInstrument] = useState("test");
  const updateInstrument = (event) => setInstrument(event.target.innerText);

  console.log({ instrument }); */
  return (
    <div>
      <Navbar />
      <h1>Careers</h1>
      {/* <div className="jobs-page-bg-text">
      </div> */}
      {/* <div className="jobs-page-pic-and-text">
        <div className="jobs-page-pic">
          <img src={sheetMusic} className="jobs-page-bg-image" alt="" />
        </div>
      </div> */}
      <VacanciesComp />
      <div className="jobs-page-description">
        {/* design similarly to https://www.goarmy.com/band/careers-and-jobs.html */}
        <h2>The Role of an Army Musician</h2>
        <p id="roleDescriptions">
          {/* **include musical img here** */}
          <strong>Job Description: </strong> <br />
          Musicians specialize in one (or more) of the following
          instruments/specialties: tuba, trombone, euphonium, bassoon, electric
          bass guitar, saxophone, flute or piccolo, oboe, clarinet, French horn,
          percussion, cornet or trumpet, guitar, keyboard, vocalist, and music
          production. Musicians perform in a variety of ensembles ranging from
          ceremonial band to jazz band to small ensembles, playing all styles of
          music. They are primarily responsible for performing and rehearsing as
          a professional musician within different ensembles of an Army band.
        </p>
        <br />
        <p id="roleDescriptions">
          {/* **include PT img here** */}
          <strong>Qualifications: </strong> <br />• 17-34 years old <br />• U.S.
          Citizen or permanent resident alien <br />• Have a high school diploma
          or equivalent
          <br />
          • Be in good health and physical condition <br />• Be in good moral
          standing <br />• Prior service members may require waiver
        </p>
        <br />
        <p id="roleDescriptions">
          {/* **include generic friendly band img here** */}
          <strong>Salary & Benefits: </strong> <br />
          As a musician in the Army Reserve, you'll receive benefits that allow
          you to do what you're best at: making great music. Benefits include:{" "}
          <br />
          • Advanced initial rank (E-4 pay grade) <br />
          • Tuition Assistance <br />
          • Professional-quality instruments and supplies provided free of
          charge
          <br />• Check out all the benefits of being in the Army Reserve{" "}
          <a
            id="auditionFontATag"
            href="https://www.goarmy.com/reserve/benefits.html"
          >
            here.
          </a>
        </p>
        <br />
        <p id="roleDescriptions">
          <strong>Audition: </strong> <br />
          1.{" "}
          <a
            id="auditionFontATag"
            href="mailto:78tharmyband@gmail.com?subject: Request 78th Army Band"
          >
            Reach out to us!
          </a>{" "}
          We'll get you set up and you will{" "}
          <a
            id="auditionFontATag"
            href="https://www.bands.army.mil/careers/auditions/form.asp"
          >
            submit an audition request.
          </a>
          <br />
          2.{" "}
          <a
            id="auditionFontATag"
            href="https://www.goarmy.com/locate-a-recruiter.html"
          >
            Contact your local recruiter.
          </a>
          (We'll help you with this!)
          <br />
          3. Schedule your audition with us.
          <br />
          4. Upon successful auditions and are deemed qualified for service, you
          will sign a contract for{" "}
          <a
            id="auditionFontATag"
            href="https://www.goarmy.com/careers-and-jobs/career-match/support-logistics/creative/42r-musician.html"
          >
            MOS 42R (Army Musician)
          </a>
          and be assigned a training departure date.
        </p>
        <br />
      </div>

      <div className="instrumentsByName">
        <div className="instrumentAndImg" id="flute">
          <img id="instrumentImg" src={flute} alt="military musician: flute" />
          <div>
            <h1 id="instrumentTitle">Flute/Piccolo</h1>
            <p id="instrumentDescription">
              As a flute player U.S. Army Bands, you will be required to be
              proficient on both flute and piccolo. Flute players perform in
              concert band, ceremonial band, woodwind quintet and other small
              ensembles based on their strengths and the needs of the band.
            </p>
            <br />
            <a href={_9G} id="pdfLink">
              Click here for resources
            </a>
          </div>
        </div>
        <div className="instrumentAndImg" id="oboe">
          <div>
            <h1 id="instrumentTitle">Oboe</h1>
            <p id="instrumentDescription">
              Oboists perform in concert band, woodwind quintet and ceremonial
              band. You may also be asked to perform on English horn. Since oboe
              is not typically found in a marching band, oboists often double on
              another instrument, such as clarinet or saxophone (though this is
              not required).{" "}
            </p>
            <br />
            <a href={_9H} id="pdfLink">
              Click here for resources
            </a>
          </div>
          <img
            id="instrumentImg"
            src={armymusic}
            alt="military musician: oboe"
          />
        </div>
        <div className="instrumentAndImg" id="clarinet">
          <img
            id="instrumentImg"
            src={clarinet}
            alt="military musician: clarinet"
          />
          <div>
            <h1 id="instrumentTitle">Clarinet</h1>
            <p id="instrumentDescription">
              Clarinetists perform in concert band, ceremonial band, woodwind
              quintet, and other small groups, such as a Dixieland Band.
              Clarinet players may also be asked to perform on bass clarinet or
              E-flat clarinet, depending on the piece of music.{" "}
            </p>
            <br />
            <a href={_9J} id="pdfLink">
              Click here for resources
            </a>
          </div>
        </div>
        <div className="instrumentAndImg" id="saxophone">
          <div>
            <h1 id="instrumentTitle">Saxophone</h1>
            <p id="instrumentDescription">
              As a saxophone player in U.S. Army Bands, you will perform in
              concert band, ceremonial band, jazz band, rock band, and various
              other ensembles based on your skills and the needs of the band.
              You will be expected to be proficient in different musical styles
              and to perform on all members of the sax family. While not
              required, improvisational skill is valued and rewarded.{" "}
            </p>
            <br />
            <a href={_9L} id="pdfLink">
              Click here for resources
            </a>
          </div>
          <img
            id="instrumentImg"
            src={saxophone}
            alt="military musician: saxophone"
          />
        </div>
        <div className="instrumentAndImg" id="bassoon">
          <img
            id="instrumentImg"
            src={armymusic}
            alt="military musician: bassoon"
          />
          <div>
            <h1 id="instrumentTitle">Bassoon</h1>
            <p id="instrumentDescription">
              Bassoonists perform in concert band, woodwind quintet, and
              ceremonial band. Since bassoon is not typically found in a
              marching band, bassoonists often double on another instrument,
              such as clarinet or saxophone (though this is not required).{" "}
            </p>
            <br />
            <a href={_9K} id="pdfLink">
              Click here for resources
            </a>
          </div>
        </div>
        <div className="instrumentAndImg" id="horn">
          <div>
            <h1 id="instrumentTitle">Horn</h1>
            <p id="instrumentDescription">
              As a horn player in U.S. Army Bands, you will perform in concert
              band, ceremonial band, and brass or woodwind quintet. Ability to
              play in multiple styles, and chamber music experience are valued.{" "}
            </p>
            <br />
            <a href={_9D} id="pdfLink">
              Click here for resources
            </a>
          </div>
          <img id="instrumentImg" src={horn} alt="military musician: horn" />
        </div>
        <div className="instrumentAndImg" id="trumpet">
          <img
            id="instrumentImg"
            src={trumpet}
            alt="military musician: trumpet"
          />
          <div>
            <h1 id="instrumentTitle">Trumpet</h1>
            <p id="instrumentDescription">
              Trumpet players perform in concert band, ceremonial band, jazz
              band, brass quintet, rock band, and various other ensembles based
              on the needs of the band. While not required, improvisational
              skill is valued and rewarded. You will also have the honor of
              performing as a bugler during military ceremonies, and performing
              Taps at military funerals.{" "}
            </p>
            <br />
            <a href={_9B} id="pdfLink">
              Click here for resources
            </a>
          </div>
        </div>
        <div className="instrumentAndImg" id="euphonium">
          <div>
            <h1 id="instrumentTitle">Euphonium</h1>
            <p id="instrumentDescription">
              Euphonium players perform in concert band, ceremonial band, and
              small ensembles such as tuba-euphonium quartet, brass quintets, or
              brass bands, depending on the needs of the band. While not
              required, some euphonium players are also very proficient on
              trombone.{" "}
            </p>
            <br />
            <a href={_9C} id="pdfLink">
              Click here for resources
            </a>
          </div>
          <img
            id="instrumentImg"
            src={euphonium}
            alt="military musician: euphonium"
          />
        </div>
        <div className="instrumentAndImg" id="trombone">
          <img
            id="instrumentImg"
            src={trombone}
            alt="military musician: trombone"
          />
          <div>
            <h1 id="instrumentTitle">Trombone</h1>
            <p id="instrumentDescription">
              As a trombone player in U.S. Army Bands, you will perform in
              several ensembles, including concert band, ceremonial band, jazz
              ensembles, or other popular music ensembles. While not required,
              improvisational skill is valued and rewarded. While many trombone
              players focus mainly on bass trombone, all musicians selected for
              U.S. Army Bands must be equally skilled on tenor trombone, as you
              may be asked to perform on either depending on the needs of the
              ensemble.{" "}
            </p>
            <br />
            <a href={_9E} id="pdfLink">
              Click here for resources
            </a>
          </div>
        </div>
        <div className="instrumentAndImg" id="tuba">
          <div>
            <h1 id="instrumentTitle">Tuba</h1>
            <p id="instrumentDescription">
              Tuba players perform in concert band, ceremonial band, brass
              quintet, Dixieland band, and brass band. Tuba players will be
              required to perform on sousaphone during marching performances and
              some outdoor ceremonies.{" "}
            </p>
            <br />
            <a href={_9F} id="pdfLink">
              Click here for resources
            </a>
          </div>
          <img id="instrumentImg" src={tuba} alt="military musician: tuba" />
        </div>
        <div className="instrumentAndImg" id="percussion">
          <img
            id="instrumentImg"
            src={percussion}
            alt="military musician: percussion"
          />
          <div>
            <h1 id="instrumentTitle">Percussion</h1>
            <p id="instrumentDescription">
              Percussionists perform in a variety of ensembles, and they must
              have expertise in many different styles of music. Percussionists
              perform on drum set in rock-pop band, jazz band, and other popular
              music ensembles. Additionally, percussionists perform on marching
              snare and bass drum in the ceremonial band and concert snare,
              mallets, and auxiliary percussion in the concert band.{" "}
            </p>
            <br />
            <a href={_9M} id="pdfLink">
              Click here for resources
            </a>
          </div>
        </div>
        <div className="instrumentAndImg" id="keyboard">
          <div>
            <h1 id="instrumentTitle">Keyboard/Piano</h1>
            <p id="instrumentDescription">
              As a pianist in U.S. Army Bands, you will perform in several
              different capacities. You will perform with the jazz band, jazz
              combo, rock band, and other popular music ensembles and you will
              cover piano parts for the concert band. You will also provide solo
              piano music for dinner receptions and other formal events on post
              and in the community. Piano players must be experienced in several
              different styles, and should be very familiar with digital
              keyboards as well as the piano.{" "}
            </p>
            <br />
            <a href={_9N} id="pdfLink">
              Click here for resources
            </a>
          </div>
          <img
            id="instrumentImg"
            src={armymusic}
            alt="military musician: piano"
          />
        </div>
        <div className="instrumentAndImg" id="guitar">
          <img
            id="instrumentImg"
            src={guitar}
            alt="military musician: guitar"
          />
          <div>
            <h1 id="instrumentTitle">Electric Guitar</h1>
            <p id="instrumentDescription">
              Guitar players perform in many different styles and ensembles,
              including rock band, jazz band, jazz combo, Latin/salsa band and
              country band. All guitar players must be skilled in electric
              guitar, as well as acoustic.{" "}
            </p>
            <br />
            <a href={_9T} id="pdfLink">
              Click here for resources
            </a>
          </div>
        </div>
        <div className="instrumentAndImg" id="bass">
          <div>
            <h1 id="instrumentTitle">Electric Bass</h1>
            <p id="instrumentDescription">
              Bass guitarists perform with the jazz band, rock band, Latin/salsa
              band, and other popular music ensembles as needed. All bass
              players must play bass guitar proficiently, with additional
              consideration given to those also proficient on upright bass.{" "}
            </p>
            <br />
            <a href={_9U} id="pdfLink">
              Click here for resources
            </a>
          </div>
          <img id="instrumentImg" src={bass} alt="military musician: bass" />
        </div>
        <div className="instrumentAndImg" id="vocals">
          <img
            id="instrumentImg"
            src={vocals}
            alt="military musician: vocalist"
          />
          <div>
            <h1 id="instrumentTitle">Vocals</h1>
            <p id="instrumentDescription">
              U.S. Army Bands vocalists must be proficient in many styles of
              music, with an emphasis on popular styles like rock, pop, and
              country, and must be able to learn new music quickly. Vocalists
              will perform with many types of ensembles, ranging from a capella
              performance to rock bands to full concert band. Must be an
              experienced solo performer with excellent stage presence and
              professional demeanor.{" "}
            </p>
            <br />
            <a href={_9V} id="pdfLink">
              Click here for resources
            </a>
          </div>
        </div>
        <div className="instrumentAndImg" id="engineer">
          <div>
            <h1 id="instrumentTitle">Audio Engineer</h1>
            <p id="instrumentDescription">
              As a production technician (or audio engineer) in U.S. Army Bands,
              you will be responsible for all live concert audio engineering of
              performances and rehearsals. In addition to advanced audio
              techniques, you will be trained on the operation of lighting
              systems.{" "}
            </p>
            <br />
            {/* <a href={trumpetPDF} id="pdfLink">
              Click here for resources
            </a> */}
          </div>
          <img
            id="instrumentImg"
            src={engineer}
            alt="military musician: engineer"
          />
        </div>
      </div>
      {/* <div className="general-audition-info">General Audition Info</div>
      <div className="armyMusicCareers">
        <a href="https://www.goarmy.com/band.html" id="jobText">
          Army Music Careers
        </a>
        <img id="armyMusicImg" src={armymusic} alt="military band" />
      </div>
      <div className="armyCareers">Army Careers</div> */}
    </div>
  );
};

export default Jobs;
