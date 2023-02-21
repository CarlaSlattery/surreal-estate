import React from "react";
import { render, screen } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

const props = {
  property: {
    title: "2 bed period property",
    city: "Manchester",
    type: "flat",
    bathrooms: "1",
    bedrooms: "2",
    price: "130000",
  },
};

const renderCard = () => render(<PropertyCard {...props} />);

describe("PropertyCard", () => {
  test("renders correctly", () => {
    const { asFragment } = renderCard;

    expect(asFragment).toMatchSnapshot();
  });

  test("renders the title prop", () => {
    renderCard();

    expect(screen.getByText([props.property.title])).toBeInTheDocument();
  });

  test("renders the city prop", () => {
    renderCard();

    expect(screen.getByText([props.property.city])).toBeInTheDocument();
  });

  test("renders the type prop", () => {
    renderCard();

    expect(screen.getByText([props.property.type])).toBeInTheDocument();
  });

  test("renders the bathrooms prop", () => {
    renderCard();

    expect(screen.getByText([props.property.bathrooms])).toBeInTheDocument();
  });

  test("renders the bedrooms prop", () => {
    renderCard();

    expect(screen.getByText([props.property.bedrooms])).toBeInTheDocument();
  });

  test("renders the price prop", () => {
    renderCard();

    expect(screen.getByText([props.property.price])).toBeInTheDocument();
  });
});
