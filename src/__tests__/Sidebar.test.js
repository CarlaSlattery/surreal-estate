import React from "react";
import { render, screen } from "@testing-library/react";
import Sidebar from "../components/Sidebar";

describe("Sidebar", () => {
  test("renders in app", () => {
    render(<Sidebar />);
  });
});
