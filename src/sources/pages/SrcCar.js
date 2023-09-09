import React from 'react';
import Navbar from "../pages/Navbar";
import Banner2 from "../pages/Banner2";
import ModalSrcCar from "../pages/ModalSrc";
import ModalSrcResult from './ModalSrcResult';
import Footer from "../pages/Footer";


const ScrCar = () => {
    return(
        <>
            <Navbar />
            <Banner2 />
            <ModalSrcResult />
            <Footer />
        </>
    );
};


export default ScrCar;