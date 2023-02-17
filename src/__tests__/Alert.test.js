import React from "react";
import { render, screen } from "@testing-library/react";
import Alert from "../components/Alert";

describe("Alert", () => {
  test("does not render if message is an empty string", () => {
    const { asFragment } = render(<Alert message="" />);

    expect(asFragment()).toMatchSnapshot();
  });

  test("displays error message", () => {
    const { asFragment } = render(
      <Alert message="Error - server not working, please try later." />
    );

    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });
  test("displays success message", () => {
    const { asFragment } = render(<Alert message="Success! Property Added" />);

    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText(/success/i)).toBeInTheDocument();
  });
});
