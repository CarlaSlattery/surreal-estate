import React, { useState, useEffect } from "react";
import axios from "axios";

import Alert from "./Alert";
import PropertyCard from "./PropertyCard";

import "../styles/properties.css";

const Properties = () => {
  const initialState = {
    properties: [],
    alert: {
      message: "",
    },
  };

  const [properties, setProperties] = useState(initialState.properties);
  const [alert, setAlert] = useState(initialState.alert);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/PropertyListing/")
      .then((res) => {
        setProperties(res.data);
        setAlert({
          message: "",
        });
      })
      .catch(() => {
        setAlert({
          message: "Server error - please try later",
        });
      });
  }, []);

  return (
    <div className="properties-container">
      <div className="property-cards">
        <Alert className="alert" message={alert.message} />
        {properties.map((property) => (
          <div className="item" key={property._id}>
            <PropertyCard {...property} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
