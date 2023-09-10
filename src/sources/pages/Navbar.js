import React from 'react';
import { useNavigate } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import Banner from './Banner';
import "../styles/navbar.css";
import logo_img from "../assets/logo.png";
import btn_toggle from "../assets/btn_toggle.png";


const Navbar = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate("/");
    }

  return (
        <>
            <div className='d-flex justify-content-center align-items-center' >
                <div className='d-flex'>
                    <nav className="navbar navbar-expand-md bg-white-1 fixed-top ctm-position-1">
                        <div className="container-fluid">
                            <a className="navbar-brand ctm-logo-pst-md ctm-logo-pst-lg ctm-logo-pst-xl" href="#"><img src={logo_img} alt="logo" onClick={navigateToHome} /></a>
                            <button className="navbar-toggler me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                            {/* <span className="navbar-toggler-icon dark-grey-1"></span> */}
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
                                        <a style={{color: "black"}} className="nav-link active ctm-font-size-1 " aria-current="page" href="#">Our Services</a>
                                    </li>
                                    <li className="nav-item">
                                        <a style={{color: "black"}} className="nav-link ctm-font-size-1" href="#">Why Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a style={{color: "black"}} className="nav-link ctm-font-size-1" href="#">Testimonial</a>
                                    </li>
                                    <li className="nav-item">
                                        <a style={{color: "black"}} className="nav-link ctm-font-size-1" href="#">FAQ</a>
                                    </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                
            </div>
        
        </>
        

  
            
  );
};

export default Navbar;
