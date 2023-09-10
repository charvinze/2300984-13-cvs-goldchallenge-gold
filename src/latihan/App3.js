import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./App1"; 
import CarRental from "./App2";

function App3() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrental" element={<CarRental />} />
      </Routes>
    </Router>
  );
}

export default App3;
