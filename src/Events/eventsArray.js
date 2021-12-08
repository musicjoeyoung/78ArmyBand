export const events = [
  {
    name: "Holiday Concert",
    date: new Date("12/03/2021"),
    ensemble: "Concert Band",
    location: "Valley Forge Military Academy",
    cityState: "Wayne, PA",
    time: "12:00PM",
  },

  {
    name: "Philadelphia Winter Parade",
    date: new Date("12/04/2021"),
    ensemble: "Ceremonial Band",
    location: "Philadelphia",
    cityState: "Philadelphia, PA",
    time: "5:00PM",
  },
  {
    name: "NJMEA",
    date: new Date("01/24/2022"),
    ensemble: "Jazz Band",
    location: "NJMEA",
    cityState: "New Jersey",
    time: "01:00PM",
  },
  {
    name: "NJMEA",
    date: new Date("01/25/2022"),
    ensemble: "Jazz Band",
    location: "NJMEA",
    cityState: "New Jersey",
    time: "01:00PM",
  },
  {
    name: "NJMEA",
    date: new Date("01/26/2022"),
    ensemble: "Jazz Band",
    location: "NJMEA",
    cityState: "New Jersey",
    time: "12:00PM",
  },
];

let today = new Date();
export const currentOrUpcomingEvents = [];
export const pastEvents = [];

for (let event of events) {
  event.day = event.date.getUTCDate().toString();
  event.month = event.date.toLocaleString("en-us", { month: "short" });
  if (event.date > today) {
    currentOrUpcomingEvents.push(event);
  } else if (event.date.toDateString() === today.toDateString()) {
    currentOrUpcomingEvents.push(event);
  } else {
    pastEvents.push(event);
  }
}
//console.log("currentOrUpcomingEvents", currentOrUpcomingEvents);
