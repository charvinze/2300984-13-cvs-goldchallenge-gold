import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useNavigate } from "react-router-dom";
import "../styles/smallbanner.css";

const SmallBanner = () => {
    const navigate = useNavigate();

    const navigateToSearchCar = () => {
        navigate('/searchcar');
    };

    return(
        <>
            <div className="d-flex flex-row justify-content-center align-items-center">
                
                <div className="card mb-3 pt-4 pb-5 ps-5 pe-5  sbr-maxwidth sbr-padding" style={{backgroundColor: "#0D28A6", color: "white"}}>
                    <div className="card-header" style={{backgroundColor: "#0D28A6", borderStyle: "none"}}></div>
                    <div className="card-body text-center align-items-center">
                        <h5 className="pb-3" >Sewa Mobil di (Lokasimu) Sekarang</h5>
                        <p className="card-text pb-3" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button className="sbr-btn-style" onClick={navigateToSearchCar}>Mulai Sewa Mobil</button>
                    </div>
                </div>
                
            </div>

        </>
    );
};

export default SmallBanner;