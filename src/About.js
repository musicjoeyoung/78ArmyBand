import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import armyband3 from "./images/armyband3.jpeg";
import bioImg from "./images/78tharmybandcircle.jpeg";
import dropdownImg from "./images/dropdown.png";
import newImg from "./images/armyband7.jpeg";

const bio1 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero magni deleniti quod quam consequuntur! Commodi minima excepturi repudiandae velit hic maxime doloremque. Quaerat provident commodi consectetur veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam quasi aliquam eligendi, placeat qui corporis!";

function changeBio1() {
  document.getElementById("bioImg").src = newImg;
  document.getElementById("bioText1").src = bio1;
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
                  Switch Bio Img Test
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
