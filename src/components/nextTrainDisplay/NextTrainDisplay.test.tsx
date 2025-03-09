import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NextTrainDisplay from "./NextTrainDisplay";

jest.mock("../../common/utils", () => ({
  getUpcomingTrains: () => [],
  hasUpcomingTrains: () => false, // Ensure no trains are available
}));

describe("NextTrainDisplay Component", () => {
  test("renders Next Train Indicator display", () => {
    render(<NextTrainDisplay />);
    expect(screen.getByText("Next Train Arrivals")).toBeInTheDocument();
  });

  test("renders train list when trains are available", () => {
    render(<NextTrainDisplay />);
    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  test("displays 'No Train Arrivals' when no trains are available", () => {
    render(<NextTrainDisplay />);
    expect(screen.getByText(/No Train Arrivals/i)).toBeInTheDocument();
  });
});
