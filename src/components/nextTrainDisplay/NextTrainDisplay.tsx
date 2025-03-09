import React, { useEffect, useState } from "react";
import { Train } from "../../common/types";
import { getUpcomingTrains, hasUpcomingTrains } from "../../common/utils";
import trainImage from "../assets/modern-train-station.jpg";
import "./nextTrainIndicator.css";

const NextTrainDisplay: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [visibleTrains, setVisibleTrains] = useState<Train[]>([]);

  useEffect(() => {
    if (!hasUpcomingTrains(currentTime)) {
      console.log("No more trains. Stopping time updates.");
      return;
    }

    const interval = setInterval(() => {
      setCurrentTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [currentTime]);

  useEffect(() => {
    setVisibleTrains(getUpcomingTrains(currentTime));
  }, [currentTime]);

  return (
    <div className="train-container">
      <div className="train-display">
        <h2>Next Train Arrivals</h2>
        {visibleTrains.length === 0 ? (
          <p>No Train Arrivals</p>
        ) : (
          <ul>
            {visibleTrains.map((train) => {
              const timeLeft = train.arrivalTime - currentTime;
              return (
                <li
                  key={train.id}
                  style={{ color: timeLeft <= 2 ? "red" : "inherit" }}
                >
                  Train to <strong>{train.destination}</strong> arriving in{" "}
                  <strong>{timeLeft}</strong> minutes
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NextTrainDisplay;
