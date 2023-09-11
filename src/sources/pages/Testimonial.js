import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../styles/testimonial.css";

const Testimonial = () => {
    return(
        <>
            <div id="testimoni" className="d-flex flex-column tst-font-bold-1 ">
                <div>
                    <h4>Testimonial</h4>
                    <p>Berbagai review positif dari pelanggan kami</p>
                </div>
                <div>
                     <div id="carouselExample" class="carousel slide">
                         <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="..." className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="..." className="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="..." className="d-block w-100" alt="..." />
                                </div>
                         </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default Testimonial;