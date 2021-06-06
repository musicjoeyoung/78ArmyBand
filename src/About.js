import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import armyband3 from "./images/armyband3.jpeg";
import bioImg from "./images/78tharmybandcircle.jpeg";
import dropdownImg from "./images/dropdown.png";
import newImg from "./images/armyband7.jpeg";
import newImg2 from "./images/EndleinTestPic.png";

const bio1 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero magni deleniti quod quam consequuntur! Commodi minima excepturi repudiandae velit hic maxime doloremque. Quaerat provident commodi consectetur veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam quasi aliquam eligendi, placeat qui corporis!";
const bio2 =
  "I'm baby vHS church-key put a bird on it synth kogi. Fanny pack craft beer four dollar toast fam before they sold out messenger bag chambray slow-carb aesthetic trust fund chillwave mlkshk 3 wolf moon portland. Tofu godard 8-bit, fanny pack banh mi offal selfies blue bottle freegan chartreuse squid. Kinfolk yuccie fam tbh la croix taiyaki mlkshk literally sriracha art party chambray franzen. Listicle chia tbh shabby chic umami kickstarter.Glossier selfies tattooed, prism pickled vinyl single-origin coffee fam +1 umami scenester viral. Listicle ennui cronut fashion axe. Polaroid ethical whatever, brunch ennui yuccie single-origin coffee cliche 8-bit pop-up glossier palo santo umami edison bulb. Whatever biodiesel aesthetic cloud bread quinoa selvage gastropub cold-pressed yr hell of microdosing. Chillwave gastropub keffiyeh brunch leggings hoodie, poutine pitchfork 3 wolf moon fam pour-over. Quinoa truffaut microdosing actually fixie franzen umami squid heirloom schlitz pour-over. Chartreuse +1 knausgaard tumeric small batch plaid everyday carry post-ironic fixie pitchfork whatever. Occupy fam palo santo single-origin coffee unicorn, chillwave actually sartorial. Marfa gluten-free fingerstache, cray succulents copper mug meditation farm-to-table gochujang keffiyeh hot chicken chia williamsburg. Distillery post-ironic four dollar toast 8-bit 90's, bitters leggings paleo kitsch pour-over seitan blue bottle. Fanny pack leggings lomo chillwave echo park letterpress vice locavore whatever tousled beard literally stumptown. Glossier tumblr authentic, helvetica tousled ramps hoodie. Mumblecore fixie chartreuse normcore glossier lomo. Art party ethical microdosing pickled migas squid poke pour-over skateboard ramps sriracha tbh yr dreamcatcher.";
function changeBio1() {
  document.getElementById("bioImg").src = newImg;
  document.getElementById("bioText1").innerText = bio1;
}
function changeBio2() {
  document.getElementById("bioImg").src = newImg2;
  document.getElementById("bioText1").innerText = bio2;
}

export class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="ensembles-page-pic-and-text">
          <div className="ensembles-page-pic">
            <img src={armyband3} className="about-page-bg-image" alt="" />
          </div>
          <div className="about-page-bg-text">
            <h1>About</h1>
            <p id="about-page-pText">The history of the 78th Army Band...</p>
          </div>
        </div>
        <div className="history">
          <h2>History</h2>
          <p>1-2 sentences here</p>
        </div>
        <div className="meetTheBand">
          <div className="dropdownDiv">
            <div className="dropdown">
              <img className="dropbtn" src={dropdownImg} alt="" />
              <div className="navbar">
                <li id="navbarLinks" onClick={changeBio1}>
                  CW4 Luis J. Santiago
                </li>
                <li id="navbarLinks" onClick={changeBio2}>
                  1SG Brian Endlein
                </li>
              </div>
            </div>
          </div>
          <h2>Meet the Band</h2>
          Include dropdown menu of sections. Name that changes via Redux
          ("Command Staff", "Brass", "Percussion", etc.)
          <h3>Command Team</h3>
          <img id="bioImg" src={bioImg} alt="" />
          <p id="bioText1" src={bio1} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
