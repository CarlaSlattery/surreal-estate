import React, { useState } from "react";
import postProperty from "../requests/postRequests";
import Alert from "./Alert";
import "../styles/add-property.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "",
      bathrooms: 0,
      bedrooms: 0,
      price: 0,
      email: "",
    },
    alert: {
      message: "",
      success: false,
    },
  };
  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = (event) => {
    event.preventDefault();
    postProperty(fields, setAlert);
    setAlert({ message: "", success: false });
  };

  const handleFieldChange = (event) => {
    event.preventDefault();
    setFields({ ...fields, [event.target.name]: event.target.value });
  };
  return (
    <div className="add-property">
      <h2>Add Property</h2>
      <Alert message={alert.message} success={alert.success} />
      <form onSubmit={handleAddProperty}>
        <label htmlFor="title">
          Search:
          <input
            id="title"
            name="title"
            value={fields.title}
            placeholder="description"
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="city">
          Location:
          <select
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
          >
            <option value="Manchester">Manchester</option>
            <option value="Liverpool">Liverpool</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
          </select>
        </label>
        <label htmlFor="type">
          Type of property:
          <select
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
          >
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>
        <label htmlFor="bedrooms">
          Min. bedrooms:
          <input
            id="bedrooms"
            name="bedrooms"
            value={fields.bedrooms}
            placeholder="bedrooms"
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="bathrooms">
          Min. bathrooms:
          <input
            id="bathrooms"
            name="bathrooms"
            value={fields.bathrooms}
            placeholder="bathrooms"
            onChange={handleFieldChange}
          />
        </label>

        <label htmlFor="price">
          Min. Price:
          <input
            id="price"
            name="price"
            value={fields.price}
            placeholder="price"
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            name="email"
            type="email"
            value={fields.email}
            placeholder="email"
            onChange={handleFieldChange}
          />
        </label>

        <button className="add-button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
