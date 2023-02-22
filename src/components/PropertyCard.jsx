import React from "react";
import PropTypes from "prop-types";
import "../styles/property-card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faBed,
  faEnvelope,
  faSterlingSign,
} from "@fortawesome/free-solid-svg-icons";

const PropertyCard = ({ title, city, type, bathrooms, bedrooms, price }) => {
  return (
    <div className="property-card-container">
      <div className="property-card">
        <h2 className="property-title">{title}</h2>
        <p className="property-city">
          {city} <span className="property-type">{type}</span>
        </p>
        <p>
          <FontAwesomeIcon icon={faBath} />
          {bathrooms}
        </p>
        <p>
          <FontAwesomeIcon icon={faBed} />
          {bedrooms}
        </p>
        <p>
          <FontAwesomeIcon icon={faSterlingSign} />
          {price}
        </p>
        <div className="email" type="submit">
          <p>
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:test@email.co.uk">Send Email</a>
          </p>
        </div>
      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bathrooms: PropTypes.isRequired,
  bedrooms: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default PropertyCard;
