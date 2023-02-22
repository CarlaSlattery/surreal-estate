import React from "react";
import { Link } from "react-router-dom";

import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to={`/?query={"city": "Leeds"}`} className="location-link">
        Leeds
      </Link>
      <Link to={`/?query={"city": "Liverpool"}`} className="location-link">
        Liverpool
      </Link>
      <Link to={`/?query={"city": "Manchester"}`} className="location-link">
        Manchester
      </Link>
      <Link to={`/?query={"city": "Sheffield"}`} className="location-link">
        Sheffield
      </Link>
    </div>
  );
};

export default Sidebar;
