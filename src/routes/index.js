import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../sources/pages/LandingPage"; 
import SearchResultPage from "../sources/pages/SearchResultPage";
import ScrCar from "../sources/pages/SrcCar";
import SrcResultPage from "../sources/pages/SrcResultPage";
import Navbar from "../sources/pages/Navbar";
import Banner from "../sources/pages/Banner";
import SmallBanner from "../sources/pages/SmallBanner";


function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/searchcar" element={<ScrCar />} />
        <Route path="/searchcarresult" element={<SearchResultPage />} />
        <Route path="/carresultdetail" element={<SrcResultPage />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;







// // const routes = [{
// //     path: "",
// //     element: <Navigate to="/landing" />
// // },
// // {
// //     path: "/landing",
// //     element: <Landing />
// // }
// // ];


// // export { routes };