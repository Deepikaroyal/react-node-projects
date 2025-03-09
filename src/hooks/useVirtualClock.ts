import { useState, useEffect } from "react";

export const useVirtualClock = (startMinutes: number) => {
  const [virtualTime, setVirtualTime] = useState(startMinutes);

  useEffect(() => {
    const interval = setInterval(() => {
      setVirtualTime((prevTime) => (prevTime + 1) % (24 * 60));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${String(hours).padStart(2, "0")}:${String(mins).padStart(
      2,
      "0"
    )} VT`;
  };

  return formatTime(virtualTime);
};
