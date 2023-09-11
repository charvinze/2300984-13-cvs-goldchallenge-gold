import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../styles/whyus.css";
import completeimg from "../assets/icon_complete_yellow.png";
import priceimg from "../assets/icon_price_pink.png";
import clockimg from "../assets/icon_clock_blue.png";
import profesionalimg from "../assets/icon_professional_green.png";


const WhyUs = () => {
    return(
        <>
            <div id="why-us" className="d-flex flex-column justify-content-center align-items-center wyu-flex1-space">
                <div style={{marginBottom: "20px", fontSize:""}}>
                    <h4 className="wyu-font-bold-1">
                            Why Us?
                    </h4>
                </div>
                <div>
                    <p className="wyu-font-bold-1">Mengapa harus pilih Binar Car Rental?</p>
                </div>
            </div>
            <div className="d-flex flex-column flex-lg-row flex-xl-row justify-content-center align-items-center">
                
                <div class="card text-bg-white mb-3 ms-md-2 ms-lg-2 ms-xl-2 me-md-2 me-lg-2 me-xl-2" style={{maxWidth: "18rem", backgroundColor: "white"}}>
                    <div class="card-header" style={{backgroundColor: "white", borderStyle: "none"}}><img src={completeimg} /></div>
                    <div class="card-body">
                        <h5 class="card-title">Mobil Lengkap</h5>
                        <p class="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                    </div>
                </div>
                <div class="card text-bg-white mb-3 ms-md-2 ms-lg-2 ms-xl-2 me-md-2 me-lg-2 me-xl-2" style={{maxWidth: "18rem", backgroundColor: "white"}}>
                    <div class="card-header" style={{backgroundColor: "white", borderStyle: "none"}}><img src={priceimg} /></div>
                    <div class="card-body">
                        <h5 class="card-title">Harga Murah</h5>
                        <p class="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain.</p>
                    </div>
                </div>
                <div class="card text-bg-white mb-3 ms-md-2 ms-lg-2 ms-xl-2 me-md-2 me-lg-2 me-xl-2" style={{maxWidth: "18rem", backgroundColor: "white"}}>
                    <div class="card-header" style={{backgroundColor: "white", borderStyle: "none"}}><img src={clockimg} /></div>
                    <div class="card-body">
                        <h5 class="card-title">Layanan 24 Jam</h5>
                        <p class="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu.</p>
                    </div>
                </div>
                <div class="card text-bg-white mb-3 ms-md-2 ms-lg-2 ms-xl-2 me-md-2 me-lg-2 me-xl-2" style={{maxWidth: "18rem", backgroundColor: "white"}}>
                    <div class="card-header" style={{backgroundColor: "white", borderStyle: "none"}}><img src={profesionalimg} /></div>
                    <div class="card-body">
                        <h5 class="card-title">Sopir Profesional</h5>
                        <p class="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyUs;