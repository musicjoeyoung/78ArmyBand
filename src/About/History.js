import React, { Component } from "react";
import Modal from "./Modal";

export class History extends Component {
  modalProps = {
    triggerText: "Read More",
  };
  modalContent = (
    <React.Fragment>
      <p id="modalText">
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
        quam. Mauris cursus mattis molestie a iaculis at erat pellentesque. Sit
        amet commodo nulla facilisi nullam vehicula ipsum a arcu. Elementum
        curabitur vitae nunc sed velit. Nunc vel risus commodo viverra maecenas
        accumsan lacus. Id ornare arcu odio ut sem nulla pharetra diam sit. Elit
        ut aliquam purus sit amet. Non arcu risus quis varius quam quisque id
        diam vel. Ac turpis egestas maecenas pharetra convallis. Nec nam aliquam
        sem et. Amet venenatis urna cursus eget nunc scelerisque. Est
        pellentesque elit ullamcorper dignissim. Lectus vestibulum mattis
        ullamcorper velit sed ullamcorper morbi. Tellus integer feugiat
        scelerisque varius morbi enim nunc. Duis at tellus at urna condimentum
        mattis pellentesque id nibh. Sit amet commodo nulla facilisi. Netus et
        malesuada fames ac. Placerat in egestas erat imperdiet sed. Turpis massa
        tincidunt dui ut ornare lectus. Consequat semper viverra nam libero
        justo laoreet sit amet. Tempor id eu nisl nunc mi ipsum faucibus vitae
        aliquet. Mattis aliquam faucibus purus in massa. Massa massa ultricies
        mi quis hendrerit dolor magna eget. Nisi lacus sed viverra tellus in hac
        habitasse. Eu scelerisque felis imperdiet proin fermentum leo vel orci
        porta. Arcu non odio euismod lacinia at quis risus sed. Feugiat nibh sed
        pulvinar proin. Et malesuada fames ac turpis egestas integer. Venenatis
        urna cursus eget nunc scelerisque viverra. Mattis aliquam faucibus purus
        in massa tempor nec feugiat nisl. Elit eget gravida cum sociis natoque
        penatibus et magnis dis. Placerat vestibulum lectus mauris ultrices eros
        in cursus turpis. Amet aliquam id diam maecenas ultricies mi. Varius vel
        pharetra vel turpis nunc eget lorem. Feugiat in ante metus dictum at.
        Nisi lacus sed viverra tellus in hac habitasse. Integer quis auctor elit
        sed vulputate. Dui accumsan sit amet nulla facilisi morbi tempus iaculis
        urna. Integer eget aliquet nibh praesent tristique magna. Hac habitasse
        platea dictumst quisque. Non diam phasellus vestibulum lorem sed risus
        ultricies tristique nulla. Pellentesque massa placerat duis ultricies
        lacus. Ac turpis egestas sed tempus urna et pharetra pharetra. Ac
        placerat vestibulum lectus mauris ultrices. Elementum tempus egestas sed
        sed risus pretium. Vitae sapien pellentesque habitant morbi tristique
        senectus et. Tortor pretium viverra suspendisse potenti nullam ac tortor
        vitae. Morbi tincidunt ornare massa eget egestas purus viverra. Amet
        aliquam id diam maecenas ultricies. Diam volutpat commodo sed egestas.
        Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut. Mi
        bibendum neque egestas congue quisque egestas diam in. Eu mi bibendum
        neque egestas. Lobortis scelerisque fermentum dui faucibus in ornare
        quam viverra. Pulvinar neque laoreet suspendisse interdum consectetur
        libero id faucibus.
      </p>
    </React.Fragment>
  ); //
  render() {
    return (
      <div className="about" id="history">
        <h3 id="mainDivTitleAbout">History</h3>
        <p id="historyText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo
          donec enim diam vulputate ut pharetra sit amet aliquam. Lacus laoreet
          non curabitur gravida arcu ac tortor dignissim convallis. Quis
          imperdiet massa tincidunt nunc pulvinar sapien. Lacus suspendisse
          faucibus interdum posuere lorem ipsum dolor sit. Ut tortor pretium
          viverra suspendisse potenti nullam ac tortor vitae. Non pulvinar neque
          laoreet suspendisse interdum consectetur libero id. Aliquet enim
          tortor at auctor urna nunc id cursus metus. Lectus vestibulum mattis
          ullamcorper velit sed ullamcorper. Neque ornare aenean euismod
          elementum nisi quis eleifend quam.
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
