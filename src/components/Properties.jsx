import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Alert from "./Alert";
import PropertyCard from "./PropertyCard";
import Sidebar from "./Sidebar";

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

  const { search } = useLocation();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing${search}`)
      .then(({ data }) => setProperties(data))
      .catch((err) => console.log(err));
  }, [search]);

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
      <div className="sidebar">
        <Sidebar />
      </div>
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
