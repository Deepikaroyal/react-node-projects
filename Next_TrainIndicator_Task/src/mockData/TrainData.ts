import { Train } from "../common/types";

export const trainSchedule = [
  {
    id: "Central Station",
    destination: "Central Station",
    frequency: 20,
    start: 0,
    end: 1440,
  },
  {
    id: "Circular",
    destination: "Circular",
    frequency: 60,
    start: 0,
    end: 1440,
  },
  {
    id: "North Square",
    destination: "North Square",
    frequency: 12,
    start: 7 * 60,
    end: 22 * 60,
  },
  {
    id: "West Market",
    destination: "West Market",
    frequency: 6,
    start: 5.5 * 60,
    end: 1.5 * 60,
  },
];

export const getUpcomingTrains = (currentTime: number) => {
  let upcomingTrains: Train[] = [];

  trainSchedule.forEach(({ id, destination, frequency, start, end }) => {
    let trainTime = start;

    while (trainTime < end || (end < start && trainTime < end + 1440)) {
      const adjustedTrainTime = trainTime % 1440;

      if (
        (start < end && adjustedTrainTime >= currentTime) ||
        (start > end && (adjustedTrainTime >= currentTime || trainTime < end))
      ) {
        upcomingTrains.push({
          id,
          destination,
          arrivalTime: adjustedTrainTime,
        });
      }

      trainTime += frequency;
    }
  });

  return upcomingTrains.sort((a, b) => a.arrivalTime - b.arrivalTime);
};
