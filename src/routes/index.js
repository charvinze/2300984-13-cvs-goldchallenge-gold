import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../sources/pages/LandingPage"; 
import ScrCar from "../sources/pages/SrcCar";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/searchcar" element={<ScrCar />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;







// const routes = [{
//     path: "",
//     element: <Navigate to="/landing" />
// },
// {
//     path: "/landing",
//     element: <Landing />
// }
// ];


// export { routes };