import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../styles/ourservice.css";
import serviceimg from "../assets/img_service (1).png"

 const OurService = () => {
        return(
            <>
                <div className="d-flex flex-column flex-md-row flex-lg-row flex-xl-row os-flex-space justify-content-center align-items-center">
                    <div >
                        <img className="os-img-size" src={serviceimg} alt="Our Service Picture" />
                    </div>
                    <div className="">
                        <h4 className="os-font-bold-1">Best Car Rental for any kind of trip in (Lokasimu)!</h4>
                        <p className="os-font-bold-1 os-font-style-1">Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah 
                            dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata,
                            bisnis, wedding, meeting, dll. 
                        </p>
                        <ul className="os-list-space os-list-style os-font-bold-1">
                            <li>Sewa Mobil dengan Supir di Bali 12 Jam</li>
                            <li>Sewa Mobil Lepas Kunci di Bali 23 Jam</li>
                            <li>Sewa Mobil Jangka Panjang Bulanan</li>
                            <li>Gratis Antar - Jemput Mobil di Bandara</li>
                            <li>Layanan Airport Transfer/Drop In Out</li>
                        </ul>
                    </div>
                </div>
            </>
        );
};


export default OurService;