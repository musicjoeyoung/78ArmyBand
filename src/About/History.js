import React, { Component } from "react";
import Modal from "./Modal";

export class History extends Component {
  modalProps = {
    triggerText: "Read More",
  };
  modalContent = (
    <React.Fragment>
      <p id="modalText">
        Formation of the Band The 78th Infantry Division was formed in August of
        1942. One year later, the 78th Army Band was formed on the 2nd of
        August, 1943. During this time, it was known as the 78th Infantry
        Division Band. The insignia was a lightning strike on a blood red field.
        The battles that the 78th Infantry fought, according to the French,
        resembled a lightning strike, leaving the field red. European (WWII)
        Combat On the 13th of December, 1944, the 78th Infantry Division
        (including the band) entered combat, fighting in WWII. They fought in
        the Rhineland Campaign. the Ardennes-Alsace Campaign, and the Central
        Europe Campaign. The 78th Infantry Division Band was decorated with a
        Meritorious Unit Commendation and a streamer embroidered with European
        Theater. The 78th Infantry Division spent a total of 125 days in combat
        wherein there were 12,257 casualties and 1,547 deaths.
        Deactivation/Reactivation/Name Change Shortly after the deployment, the
        78th Infantry Division Band was deactivated on the 22nd of May, 1946 in
        Germany. On the 1st of October, 1950, the 78th Infantry Division Band
        was reactivated in Newark, New Jersey. Over the next 8 years, it moved
        to three different cities in New Jersey -- Newark in 1950, Kearny in
        1955, and Camp Kilmer in Edison, NJ in 1958. In 1959, the name was
        changed from the 78th Infantry Division Band to the 78th Infantry Band.
        In 1968, the Band was consolidated with the Support Company for the 78th
        (Training) Division. In 1970 and 1971, the Support Company and Band was
        reorganized and renamed. 878th Army Band On the 16th of November, 1982,
        the band element was separated from the Support Company and renamed the
        878th Army Band, no longer a part of the Support Company (although still
        under the 78th Training Division). The next year, on the 17th of
        November in 1983, the 878th Army Band returned to be a part of the Band
        Element of the 78th Division (Training). 78th Division Band On the 16th
        of September, 1988, the 78th withdrew from Headquarters Company and was
        redesignated as the 78th Division Band. They remained as the 78th
        Division Band even as the 78th Division changed title Training to
        Exercise (in 1993) and Exercise to Training Support (in 1999). Relieved
        and Reorganized On the 1st of April, 2007, the 78th Division Band was
        relieved from the 78th Division (Training Support). On the 16th of
        October, 2008, the Band was reorganized and redesignated as the 78th
        Army Band out of Fort Dix, NJ.
      </p>
    </React.Fragment>
  ); //
  render() {
    return (
      <div className="about" id="history">
        <h3 id="mainDivTitleAbout">History</h3>
        <p id="historyText">
          The 78th Infantry Division was formed in August of 1942. One year
          later, the 78th Army Band was formed on the 2nd of August, 1943.
          During this time, it was known as the 78th Infantry Division Band. The
          insignia was a lightning strike on a blood red field. The battles that
          the 78th Infantry fought, according to the French, resembled a
          lightning strike, leaving the field red.
        </p>

        <Modal modalProps={this.modalProps} modalContent={this.modalContent} />
      </div>
    );
  }
}

export default History;

/*     <div className="about" id="history">
      <h3 id="mainDivTitleAbout">History</h3>

      <p id="historyText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Justo donec enim
        diam vulputate ut pharetra sit amet aliquam. Lacus laoreet non curabitur
        gravida arcu ac tortor dignissim convallis. Quis imperdiet massa
        tincidunt nunc pulvinar sapien. Lacus suspendisse faucibus interdum
        posuere lorem ipsum dolor sit. Ut tortor pretium viverra suspendisse
        potenti nullam ac tortor vitae. Non pulvinar neque laoreet suspendisse
        interdum consectetur libero id. Aliquet enim tortor at auctor urna nunc
        id cursus metus. Lectus vestibulum mattis ullamcorper velit sed
        ullamcorper. Neque ornare aenean euismod elementum nisi quis eleifend
        quam.
      </p>
    </div> */
