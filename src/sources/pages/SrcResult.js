import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../styles/srcresult.css";
import car1 from "../assets/car1.png";

const SrcResult = () => {
    let text1 = "Tidak termasuk biaya makan sopir Rp. 75.000/hari";
    let text2 = "Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp. 20.000/jam";
    let text3 = "Tidak termasuk akomodasi penginapan";
    let array1 = [text1, text2, text3];

    return(
        <>
            <div className="d-flex justify-content-center align-items-center ">
                <div className="d-flex flex-column border border-1">
                    <div className="justify-content-start align-items-start">
                        <h6>Pencarianmu1</h6>
                    </div>
                    <div className="d-flex flex-column flex-md-row flex-lg-row flex-xl-row gap-3" >
                        <div className="d-md-flex d-lg-flex d-xl-flex flex-md-column flex-lg-column flex-xl-column">
                            <div><label className="srcr-font-style-3" for="nama_mbl">Nama Mobil</label></div>
                            <div><input id="nama_mbl" className="srcr-text-width" type="text" value="" style={{backgroundColor: "grey", borderStyle: "none"}} readOnly /></div>
                        </div>
                        <div className="d-md-flex d-lg-flex d-xl-flex flex-md-column flex-lg-column flex-xl-column">
                            <div><label className="srcr-font-style-3" for="kategori_mbl">Kategori</label></div>
                            <div><input id="kategori_mbl" className="srcr-text-width" type="text" value="" style={{backgroundColor: "grey", borderStyle: "none"}} readOnly /></div>
                        </div>
                        <div className="d-md-flex d-lg-flex d-xl-flex flex-md-column flex-lg-column flex-xl-column">
                            <div><label className="srcr-font-style-3" for="harga_mbl">Harga Sewa per Hari </label></div>
                            <div><input id="harga_mbl" className="srcr-text-width" type="text" value="" style={{backgroundColor: "grey", borderStyle: "none"}} readOnly /></div>
                        </div>
                        <div className="d-md-flex d-lg-flex d-xl-flex flex-md-column flex-lg-column flex-xl-column">
                            <div><label className="srcr-font-style-3" for="status_mbl">Status</label></div>
                            <div><input id="status_mbl" className="srcr-text-width" type="text" value="" style={{backgroundColor: "grey", borderStyle: "none"}} readOnly /></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex flex-column flex-md-row flex-lg-row flex-xl-row justify-content-center align-items-center mt-5 srcr-flex-gap">
                <div className="d-flex flex-column">
                    <div>
                        <h6>Tentang Paket</h6>
                    </div>
                    <div>
                        <h6>Include</h6>
                    </div>
                    <div>
                        <ul className="srcr-font-style-2">
                            <li>Apa saja yang termasuk dalam paket misal max durasi 12 jam</li>
                            <li>Sudah termasuk bensin selama 12 jam</li>
                            <li>Sudah termasuk Tiket Wisata</li>
                            <li>Sudah termasuk pajak</li>
                        </ul>
                    </div>
                    <div>
                        <h6>Exclude</h6>
                    </div>
                    <div>
                        <ul className="srcr-font-style-2">
                            {
                                array1.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <h6>Refund, Reschedule, Overtime</h6>
                    </div>
                    <div>
                        <ul className="srcr-font-style-2">
                            {
                                Array(3).fill().map((_, outerIndex) => (
                                    array1.map((item, innerIndex) =>(
                                        <li key={`$outerIndex - $innerIndex`}>{item}</li>
                                    ))
                                ))
                            }
                        </ul>
                    </div>

                </div>
                <div>
                <div className="card srcs-padding-1" >
                    <img className="" src={car1} class="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-title fw-bold">Innova</p>
                        <p id="kapasitas" className="card-text srcr-font-style-1">6 - 8 Orang</p>
                        <div className="d-flex flex-row">
                            <div className="justify-content-start align-items-end fw-bold w-100 ">
                                <p>Total</p>
                            </div>
                            <div className="justify-content-end align-items-end w-100 fw-bold ">
                                <p>Rp. 500.000</p>
                            </div>

                        </div>
                        
                    </div>
                    </div>
                </div>
            </div>
        
        </>
    );
};

export default SrcResult;