import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import ReactDOM from "react-dom/client";
import Navbar from './sources/pages/Navbar';
import OurService from "./sources/pages/OurService";
import WhyUs from "./sources/pages/WhyUs";
import Testimonial from './sources/pages/Testimonial';
import Faq from './sources/pages/Faq';
import Footer from './sources/pages/Footer';
import ScrCar from './sources/pages/SrcCar';
import LandingPage from './sources/pages/LandingPage';
import Banner from './sources/pages/Banner';
import Navbar2 from './sources/pages/Navbar2';
import SrcResult from './sources/pages/SrcResult';
import SrcResultPage from './sources/pages/SrcResultPage';
import SearchResult from './sources/pages/SearchResult';
import ModalSrcResult from './sources/pages/ModalSrcResult';
import SearchResultPage from './sources/pages/SearchResultPage';
import Landing from './sources/pages/index';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/index';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppRouter />);
