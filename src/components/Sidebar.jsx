import React from "react";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";

import "../styles/sidebar.css";

const Sidebar = () => {
  const { search } = useLocation();

  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || "{}"),
        ...valueObj,
      }),
    };
    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };
  return (
    <div className="sidebar">
      <Link
        to={buildQueryString("query", { city: "Leeds" })}
        className="location-link"
      >
        Leeds
      </Link>
      <Link
        to={buildQueryString("query", { city: "Liverpool" })}
        className="location-link"
      >
        Liverpool
      </Link>
      <Link
        to={buildQueryString("query", { city: "Manchester" })}
        className="location-link"
      >
        Manchester
      </Link>
      <Link
        to={buildQueryString("query", { city: "Sheffield" })}
        className="location-link"
      >
        Sheffield
      </Link>
      <div className="sorting-links">
        <Link
          to={buildQueryString("sort", { price: 1 })}
          className="price-link"
        >
          Price Ascending
        </Link>
        <Link
          to={buildQueryString("sort", { price: -1 })}
          className="price-link"
        >
          Price Descending
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
