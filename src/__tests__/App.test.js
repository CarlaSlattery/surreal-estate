import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../components/App";

describe("App", () => {
  it("renders app component correctly", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
