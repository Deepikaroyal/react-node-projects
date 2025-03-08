import React from "react";
import { useEffect, useState } from "react";
import { trainSchedule } from "./TrainData";

interface Train {
  id: number;
  destination: string;
  arrivalTime: number;
}

const NextTrainDisplay: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [visibleTrains, setVisibleTrains] = useState<Train[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const upcomingTrain = trainSchedule
  .filter((train) => train.arrivalTime > currentTime) 
  .slice(0, 2);

    setVisibleTrains(upcomingTrain);
  }, [currentTime]);

  return (
    <div className="train-display">
      <h2>Next Train Arrivals</h2>
      {visibleTrains.length === 0 ? (
        <p>No Train Arrivals</p>
      ) : (
        <ul>
          {visibleTrains.map((train) => (
            <li key={train.id}>
              Train to <strong>{train.destination}</strong> arriving in{" "}
              <strong>{train.arrivalTime - currentTime}</strong> minutes
            </li>
          ))}
        </ul>
      )}
      NextTrainDisplay
    </div>
  );
};
export default NextTrainDisplay;
