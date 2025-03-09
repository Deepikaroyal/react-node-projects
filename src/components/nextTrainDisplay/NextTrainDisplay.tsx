import React, { useEffect, useState } from "react";
import { useVirtualClock } from "../../hooks/useVirtualClock";
import { getUpcomingTrains } from "../../mockData/TrainData";
import { Train } from "../../common/types";
import "./nextTrainIndicator.css";

const NextTrainDisplay: React.FC = () => {
  const virtualTime = useVirtualClock(5 * 60); // Starts at 05:00 VT
  const [visibleTrains, setVisibleTrains] = useState<Train[]>([]);

  useEffect(() => {
    const updateTrains = () => {
      const currentMinutes =
        parseInt(virtualTime?.split(":")[0]) * 60 +
        parseInt(virtualTime?.split(":")[1]);
      setVisibleTrains(getUpcomingTrains(currentMinutes)?.slice(0, 2));
    };

    updateTrains();
    const interval = setInterval(updateTrains, 1000);
    return () => clearInterval(interval);
  }, [virtualTime]);

  return (
    <div className="mainContainer">
      <div className="train-display">
        <h2>Next Train Arrivals</h2>
        <div className="train-list">
          {visibleTrains.length > 0 ? (
            visibleTrains.map((train, index) => (
              <div key={index} className="train-row" data-testid="train-row">
                <span className="destination" data-testid="destination">
                  {train.destination}
                </span>
                <span className="arrival" data-testid="arrival">
                  in{" "}
                  {train.arrivalTime -
                    parseInt(virtualTime.split(":")[0]) * 60 -
                    parseInt(virtualTime.split(":")[1])}{" "}
                  mins
                </span>
              </div>
            ))
          ) : (
            <p>No upcoming trains</p>
          )}
        </div>
        <div className="virtual-time" data-testid="virtual-time">
          Current VT: {virtualTime}
        </div>
      </div>
    </div>
  );
};

export default NextTrainDisplay;
