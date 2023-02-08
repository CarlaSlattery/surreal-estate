import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/surreal estate/i);
  expect(headingElement).toBeInTheDocument();
});
