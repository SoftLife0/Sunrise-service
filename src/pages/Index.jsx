import React from 'react';
import heroMain from '../assets/hero.jpg';
import thumb1 from '../assets/thumb1.jpg';
import thumb2 from '../assets/thumb2.jpg';
import thumb3 from '../assets/thumb3.jpg';
import shape from '../assets/shape.png';
import whyImg from '../assets/why-choose-us.jpg';
import shape1 from '../assets/shape1.png';

const Index = () => {

    const steps = [
    { number: '01.', title: 'Contact Us' },
    { number: '02.', title: 'Make An Order' },
    { number: '03.', title: 'We arrive within 1h' },
    { number: '04.', title: 'Track & Trace' },
  ];
  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', color: '#fff', position: 'relative' }}>
      {/* Floating Shape Top Left */}
      <img
        src={shape}
        alt="Shape"
        className="position-absolute floating-shape"
        style={{
          top: '100px',
          left: '100px',
          width: '80px',
          zIndex: 1,
        }}
      />

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg fixed-top bg-black">
        <div className="container">
          <a className="navbar-brand fw-bold text-white" href="#">🌅 Sunrise</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Features</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Pricing</a></li>
              <li className="nav-item">
                <a className="btn btn-primary ms-lg-3 px-4 py-2" href="#">Get Started</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="d-flex align-items-center" style={{ minHeight: '100vh', paddingTop: '120px' }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Left */}
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="text-center text-lg-start">
                <h1 className="mb-4 display-4 fw-bold text-white">Amazingly High Quality Cleaning Company</h1>
                <p className="mb-4 fs-5 text-white-50">We’ll set up your free on-site estimate within 24 hours of receiving your request.</p>
                <a href="#about" className="btn btn-outline-light btn-lg px-4 py-2">Read More</a>
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
            <h6 className=" mb-3">Moving with us!</h6>
            <h2 className="display-5 fw-bold ">How This Works?</h2>
            <div className="bg-black mx-auto mt-3 mb-4" style={{ width: '60px', height: '3px' }}></div>
            <p className="lead ">
              We make the process easy and reliable. From booking to delivery, you're in good hands with Sunrise.
            </p>
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
                <h5 className="text-black fw-semibold">{step.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional Floating Shape (for style) */}
      {/* <img src={shape} className="position-absolute bottom-0 end-0" style={{ width: '60px' }} /> */}
    </section>

      <section className="position-relative py-5 bg-black text-white">
      <div className="container">
        <div className="row align-items-center ">
          {/* Left Content */}
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="mb-4">
              <span className="text-white fw-bold small d-inline-block mb-2 position-relative ps-4">
                Why Choose Us
                <span className="position-absolute start-0 top-50 translate-middle-y rounded-pill bg-primary" style={{ width: '8px', height: '8px' }}></span>
              </span>
              <h2 className="display-5 fw-bold">Our top priority is your happiness</h2>
            </div>

            {/* Feature List */}
            <div className="mb-4 d-flex align-items-start">
              <span className="me-3 fs-4 text-success">✔️</span>
              <div>
                <h5 className="fw-semibold mb-1">High Quality Cleaning Services</h5>
                <p className="text-light opacity-75 mb-0">We provide top-notch services that leave your space sparkling clean and fresh.</p>
              </div>
            </div>

            <div className="mb-4 d-flex align-items-start">
              <span className="me-3 fs-4 text-success">✔️</span>
              <div>
                <h5 className="fw-semibold mb-1">Dedicated Customer Support</h5>
                <p className="text-light opacity-75 mb-0">Our friendly support team is always available to assist you quickly and professionally.</p>
              </div>
            </div>

            <div className="d-flex align-items-start">
              <span className="me-3 fs-4 text-success">✔️</span>
              <div>
                <h5 className="fw-semibold mb-1">Experienced Staff</h5>
                <p className="text-light opacity-75 mb-0">Our team is trained, certified, and experienced in delivering consistent results.</p>
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

      {/* Floating Shape */}
      <img
        src={shape1}
        alt="Decoration"
        className="position-absolute"
        style={{ bottom: '20px', right: '20px', width: '60px', animation: 'floatY 6s ease-in-out infinite' }}
      />

      {/* Animation Style */}
      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </section>

      
    </div>
  );
};

export default Index;
