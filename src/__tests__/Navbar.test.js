import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../components/Navbar";

describe("Navbar", () => {
  test("renders the logo image", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const logoImage = screen.getByAltText("surreal estate logo");
    expect(logoImage).toBeInTheDocument();
  });
  it('renders the heading "Surreal Estate"', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const heading = screen.getByText("Surreal Estate");
    expect(heading).toBeInTheDocument();
  });

  it("renders two navigation links", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(2);
    expect(links[0]).toHaveTextContent("View Properties");
    expect(links[1]).toHaveTextContent("Add Properties");
  });
});
