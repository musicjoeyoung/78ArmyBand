import React, { Component } from "react";
import HomeCarousel from "./HomeCarousel";
import Navbar from "./Navbar";
import Footer from "./Footer";
import armyband7 from "./images/armyband7.jpeg";

export class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <br />
        <HomeCarousel />
        <br />
        <br />
        <br />
        <div className="signuplink">
          <h3 id="signuptext">sign up for our newsletter</h3>
        </div>
        <br />
        <br />
        <br />
        <div className="about">
          <h3 id="mainDivTitle">About</h3>
          <div className="aboutChildContainer">
            <div className="aboutimage">
              <img src={armyband7} alt="" id="armyband7" />
            </div>
            <div className="aboutcarousel">
              <h3 id="historylink">History</h3>
              <h3 id="meetthebandlink">Meet the Band</h3>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />{" "}
        <div className="ensembles">
          <h3 id="mainDivTitle">Ensembles</h3>
          <div className="ensembleChildContainer">
            <div className="ensembleNames">
              <div className="ensembleName" id="ensemble1">
                ensemble 2
              </div>
              <div className="ensembleName" id="ensemble2">
                ensemble 3
              </div>
              <div className="ensembleName" id="ensemble3">
                ensemble 4
              </div>
              <div className="ensembleName" id="ensemble4">
                ensemble 5
              </div>
              <div className="ensembleName" id="ensemble5">
                ensemble 6
              </div>
            </div>
            <div className="ensembleImageContainer">
              <div id="ensembleImage">changing image</div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="events">
          <h3 id="mainDivTitle">Events</h3>
          <div className="eventsChildContainer">
            <div className="eventsVideoContainer">
              <div id="eventsVideo">
                <iframe
                  id="selectedEventsVideo"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/srDvDdzPnrg"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="eventsNames">
              <div>events 1</div>
              <div>events 2</div>
              <div>events 3</div>
            </div>
          </div>
          <button id="requestBand">request the band</button>
        </div>
        <br />
        <br />
        <br />{" "}
        <div className="media">
          <h3 id="mainDivTitle">Media</h3>
          <div className="mediaChildContainer">
            <div className="mediaVideosPicturesArticles">
              <div id="VidsAndPics">
                <div id="mediaVideos" />
                <div id="mediaPictures">circle pictures</div>
              </div>
              <div id="mediaArticles">circle articles</div>
            </div>
            <div className="mediaVideo">
              <div>
                <iframe
                  id="selectedMediaVideo"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/64R69szw6d4"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />{" "}
        <div className="jobs">
          <h3 id="mainDivTitle">Career Opportunities</h3>
          <div className="jobsChildContainer">
            <div className="vacancies">
              <h4>Vacancies</h4>
              <div>instrument</div>
              <div>instrument</div>
              <div>instrument</div>
            </div>
            <div className="auditionInfo">
              <h4>Audtion Information</h4>
              <label for="instruments">Instruments:</label>
              <select>
                <optgroup label="Woodwinds">
                  <option value="flute">Flute</option>
                  <option value="clarinet">Clarinet</option>
                  <option value="oboe">Oboe</option>
                  <option value="bassoon">Bassoon</option>
                  <option value="saxophone">Saxophone</option>
                </optgroup>
                <optgroup label="Brass">
                  <option value="trumpet">Trumpet</option>
                  <option value="frenchHorn">French Horn</option>
                  <option value="trombone">Trombone</option>
                  <option value="euphonium">Euphonium</option>
                  <option value="tuba">Tuba </option>
                </optgroup>
                <optgroup label="Strings">
                  <option value="guitar">Electric Guitar</option>
                  <option value="bass">Bass Guitar/String Bass</option>
                </optgroup>
                <option value="percussion">Percussion</option>
                <option value="pianoKeyboard">Piano/Keyboard</option>
                <option value="vocals">Vocals</option>
                <option value="audioEngineer">Audio Engineer</option>
              </select>
              <div>description</div>
              <div>samples</div>
              <div>media resources</div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}

export default Home;
