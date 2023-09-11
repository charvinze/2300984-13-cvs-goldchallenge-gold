import React from 'react';
import { useNavigate } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import Banner from './Banner';
import "../styles/navbar2.css";
import logo_img from "../assets/logo.png";
import btn_toggle from "../assets/btn_toggle.png";


const Navbar2 = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate("/");
    }

    const navigateToOurServices = () => {
        navigate("/");
        setTimeout(() => {
            const doc = document.getElementById("our-services");
            if (doc) {
                doc.scrollIntoView({behavior: "smooth"});
            }
        }, 100);
    }

    const navigateToWhyUs = () => {
        navigate("/"); 
        setTimeout(() => {
            const doc = document.getElementById("why-us");
            if (doc) {
                doc.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);    
    }

    const navigateToTestimonial = () => {
        navigate("/"); 
        setTimeout(() => {
            const doc = document.getElementById("testimoni");
            if (doc) {
                doc.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);    
    }

    const navigateToFAQ = () => {
        navigate("/"); 
        setTimeout(() => {
            const doc = document.getElementById("the-faq");
            if (doc) {
                doc.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);    
    }

  return (
        <>
            <div className='d-flex justify-content-center align-items-center' >
                <div className='d-flex flex-column'>
                    <nav className="navbar navbar-expand-md nvb2-spacing bg-white-1 fixed-top ctm-position-1">
                        <div className="container-fluid">
                            <a className="navbar-brand ctm-logo-pst-md ctm-logo-pst-lg ctm-logo-pst-xl" href="#" onClick={navigateToHome}><img src={logo_img} alt="logo" /></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                          
                            <img  style={{widht: "20px", height:"30px"}} src={btn_toggle} />
                            </button>                                         
                            <div className="container-sm offcanvas offcanvas-end text-bg-white" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                                <div className="offcanvas-header ">
                                    <h5 className="offcanvas-title dark1 txt-bold-1" id="offcanvasDarkNavbarLabel">BCR</h5>
                                    <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="container-fluid offcanvas-body">
                                    <ul className="navbar-nav justify-content-end  flex-grow-1 pe-3 ctm-nav-gap ctm-nav-pst-md ctm-nav-pst-lg ctm-nav-pst-xl">
                                    <li  className="nav-item">
                                        <a style={{color: "black"}} className="nav-link active ctm-font-size-1 " aria-current="page" href="#" onClick={navigateToOurServices}>Our Services</a>
                                    </li>
                                    <li className="nav-item">
                                        <a style={{color: "black"}} className="nav-link ctm-font-size-1" href="#" onClick={navigateToWhyUs}>Why Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a style={{color: "black"}} className="nav-link ctm-font-size-1" href="#" onClick={navigateToTestimonial}>Testimonial</a>
                                    </li>
                                    <li className="nav-item">
                                        <a style={{color: "black"}} className="nav-link ctm-font-size-1" href="#" onClick={navigateToFAQ}>FAQ</a>
                                    </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                    
                </div>
                
                <div style={{width: "100%", height: "250px", backgroundColor: "#F1F3FF"}}>
                    
                </div>
            </div>
        
        </>
        

  
            
  );
};

export default Navbar2;
