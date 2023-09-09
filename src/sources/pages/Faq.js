import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../styles/faq.css";


const Faq = () => {
    return(
        <>
            <div className="d-flex flex-column flex-md-row flex-lg-row flex-xl-row justify-content-center faq-flex-width">
                <div className="d-flex flex-column flex-md-row flex-lg-row flex-xl-row justify-content-center align-items-center 
                align-items-md-start align-items-lg-start align-items-xl-start faq-flex-gap faq-flex-space">
                    <div className="d-flex flex-column ">
                        <h4>Frequently Asked Questions</h4>
                        <p className="">Lorem ipsum dolor sit amet, consectetur adispicing</p>
                    </div>

                  <div className="d-flex flex-column"  >
                      <div class="accordion" id="accordionExample" >
                          <div class="accordion-item faq-acc-width faq-acc-space faq-acc-style faq-acc-style-btn" style={{borderTopRightRadius: "7px", borderTopLeftRadius: "7px"}}>
                            <h2 class="accordion-header">
                              <button class="accordion-button collapsed faq-acc-style-btn" style={{borderTopRightRadius: "7px", borderTopLeftRadius: "7px"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                Accordion Item #2,
                              </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                              <div class="accordion-body" >
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                              </div>
                            </div>
                          </div>
                          <div class="accordion-item faq-acc-width faq-acc-space faq-acc-style">
                            <h2 class="accordion-header">
                              <button class="accordion-button collapsed faq-acc-style-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Accordion Item #2
                              </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                              <div class="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                              </div>
                            </div>
                          </div>
                          <div class="accordion-item faq-acc-width faq-acc-space faq-acc-style">
                            <h2 class="accordion-header">
                              <button class="accordion-button collapsed faq-acc-style-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Accordion Item #3
                              </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                              <div class="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                              </div>
                            </div>
                          </div>
                          <div class="accordion-item faq-acc-width faq-acc-space faq-acc-style">
                            <h2 class="accordion-header">
                              <button class="accordion-button collapsed faq-acc-style-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Accordion Item #3 
                              </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                              <div class="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                              </div>
                            </div>
                          </div>
                          <div class="accordion-item faq-acc-width faq-acc-space faq-acc-style" style={{borderBottomRightRadius: "7px", borderBottomLeftRadius: "7px"}}>
                            <h2 class="accordion-header">
                              <button class="accordion-button collapsed faq-acc-style-btn" style={{borderBottomRightRadius: "7px", borderBottomLeftRadius: "7px"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                Accordion Item #3
                              </button>
                            </h2>
                            <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                              <div class="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                              </div>
                            </div>
                          </div>
                        </div>
                  </div>
                </div> 
            </div>


               
        </>
    );
};


export default Faq;


{/* <div classNameName="accordion-item">
                    <h2 classNameName="accordion-header">
                      <button classNameName="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                      </button>
                    </h2>
                    <div id="collapseTwo" classNameName="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div classNameName="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNameNamees that we use to style each element. These classNameNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                  <div classNameName="accordion-item">
                    <h2 classNameName="accordion-header">
                      <button classNameName="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                      </button>
                    </h2>
                    <div id="collapseThree" classNameName="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div classNameName="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNameNamees that we use to style each element. These classNameNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div> */}