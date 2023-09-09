import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../styles/modalsrcresult.css";

const ModalSrcResult = () => {
    return(
        <>
           <div className="d-flex msc-positioned justify-content-center align-items-center ">
                <div className="d-flex flex-column flex-md-row flex-lg-row flex-xl-row bg-white gap-3 border border-secondary rounded justify-content-center align-items-center msc-w msc-position msc-spacing">
                    <div className="d-flex flex-column">
                        <label className="msc-fs-2" for="nama-mbl">Nama Mobil</label>
                        <input id="nama-mbl" className="form-control msc-txt-size " type="text" />
                    </div>
                    <div className="d-flex flex-column">
                        <label className="msc-fs-2" for="capacity">Kategori</label>
                        <select className="form-select msc-fs-1" name="capacity" id="capacity">
                            <option disabled selected>Masukan Kapasitas Mobil</option>
                            <option value="1_5">1 - 5 Orang</option>
                            <option value="6_8">6 - 8 Orang</option>
                        </select>
                    </div>
                    <div className="d-flex flex-column ">
                    <label className="msc-fs-2" for="capacity">Harga</label>
                        <select className="form-select msc-fs-1" name="rent" id="rent">
                            <option disabled selected>Masukan Harga Sewa per Hari</option>
                            <option value="_4">&lt;Rp. 400.000</option>
                            <option value="4_6">Rp. 400.000 - Rp. 600.000</option>
                            <option value="6_">&gt;Rp. 600.000</option>
                        </select>
                    </div>
                    <div className="d-flex flex-column">
                    <label className="msc-fs-2" for="capacity">Status</label>
                        <select className="form-select msc-fs-1" name="status" id="status">
                            <option disabled selected>Status Sewa</option>
                            <option value="sewa">&lt;Di Sewa</option>
                            <option value="4_6">Rp. 400.000 - Rp. 600.000</option>
                            <option value="6_">&gt;Rp. 600.000</option>
                        </select>
                    </div>
                    <div>
                        <button className="msc-fs-2 msc-btn-style msc-btn-position">Cari Mobil</button>
                    </div>
                    
                </div>
           </div>
        </>
    );
};

export default ModalSrcResult;