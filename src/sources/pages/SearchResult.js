import React from "react";



const SearchResult = () => {
    return(
        <>
            <div className="d-flex justify-content-center align-items-center">
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
            </div>

        
        </>
    );
};


export default SearchResult;
