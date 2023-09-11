import React from 'react';
import ReactDOM from "react-dom/client";
import Navbar from './Navbar';
import OurService from "./OurService";
import WhyUs from "./WhyUs";
import Testimonial from './Testimonial';
import SmallBanner from './SmallBanner';
import Faq from './Faq';
import Footer from './Footer';
import ScrCar from './SrcCar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Banner from './Banner';


const LandingPage = () => {
    return(
        <>
            <Navbar />
            <Banner />
            <OurService />
            <WhyUs />
            <Testimonial />
            <SmallBanner />
            <Faq />
            <Footer />
        </>
    );
};


export default LandingPage;