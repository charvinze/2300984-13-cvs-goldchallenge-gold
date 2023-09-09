import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../styles/banner2.css";
import car from "../assets/car_banner.png";


function Banner() {
    return(
        <>
            <div className="d-flex flex-column flex-md-row flex-lg-row flex-xl-row justify-content-center align-items-center bnr-flex-spacing bnr-flex-spacing-md bnr-flex-spacing-lg bnr-flex-spacing-xl bnr-bg-color-1 bnr-flex-position">
                <div>
                    <h1 className="bnr-h1-font bnr-h1-font-md bnr-h1-font-lg bnr-h1-font-xl ">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                    <p className="bnr-p-font bnr-p-font-md bnr-p-position">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan 
                        harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                    </p>
                    
                </div>
                <div>
                    <img className="bnr-img-size bnr-img-size-md bnr-img-size-lg bnr-img-size-xl bnr-img-position bnr-img-position-xl" src={car}/>
                </div>
            </div>
            
        </>
            
    );
};


export default Banner;