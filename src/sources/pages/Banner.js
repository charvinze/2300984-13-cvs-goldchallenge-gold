import React from 'react';
import { useNavigate } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../styles/banner.css";
import car from "../assets/car_banner.png";


function Banner() {
    const navigate = useNavigate();

    const navigateToSearchCar = () => {
        navigate('/searchcar');
    };


    return(
        <>
            <div className="d-flex flex-column flex-md-row flex-lg-row flex-xl-row justify-content-center align-items-center ctm-flex-spacing ctm-flex-spacing-md ctm-flex-spacing-lg ctm-flex-spacing-xl ctm-bg-color-1 ctm-flex-position ctm-width">
                <div>
                    <h1 className="ctm-h1-font ctm-h1-font-md ctm-h1-font-lg ctm-h1-font-xl ">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                    <p className="ctm-p-font ctm-p-font-md ctm-p-position">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan 
                        harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                    </p>
                    <button className="ctm-btn-style" onClick={navigateToSearchCar}>Mulai Sewa Mobil</button>
                </div>
                <div>
                    <img className="ctm-img-size ctm-img-size-md ctm-img-size-lg ctm-img-size-xl ctm-img-position ctm-img-position-xl" src={car}/>
                </div>
            </div>
            
        </>
            
    );
};


export default Banner;



















// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import "../styles/banner.css";
// import car from "../assets/car_banner.png";


// function Banner() {
//     return(
//         <>
//             <div className="d-flex flex-column flex-md-row flex-lg-row flex-xl-row justify-content-center align-items-center ctm-flex-spacing ctm-flex-spacing-md ctm-flex-spacing-lg ctm-flex-spacing-xl ctm-bg-color-1 ctm-flex-position">
//                 <div>
//                     <h1 className="ctm-h1-font ctm-h1-font-md ctm-h1-font-lg ctm-h1-font-xl ">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
//                     <p className="ctm-p-font ctm-p-font-md ctm-p-position">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan 
//                         harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
//                     </p>
//                     <button className="ctm-btn-style">Mulai Sewa Mobil</button>
//                 </div>
//                 <div>
//                     <img className="ctm-img-size ctm-img-size-md ctm-img-size-lg ctm-img-size-xl ctm-img-position ctm-img-position-xl" src={car}/>
//                 </div>
//             </div>
            
//         </>
            
//     );
// };


// export default Banner;