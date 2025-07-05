import React from 'react';
import heroMain from '../assets/hero.jpg';
import thumb1 from '../assets/thumb1.jpg';
import thumb2 from '../assets/thumb2.jpg';
import thumb3 from '../assets/thumb3.jpg';
import shape from '../assets/shape.png';
import whyImg from '../assets/why-choose-us.jpg';
import shape1 from '../assets/shape1.png';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Index = () => {

  const steps = [
    { number: '01.', title: 'Schedule Pickup' },
    { number: '02.', title: 'We Collect & Sort' },
    { number: '03.', title: 'Clean & Press' }, 
    { number: '04.', title: 'Delivery to You' },    
  ];

  const plans = [
    { name: 'Student', price: 'GH₵90-150', description: 'Basic wash & fold service for students with free pickup and delivery', link: '#basic', image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60' },
    { name: 'Standard', price: 'GH₵100-200', description: 'Weekly laundry service with wash, dry and fold included', link: '#monthly', image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c' },
    { name: 'VIP', price: 'GH₵150-250', description: 'Premium service with wash, dry, iron and express delivery', link: '#premium', image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f' },    
  ];
  


  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', color: '#000', position: 'relative' }}>
      {/* Floating Shape Top Left */}
      <img
        src={shape1}
        alt="Shape"
        className="position-absolute floating-shape"
        style={{
          top: '100px',
          left: '100px',
          width: '80px',
          zIndex: 1,
        }}
      />

      {/* Header */}
      <Header />

      {/* Hero */}
      <section className="d-flex align-items-center" style={{ minHeight: '85vh', paddingTop: '120px', background: "#f1f2f4" }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Left */}
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="text-center text-lg-start">
                <h1 className="mb-4 display-4 fw-bold text-black"><span className='text-primary'>Fresh</span> laundry delivered to your <span style={{color: '#e03e2c'}}>Doorstep</span>!</h1>
                <p className="mb-4 fs-5 text-black">Experience premium laundry service tailored to your needs. We handle everything from pickup to delivery, including washing, drying, folding, and ironing.</p>   
                {/* Save time and enjoy fresh, clean clothes without lifting a finger              */}
                {/* add a sub textxx */}
                <div className="d-flex justify-content-center justify-content-lg-start gap-3">
                  <a href="#schedule" className="btn text-white btn-lg px-4 py-2" style={{background: '#e03e2c'}}>Schedule Your Pick Up</a>
                  <Link to="/prices" className="btn btn-outline-primary btn-lg px-4 py-2">See Prices</Link>
                </div>                
              </div>  
            </div>

            {/* Right */}
            <div className="col-lg-6 text-center">
              <div className="position-relative d-inline-block">
                {/* Main Image */}
                <img
                  src={heroMain}
                  alt="Main"
                  className="img-fluid rounded-circle border border-white shadow"
                  style={{ width: '100%' }}
                />

                {/* Thumbnails */}
                <img
                  src={thumb1}
                  alt="Thumb1"
                  className="position-absolute rounded-circle border  border-white shadow"
                  style={{ width: '80px', height: '80px', top: '0px', left: '-40px' }}
                />
                <img
                  src={thumb2}
                  alt="Thumb2"
                  className="position-absolute rounded-circle  border border-white shadow"
                  style={{ width: '80px', height: '80px', bottom: '0px', left: '-40px' }}
                />
                <img
                  src={thumb3}
                  alt="Thumb3"
                  className="position-absolute rounded-circle border  border-white shadow"
                  style={{ width: '80px', height: '80px', bottom: '0px', right: '-40px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    <section
      className="position-relative py-5 text-black" style={{background: '#fff'}}
      
    >
      {/* Dark Mask */}
      <div className="position-absolute top-0 start-0 w-100 h-100"/>

      {/* Content */}
      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <h6 className=" mb-3 text-primary">Moving with us!</h6>
            <h2 className="display-5 fw-bold ">How This Works?</h2>
            <div className="bg-black mx-auto mt-3 mb-4" style={{ width: '60px', height: '3px' }}></div>
            <p className="lead ">
            </p>
              We make the process easy and reliable. From booking to delivery, you're in good hands with Sunrise.
          </div>
        </div>

        {/* Steps */}
        <div className="row g-4">
          {steps.map((step, index) => (
            <div key={index} className="col-sm-6 col-lg-3">
              <div className="text-center p-4">
                <div className="rounded-circle text-black d-inline-flex align-items-center justify-content-center mb-3" style={{ width: 70, height: 70, border: '2px solid black' }}>                    
                  <span className="fs-4 fw-bold">{step.number}</span>
                </div>
                <h5 className="text-black ">{step.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional Floating Shape (for style) */}
      {/* <img src={shape} className="position-absolute bottom-0 end-0" style={{ width: '60px' }} /> */}
    </section>

    {/* create a cta section with a text centered */}
    <section className="py-5 bg-black text-white text-center">
      <div className="container">
        <h2 className="display-5 fw-bold mb-2">Experience the Magic of Effortless Laundry</h2>
      </div>
    </section>

    {/* create a cta section with a text centered */}
    <section className="py-5 bg-[#f1f2f4] text-black text-center">
      <div className="container">
        <div className='mb-5'>
          
          <h6 className="mb-3 text-primary">Our Pricing</h6>
          <h2 className="display-5 fw-bold mb-2">Choose Your Perfect Plan</h2>
          <div className="bg-black mx-auto mt-3 mb-4" style={{ width: '60px', height: '3px' }}></div>
          <p className="mb-4">Experience premium laundry service tailored to your needs</p>
        </div>

        <div className="row justify-content-center mt-4">
          { plans.map((plan, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div className="card border-0 shadow-sm">
                <img src={plan.image} className="card-img-top" alt="Basic Laundry" style={{height: "200px", objectFit: "cover"}} />
                <div className="card-body py-4">
                  <h6 className="card-title">{plan.name}</h6>
                  <h2 className="card-price mb-2 fw-bold">{plan.price}</h2>                  
                  <p className="mb-0">{plan.description}</p>
                  
                  <a href="#basic" className="btn btn-outline-primary mt-3">Choose Plan</a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      <section className="position-relative py-5 bg-black text-white">
      <div className="container">
        <div className="row align-items-center ">
          {/* Left Content */}
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="mb-4">
              <span className="text-primary fw-bold small d-inline-block mb-2 position-relative ps-4">
                Our Services
                <span className="position-absolute start-0 top-50 translate-middle-y rounded-pill bg-primary" style={{ width: '8px', height: '8px' }}></span>
              </span>
              <h2 className="display-5 fw-bold">Our top priority is your happiness</h2>
            </div>

            {/* Feature List */}
            <div className="mb-4 d-flex align-items-start">
            <div className="me-3 fs-4 bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: "40px", height: "40px"}}>
              <i className="bi bi-droplet-fill"></i>
            </div>
            <div>
              <h5 className="fw-semibold mb-1">Wash & Fold</h5>
              <p className="text-light opacity-75 mb-0">Professional washing and expert folding for your everyday laundry needs.</p>
            </div>
          </div>

          <div className="mb-4 d-flex align-items-start">
            <div className="me-3 fs-4 bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: "40px", height: "40px"}}>
              <i className="bi bi-hand-index-thumb"></i>
            </div>
            <div>
              <h5 className="fw-semibold mb-1">Hand Wash Delicates</h5>
              <p className="text-light opacity-75 mb-0">Gentle hand washing for your delicate garments and special care items.</p>
            </div>
          </div>

          <div className="mb-4 d-flex align-items-start">
            <div className="me-3 fs-4 bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: "40px", height: "40px"}}>
              <i className="bi bi-palette"></i>
            </div>
            <div>
              <h5 className="fw-semibold mb-1">Color-Separated Wash</h5>
              <p className="text-light opacity-75 mb-0">Careful color separation to protect and preserve your garments.</p>
            </div>
          </div>

          <div className="mb-4 d-flex align-items-start">
            <div className="me-3 fs-4 bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: "40px", height: "40px"}}>
              <i className="bi bi-suit-heart"></i>
            </div>
            <div>
              <h5 className="fw-semibold mb-1">Formal Wear Care</h5>
              <p className="text-light opacity-75 mb-0">Specialized cleaning and pressing for suits, dresses and formal attire.</p>
            </div>
          </div>

          <div className="d-flex align-items-start">
            <div className="me-3 fs-4 bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: "40px", height: "40px"}}>
              <i className="bi bi-stars"></i>
            </div>
            <div>
              <h5 className="fw-semibold mb-1">Stain Removal</h5>
              <p className="text-light opacity-75 mb-0">Expert stain treatment and removal for all types of fabrics.</p>
            </div>
          </div>            
          </div>

          {/* Right Image */}
          <div className="col-lg-6 order-1 order-lg-2 text-center">
            <img
              src={whyImg}
              alt="Why Choose Us"
              className="img-fluid rounded-circle shadow border border-white"
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </div>
    </section>

    {/* section for contact us */}
    <section className="py-5 bg-light text-black">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <h6 className="mb-3 text-primary">Get in Touch</h6>
            <h2 className="display-5 fw-bold">Contact Us</h2>
            <div className="bg-black mx-auto mt-3 mb-4" style={{ width: '60px', height: '3px' }}></div>
            <p className="lead">Click on any of the options below to reach us!</p>            
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-sm-6 col-lg-4">
            <div className="text-center p-4">
              <a href="tel:+15551234567" className="text-decoration-none">
                <div className="rounded-circle bg-white shadow d-inline-flex align-items-center justify-content-center mb-3" style={{ width: 80, height: 80 }}>
                  <i className="bi bi-telephone-fill fs-2 text-primary"></i>
                </div>
                <h5 className="text-black">Phone</h5>
                <p className="mb-0">(055) 760-0158</p>
              </a>
            </div>
          </div>

          <div className="col-sm-6 col-lg-4">
            <div className="text-center p-4">
              <a href="https://www.instagram.com/sunriselaundryservice?igsh=eDE2MTV5ZmIybm0y" target='_blank' className="text-decoration-none">
                <div className="rounded-circle bg-white shadow d-inline-flex align-items-center justify-content-center mb-3" style={{ width: 80, height: 80 }}>
                  <i className="bi bi-instagram fs-2 text-primary"></i>
                </div>
                <h5 className="text-black">Instagram</h5>
                <p className="mb-0">@sunriselaundryservices</p>
              </a>
            </div>
          </div>

          <div className="col-sm-6 col-lg-4">
            <div className="text-center p-4">
              <a href="https://www.google.com/maps/dir/5.75669,0.084162/Prampram+rd/@5.7539063,0.0774943,16z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x10208733f620c33b:0x5c3db980e23e679c!2m2!1d0.0835447!2d5.7498299!3e0?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <div className="rounded-circle bg-white shadow d-inline-flex align-items-center justify-content-center mb-3" style={{ width: 80, height: 80 }}>
                  <i className="bi bi-geo-alt-fill fs-2 text-primary"></i>
                </div>
                <h5 className="text-black">Location</h5>
                <p className="mb-0">Find us on map</p>
              </a>
            </div>
          </div>
        </div>                

        
      </div>
    </section>

    {/* Footer */}
    <Footer />
      
    </div>
  );
};

export default Index;
