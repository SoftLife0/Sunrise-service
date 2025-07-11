import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import shape1 from '../assets/shape1.png';

const Prices = () => {
  return (
    <div style={{ backgroundColor: '#fff', paddingTop: '120px', color: '#000', position: 'relative' }}>
        {/* <img src={shape1} alt="Shape" className="position-absolute floating-shape" style={{top: '50px',left: 0,width: '80px',zIndex: 1,}}/> */}
        
        <Header />

        <div className="container mb-5" style={{ minHeight: '80vh', paddingBottom: '5px' }}>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="text-center mb-3">
                        <h6 className=" mb-3" style={{color: '#008080'}}>Pricing Plans</h6>
                        <h2 className="display-5 fw-bold ">Top Quality at Competitive Rates</h2>
                        <div className="mx-auto mt-3 mb-4" style={{ width: '60px', height: '3px', background: '#D3A745' }}></div>
                        <p className="text-danger mb-3">
                            * Prices may decrease based on the volume of items in your laundry basket. Contact us for volume-based pricing.
                        </p>
                    </div>

                    <div className="pricing-table">
                        <div className="pricing-item d-flex justify-content-between align-items-center border-bottom py-3">
                            <div>
                                <span>Wash, Dry & Fold (Student)</span>
                                <div className="text-muted small">Standard Detergent / Softner</div>
                            </div>
                            <span className="fw-bold">₵90.00 - ₵150.00</span>
                        </div>
                        <div className="pricing-item d-flex justify-content-between align-items-center border-bottom py-3">
                            <div>
                                <span>Wash, Dry & Fold (Standard)</span>
                                <div className="text-muted small">Standard Detergent / Softner</div>
                                <div className="small">Ironing (₵50.00)</div>

                            </div>
                            <span className="fw-bold">₵100.00 - ₵200.00</span>
                            
                        </div>
                        <div className="pricing-item d-flex justify-content-between align-items-center border-bottom py-3">
                            <div>
                                <span>Wash, Dry & Fold (VIP)</span>
                                <div className="text-muted small">Premium Detergent / Softner / Ironing</div>
                            </div>
                            <span className="fw-bold">₵150.00 - ₵250.00</span>
                        </div>
                        <div className="pricing-item d-flex justify-content-between align-items-center border-bottom py-3">
                            <div>
                                <span>Kente Cloth</span>
                                <div className="text-muted small">Plus Fold & Iron</div>
                            </div>
                            <span className="fw-bold">₵100.00 per cloth</span>
                        </div>
                        <div className="pricing-item d-flex justify-content-between align-items-center border-bottom py-3">
                            <div>
                                <span>Rug Cleaning</span>
                                <div className="text-muted small">Pickup / Dropoff</div>
                            </div>
                            <span className="fw-bold">Prices varies by size</span>
                        </div>
                        <div className="pricing-item d-flex justify-content-between align-items-center border-bottom py-3">
                            <div>
                                <span>Blankets & Duvet</span>
                            </div>
                            <span className="fw-bold">₵40.00 - ₵50.00</span>
                        </div>
                        <div className="pricing-item d-flex justify-content-between align-items-center border-bottom py-3">
                            <div>
                                <span>Student Discount</span>
                                <div className="text-muted small">With student ID</div>
                            </div>
                            <span className="fw-bold">20% off</span>
                        </div>
                        
                    </div>

                    <div className="text-center mt-5">
                        <p className="text-muted">Ready to schedule your laundry pickup? Contact us now for convenient door-to-door service.</p>
                        <Link to="/form" className="btn text-white btn-md px-4 py-2 me-2" style={{background: '#D3A745'}}>Schedule Your Pick Up</Link>
                        <a href="tel:+233557600158" className="btn text-white btn-md px-4 py-2" style={{background: '#008080'}}>Call Us</a>
                    </div>
                    
                </div>
            </div>
        </div>  


        <Footer />          
    </div>
  )
}

export default Prices