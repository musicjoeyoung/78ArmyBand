import React, { useState } from "react";
import Calendar from "react-calendar";

function JobCalendar() {
  const [value, onChange] = useState(new Date());
  return (
    <Calendar
      onChange={onChange}
      value={value}
      calendarType="US"
      onClickDay={(value, event) => console.log(`Clicked day: ${value}`)}
    />
  );
}
export default JobCalendar;