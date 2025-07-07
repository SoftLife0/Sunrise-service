import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import shape1 from '../assets/shape1.png';

const Prices = () => {
  return (
    <div style={{ backgroundColor: '#F5F5DC', paddingTop: '120px', color: '#3D251E', position: 'relative' }}>
        <img src={shape1} alt="Shape" className="position-absolute floating-shape" style={{top: '50px',left: 0,width: '80px',zIndex: 1,}}/>
        
        <Header />

        <div className="container mb-5" style={{ minHeight: '80vh', paddingBottom: '5px' }}>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="text-center mb-3">
                        <h6 className=" mb-3" style={{color: '#008080'}}>Pricing Plans</h6>
                        <h2 className="display-5 fw-bold" style={{color: '#3D251E'}}>Top Quality at Competitive Rates</h2>
                        <div className="mx-auto mt-3 mb-5" style={{ width: '60px', height: '3px', backgroundColor: '#D3A745' }}></div>
                    </div>

                    <div className="pricing-table">
                        <div className="pricing-item d-flex justify-content-between align-items-center border-bottom py-3">
                            <div>
                                <span>Wash, Dry & Fold (Student)</span>
                                <div className="small" style={{color: '#3D251E'}}>Standard Detergent / Softner</div>
                            </div>
                            <span className="fw-bold">₵90.00 - ₵150.00</span>
                        </div>
                        <div className="pricing-item d-flex justify-content-between align-items-center border-bottom py-3">
                            <div>
                                <span>Wash, Dry & Fold (Standard)</span>
                                <div className="small" style={{color: '#3D251E'}}>Premium Detergent</div>
                            </div>
                            <span className="fw-bold">₵100.00 - ₵200.00</span>
                        </div>
                        <div className="pricing-item d-flex justify-content-between align-items-center border-bottom py-3">
                            <div>
                                <span>Wash, Dry & Fold (VIP)</span>
                                <div className="small" style={{color: '#3D251E'}}>Premium Detergent / Softner</div>
                            </div>
                            <span className="fw-bold">₵150.00 - ₵250.00</span>
                        </div>
                        <div className="pricing-item d-flex justify-content-between align-items-center border-bottom py-3">
                            <div>
                                <span>Large Basket</span>
                                <div className="small" style={{color: '#3D251E'}}>Plus Fold & Iron</div>
                            </div>
                            <span className="fw-bold">₵200.00</span>
                        </div>
                        <div className="pricing-item d-flex justify-content-between align-items-center border-bottom py-3">
                            <div>
                                <span>Small Basket</span>
                                <div className="small" style={{color: '#3D251E'}}>Plus Fold & Iron</div>
                            </div>
                            <span className="fw-bold">₵120.00</span>
                        </div>
                        <div className="pricing-item d-flex justify-content-between align-items-center border-bottom py-3">
                            <div>
                                <span>Student Discount</span>
                                <div className="small" style={{color: '#3D251E'}}>With student ID</div>
                            </div>
                            <span className="fw-bold">20% off</span>
                        </div>
                        
                    </div>

                    <div className="text-center mt-5">
                        <p style={{color: '#3D251E'}}>Ready to schedule your laundry pickup? Contact us now for convenient door-to-door service.</p>
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
