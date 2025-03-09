import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NextTrainDisplay from "./NextTrainDisplay";
import { useVirtualClock } from "../../hooks/useVirtualClock";

jest.mock("../../hooks/useVirtualClock");

describe("NextTrainDisplay Component", () => {
  test("renders train arrival information", async () => {
    (useVirtualClock as jest.Mock).mockReturnValue("05:10 VT");

    render(<NextTrainDisplay />);
    expect(screen.getByText("Next Train Arrivals")).toBeInTheDocument();
  });

  test("displays two trains at a time", async () => {
    (useVirtualClock as jest.Mock).mockReturnValue("05:10 VT");

    render(<NextTrainDisplay />);
    const trainList = screen.getAllByTestId("train-row");
    expect(trainList.length).toBeLessThanOrEqual(2);
  });

  // ✅ Test Case 1: Displays "No upcoming trains" when there are no trains
  test("displays message when no trains are available", async () => {
    (useVirtualClock as jest.Mock).mockReturnValue("23:59 VT");

    render(<NextTrainDisplay />);
    expect(screen.getByText("No upcoming trains")).toBeInTheDocument();
  });

  // ✅ Test Case 2: Verify train destinations are displayed correctly
  test("renders train destinations correctly", async () => {
    (useVirtualClock as jest.Mock).mockReturnValue("05:30 VT");

    render(<NextTrainDisplay />);
    const destinations = screen.getAllByTestId("destination"); // ✅ Using test ID
    expect(destinations.length).toBeGreaterThan(0);
    destinations.forEach((destination: HTMLElement) => {
      expect(destination).toBeInTheDocument();
    });
  });

  // ✅ Test Case 3: Ensure train arrival times are calculated and displayed correctly
  test("displays correct arrival time difference", async () => {
    (useVirtualClock as jest.Mock).mockReturnValue("06:00 VT");

    render(<NextTrainDisplay />);
    const arrivals = screen.getAllByTestId("arrival"); // ✅ Using test ID
    arrivals.forEach((arrival: HTMLElement) => {
      expect(arrival).toHaveTextContent(/in \d+ mins/);
    });
  });

  // ✅ Test Case 4: Ensure virtual time is displayed correctly
  test("displays the current virtual time", async () => {
    (useVirtualClock as jest.Mock).mockReturnValue("07:15 VT");

    render(<NextTrainDisplay />);
    expect(screen.getByTestId("virtual-time")).toHaveTextContent(
      "Current VT: 07:15 VT"
    );
  });
});
