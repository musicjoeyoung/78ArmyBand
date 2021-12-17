export const events = [
  {
    id: 1,
    name: "Holiday Concert",
    date: new Date("12/03/2021"),
    ensemble: "Concert Band",
    location: "Valley Forge Military Academy",
    cityState: "Wayne, PA",
    time: "12:00PM",
    bio: "Test bio # 1",
  },

  {
    id: 2,
    name: "Philadelphia Winter Parade",
    date: new Date("12/04/2021"),
    ensemble: "Ceremonial Band",
    location: "Philadelphia",
    cityState: "Philadelphia, PA",
    time: "5:00PM",
    bio: "Test bio # 2",
  },
  {
    id: 3,
    name: "NJMEA - 1",
    date: new Date("01/24/2022"),
    ensemble: "Jazz Band",
    location: "NJMEA",
    cityState: "New Jersey",
    time: "01:00PM",
    bio: "Test bio # 3",
  },
  {
    id: 4,
    name: "NJMEA - 2",
    date: new Date("01/25/2022"),
    ensemble: "Jazz Band",
    location: "NJMEA",
    cityState: "New Jersey",
    time: "01:00PM",
    bio: "Test bio # 4",
  },
  {
    id: 5,
    name: "NJMEA - 3",
    date: new Date("01/26/2022"),
    ensemble: "Jazz Band",
    location: "NJMEA",
    cityState: "New Jersey",
    time: "12:00PM",
    bio: "Test bio # 5",
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
