import React from "react";
import { useNavigate } from "react-router";
import "../styles/searchresult.css";
import car1 from "../assets/car1.png";



const SearchResult = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate("/carresultdetail");
    }

    const array1 = [
        {
            id: 1,
            image: car1,
            name: "Innova",
            price: "Rp. 500.000"
        }
    ];

    return(
        <>
            <div className="d-flex srct-position justify-content-center align-items-center" >
                <div className=" border border-secondary-subtle rounded bg-white srct-textbox-width srct-w srct-position srct-spacing srct-textbox-spacing">
                    <div  className="fw-bold">
                        <h6>Pencarianmu</h6>
                    </div>
                    <div className="d-flex flex-column flex-lg-row flex-xl-row bg-white gap-3">
                        <div className="d-flex flex-column srct-font-style">
                            <label className="srct-fs-2" for="nama-mbl">Nama Mobil</label>
                            <input id="nama-mbl" className="form-control srct-txt-size " type="text" />
                        </div>
                        <div className="d-flex flex-column srct-font-style">
                            <label className="srct-fs-2" for="harga-mbl">Harga</label>
                            <input id="harga-mbl" className="form-control srct-txt-size " type="text" />
                        </div>
                        <div className="d-flex flex-column srct-font-style">
                            <label className="srct-fs-2" for="kategori-mbl">Kategori</label>
                            <input id="kategori-mbl" className="form-control srct-txt-size " type="text" />
                        </div>
                        <div className="d-flex flex-column srct-font-style">
                            <label className="srct-fs-2" for="status-mbl">Status</label>
                            <input id="status-mbl" className="form-control srct-txt-size " type="text" />
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <button className="srct-fs-2 srct-btn-style srct-btn-position border border-primary">Edit</button>
                        </div>
                    </div>
                    
                </div>
           </div>

           <div className="d-flex flex-column flex-lg-row flex-xl-row gap-5 mt-5 justify-content-center align-items-center srct-image-position">
                {
                    Array(3).fill(null).map((_, index) => (
                        <div className="srct-imagebox-width">
                            <div class="card">
                            <img src={car1} class="card-img-top srct-image-spacing" alt="..." />
                            <div class="card-body">
                                <h6 class="card-title">Innova</h6>
                                <p class="card-text">Rp. 500.000/hari</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <a href="#" class="btn btn-success" onClick={navigateToHome} style={{backgroundColor: "#5CB85F", width: "100%"}}>Pilih Mobil</a>
                            </div>
                            </div>
                        </div>
                        
                    ))
                }
                
           </div>
            

        
        </>
    );
};


export default SearchResult;






{/* <div className="d-flex justify-content-center align-items-center">
                <div className="d-flex flex-column border border-1 pt-3 pb-3 ps-4 pe-4 rounded-4 srcrt-flex-width" style={{backgroundColor:"white"}}>
                    <div className="justify-content-start align-items-start">
                        <h6 className="srcrt-spacing-1">Pencarianmu</h6>
                    </div>
                    <div className="d-flex flex-column flex-md-row flex-lg-row flex-xl-row gap-3 justify-content-center align-items-center" >
                        <div className="d-md-flex d-lg-flex d-xl-flex flex-md-column flex-lg-column flex-xl-column">
                            <div><label className="srcrt-font-style-3" for="nama_mbl">Nama Mobil</label></div>
                            <div><input id="nama_mbl" className="srcrt-text-width" type="text" value="" style={{backgroundColor: "grey", borderStyle: "none"}} readOnly /></div>
                        </div>
                        <div className="d-md-flex d-lg-flex d-xl-flex flex-md-column flex-lg-column flex-xl-column">
                            <div><label className="srcrt-font-style-3" for="kategori_mbl">Kategori</label></div>
                            <div><input id="kategori_mbl" className="srcrt-text-width" type="text" value="" style={{backgroundColor: "grey", borderStyle: "none"}} readOnly /></div>
                        </div>
                        <div className="d-md-flex d-lg-flex d-xl-flex flex-md-column flex-lg-column flex-xl-column">
                            <div><label className="srcrt-font-style-3" for="harga_mbl">Harga Sewa per Hari </label></div>
                            <div><input id="harga_mbl" className="srcrt-text-width" type="text" value="" style={{backgroundColor: "grey", borderStyle: "none"}} readOnly /></div>
                        </div>
                        <div className="d-md-flex d-lg-flex d-xl-flex flex-md-column flex-lg-column flex-xl-column">
                            <div><label className="srcrt-font-style-3" for="status_mbl">Status</label></div>
                            <div><input id="status_mbl" className="srcrt-text-width" type="text" value="" style={{backgroundColor: "grey", borderStyle: "none"}} readOnly /></div>
                        </div>
                    </div>
                </div>
            </div> */}