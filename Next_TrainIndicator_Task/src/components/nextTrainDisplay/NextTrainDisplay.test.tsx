import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NextTrainDisplay from "./NextTrainDisplay";
import { useVirtualClock } from "../../hooks/useVirtualClock";

jest.mock("../../hooks/useVirtualClock", () => ({
  useVirtualClock: jest.fn(),
}));

describe("NextTrainDisplay Component", () => {
  test("renders train arrival information", () => {
    (useVirtualClock as jest.Mock).mockReturnValue("05:10 VT");

    render(<NextTrainDisplay />);
    expect(screen.getByText("Next Train Arrivals")).toBeInTheDocument();
  });

  test("displays two trains at a time", () => {
    (useVirtualClock as jest.Mock).mockReturnValue("05:10 VT");

    render(<NextTrainDisplay />);
    const trainList = screen.getAllByTestId("train-row");
    expect(trainList.length).toBeLessThanOrEqual(2);
  });

  test("displays message when no trains are available", () => {
    (useVirtualClock as jest.Mock).mockReturnValue("23:59 VT");

    render(<NextTrainDisplay />);
    expect(
      screen.getByText("No scheduled trains in the next 15 minutes")
    ).toBeInTheDocument();
  });

  test("renders train destinations correctly", () => {
    (useVirtualClock as jest.Mock).mockReturnValue("05:30 VT");

    render(<NextTrainDisplay />);
    const destinations = screen.getAllByTestId("destination");
    expect(destinations.length).toBeGreaterThan(0);
    destinations.forEach((destination: HTMLElement) => {
      expect(destination).toBeInTheDocument();
    });
  });

  test("displays correct arrival time difference", () => {
    (useVirtualClock as jest.Mock).mockReturnValue("06:00 VT");

    render(<NextTrainDisplay />);
    const arrivals = screen.getAllByTestId("arrival");
    arrivals.forEach((arrival: HTMLElement) => {
      expect(arrival).toHaveTextContent(/in \d+ mins/);
    });
  });

  test("displays the current virtual time", () => {
    (useVirtualClock as jest.Mock).mockReturnValue("07:15 VT");

    render(<NextTrainDisplay />);
    expect(screen.getByTestId("virtual-time")).toHaveTextContent(
      "Current VT: 07:15 VT"
    );
  });
});
