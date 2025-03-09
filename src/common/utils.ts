import { Train } from "./types";
import { trainSchedule } from "../mockData/TrainData";

// Function to get upcoming trains within the next 15 VT minutes
export const getUpcomingTrains = (currentTime: number): Train[] => {
  return (
    trainSchedule
      .filter((train) => train.arrivalTime > currentTime)
      .sort((a, b) => a.arrivalTime - b.arrivalTime)
      .slice(0, 2)
  );
};

// Function to check if there are any upcoming trains
export const hasUpcomingTrains = (currentTime: number): boolean => {
  return trainSchedule.some((train) => train.arrivalTime > currentTime);
};
