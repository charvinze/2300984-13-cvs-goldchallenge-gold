import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../styles/footer.css";
import logo from "../assets/logo.png";
import fbicon from "../assets/icon_facebook.png";
import instaicon from "../assets/icon_instagram.png";
import twticon from "../assets/icon_twitter.png";
import mailicon from "../assets/icon_mail.png";
import twcicon from "../assets/icon_twitch.png";


const Footer = () => {
    return(
        <>
            <div className='d-flex flex-column flex-md-row flex-lg-row flex-xl-row justify-content-center align-items-center w-100 pb-xl-5'>
                <div className='d-flex flex-column flex-md-row flex-lg-row flex-xl-row justify-content-md-center align-items-md-center justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center  ftr-w ftr-gap'>
                    <div className='ftr-st-1'>
                        <p className=''>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                        <p>binarcarrental@gmail.com</p>
                        <p>081-233-334-808</p>
                    </div>
                    <div>
                        <ul className='list-unstyled ftr-st-1 '>
                            <li><a href="#">Our Services</a></li>
                            <li><a href="#">Why Us</a></li>
                            <li> <a href="#">Testimonial</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>                   
                        
                    </div>
                    <div className='fw-bold ftr-st-1'>
                        <p>Connect with us</p>
                        <ul className='list-unstyled d-flex flex-row'>
                            <li className='me-2'><img src={fbicon} /></li>
                            <li className='me-2'><img src={instaicon} /></li>
                            <li className='me-2'><img src={twticon} /></li>
                            <li className='me-2'><img src={mailicon} /></li>
                            <li className='me-2'><img src={twcicon} /></li>
                        </ul>
                    </div>
                    <div className='fw-bold ftr-st-1'>
                        <p>Copyright Binar 2022</p>
                        <img src={logo} />
                    </div>

                </div>
            </div>
            
        </>
    );
};


export default Footer;