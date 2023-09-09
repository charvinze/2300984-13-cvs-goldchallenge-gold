import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../styles/srcresult.css";

const SrcResult = () => {
    let text1 = "Tidak termasuk biaya makan sopir Rp. 75.000/hari";
    let text2 = "Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp. 20.000/jam";
    let text3 = "Tidak termasuk akomodasi penginapan";
    let array1 = [text1, text2, text3];

    return(
        <>
            <div className="d-flex justify-content-center align-items-center">
                <div className="d-flex flex-column">
                    <div className="justify-content-start align-items-start">
                        <h6>Pencarianmu1</h6>
                    </div>
                    <div className="d-flex flex-column flex-md-row flex-lg-row flex-xl-row gap-3" >
                        <div className="d-md-flex d-lg-flex d-xl-flex flex-md-column flex-lg-column flex-xl-column">
                            <div><label for="nama_mbl">Nama Mobil</label></div>
                            <div><input id="nama_mbl" type="text" value="Mobil1" readOnly /></div>
                        </div>
                        <div className="d-md-flex d-lg-flex d-xl-flex flex-md-column flex-lg-column flex-xl-column">
                            <div><label for="kategori_mbl">Nama Mobil</label></div>
                            <div><input id="kategori_mbl" type="text" value="Mobil1" readOnly /></div>
                        </div>
                        <div className="d-md-flex d-lg-flex d-xl-flex flex-md-column flex-lg-column flex-xl-column">
                            <div><label for="harga_mbl">Nama Mobil</label></div>
                            <div><input id="harga_mbl" type="text" value="Mobil1" readOnly /></div>
                        </div>
                        <div className="d-md-flex d-lg-flex d-xl-flex flex-md-column flex-lg-column flex-xl-column">
                            <div><label for="status_mbl">Nama Mobil</label></div>
                            <div><input id="status_mbl" type="text" value="Mobil1" readOnly /></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex flex-column flex-md-row flex-lg-row flex-xl-row justify-content-center align-items-center">
                <div className="d-flex flex-column">
                    <div>
                        <h6>Tentang Paket</h6>
                    </div>
                    <div>
                        <h6>Include</h6>
                    </div>
                    <div>
                        <ul>
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
                        <ul>
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
                        <ul>
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
                <div className="card" style={{width: "18rem"}}>
                    <img src="..." class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        
                    </div>
                    </div>
                </div>
            </div>
        
        </>
    );
};

export default SrcResult;