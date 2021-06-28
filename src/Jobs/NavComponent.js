import React from "react";

export default function NavComponent() {
  return (
    <div className="audition-dropdown">
      <label htmlFor="instruments">
        <h4>Instruments:</h4>
      </label>
      <br />
      <select>
        <option /* disabled */ defaultValue value="selectInstrument">
          {" "}
          -- select instrument --{" "}
        </option>
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
        <optgroup label="-----">-----</optgroup>
        <option value="percussion">Percussion</option>
        <option value="pianoKeyboard">Piano/Keyboard</option>
        <option value="vocals">Vocals</option>
        <option value="audioEngineer">Audio Engineer</option>
      </select>
    </div>
  );
}
