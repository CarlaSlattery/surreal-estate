import React from "react";

import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={Properties} />
        <Route path="/add" element={AddProperty} />
      </Routes>
      <AddProperty />
    </div>
  );
};

export default App;
