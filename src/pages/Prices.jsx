import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Prices = () => {
  return (
    <div style={{ backgroundColor: '#fff', paddingTop: '120px', color: '#000', position: 'relative' }}>
        <Header />

        <div className="container mb-5" style={{ minHeight: '80vh', paddingBottom: '5px' }}>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="text-center">
                        <h6 className=" mb-3 text-primary">Pricing Plans</h6>
                        <h2 className="display-5 fw-bold ">Exceptional Quality at Competitive Rates</h2>
                        <div className="bg-black mx-auto mt-3 mb-4" style={{ width: '60px', height: '3px' }}></div>
                        <p className="lead ">
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
                                <div className="text-muted small">Premium Detergent</div>
                            </div>
                            <span className="fw-bold">₵100.00 - ₵200.00</span>
                        </div>
                        <div className="pricing-item d-flex justify-content-between align-items-center border-bottom py-3">
                            <div>
                                <span>Wash, Dry & Fold (VIP)</span>
                                <div className="text-muted small">Premium Detergent / Softner</div>
                            </div>
                            <span className="fw-bold">₵150.00 - ₵250.00</span>
                        </div>
                        <div className="pricing-item d-flex justify-content-between align-items-center border-bottom py-3">
                            <div>
                                <span>Large Basket</span>
                                <div className="text-muted small">Plus Fold & Iron</div>
                            </div>
                            <span className="fw-bold">₵200.00</span>
                        </div>
                        <div className="pricing-item d-flex justify-content-between align-items-center border-bottom py-3">
                            <div>
                                <span>Small Basket</span>
                                <div className="text-muted small">Plus Fold & Iron</div>
                            </div>
                            <span className="fw-bold">₵120.00</span>
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
                        <a href="#schedule" className="btn text-white btn-md px-4 py-2" style={{background: '#e03e2c'}}>Schedule Your Pick Up</a>
                    </div>
                    
                </div>
            </div>
        </div>  


        <Footer />          
    </div>
  )
}

export default Prices