import React from "react";
import { Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBath } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import PropertyCard from "./PropertyCard";

library.add(faBath);

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Properties />} />
        <Route path="/add" element={<AddProperty />} />
      </Routes>
      <AddProperty />
      <PropertyCard />
    </div>
  );
};

export default App;
