import React from "react";
import { render, screen } from "@testing-library/react";
import AddProperty from "../components/AddProperty";

describe("AddProperty", () => {
  test("renders heading element", () => {
    render(<AddProperty />);

    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
  test("renders input field for property title", () => {
    render(<AddProperty />);

    expect(screen.getByPlaceholderText("description")).toBeInTheDocument();
  });
  test("Location displays the correct number of city options", () => {
    render(<AddProperty />);

    const locationOptions = screen.getByLabelText(/location:/i);
    expect(locationOptions).toHaveLength(4);
  });
  test("it allows user to change location", () => {
    render(<AddProperty />);
  });
  test("renders the email input correctly", () => {
    render(<AddProperty />);

    const emailInput = screen.getByLabelText("Email:");
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute("type", "email");
    expect(emailInput).toHaveAttribute("placeholder", "email");
  });
});
