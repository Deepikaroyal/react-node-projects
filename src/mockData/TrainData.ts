import { Train } from "../common/types";

export const trainSchedule = [
  { destination: "Central Station", frequency: 20, start: 0, end: 1440 },
  { destination: "Circular", frequency: 60, start: 0, end: 1440 },
  { destination: "North Square", frequency: 12, start: 7 * 60, end: 22 * 60 },
  { destination: "West Market", frequency: 6, start: 5.5 * 60, end: 1.5 * 60 },
];

export const getUpcomingTrains = (currentTime: number) => {
  let upcomingTrains: Train[] = [];

  trainSchedule.forEach(({ destination, frequency, start, end }) => {
    let trainTime = start;
    while (trainTime < end) {
      if (trainTime >= currentTime) {
        upcomingTrains.push({ destination, arrivalTime: trainTime });
      }
      trainTime += frequency;
    }
  });

  return upcomingTrains.sort((a, b) => a.arrivalTime - b.arrivalTime);
};
