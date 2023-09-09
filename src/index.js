import React from 'react';
import ReactDOM from "react-dom/client";
import Navbar from './sources/pages/Navbar';
import OurService from "./sources/pages/OurService";
import WhyUs from "./sources/pages/WhyUs";
import Testimonial from './sources/pages/Testimonial';
import SmallBanner from './sources/pages/SmallBanner';
import Faq from './sources/pages/Faq';
import Footer from './sources/pages/Footer';
import ModalSrc from './sources/pages/ModalSrc';
import ScrCar from './sources/pages/SrcCar';
import LandingPage from './sources/pages/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Banner from './sources/pages/Banner';
import Navbar2 from './sources/pages/Navbar2';
// import "./sources/styles/lp_style.css";
// import logo_img from "./sources/assets/logo.png";
// import btn_toggle from "./sources/assets/btn_toggle.png";
// import { Navbar, Nav, NavDropdown, Button, Form, FormControl } from 'react-bootstrap';

function App1() {
  return (
      <>
          <Navbar2 />
          
       
      </>    
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App1 />);
