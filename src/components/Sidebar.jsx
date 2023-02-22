import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import qs from "qs";

import "../styles/sidebar.css";

const Sidebar = () => {
  const { search } = useLocation();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

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

  const handleSearch = (event) => {
    event.preventDefault();
    const newQueryString = buildQueryString("query", {
      title: { $regex: query },
    });
    navigate(newQueryString);
  };

  return (
    <div className="sidebar">
      <div className="search">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
      </div>
      <h3 className="sidebar-header">Filter by city</h3>
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
        <h3 className="sidebar-header">Sort by</h3>
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
