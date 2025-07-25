import React from 'react';
import heroMain from '../assets/why3.png';
import whyImg from '../assets/why5.jpg';
import shape1 from '../assets/newhero.png';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import test from '../assets/s4.png'

const Index = () => {

  const steps = [
    { title: 'Pickup / Dropoff', icon: 'bi bi-calendar-check' },
    { title: 'We Collect & Sort', icon: 'bi bi-truck' },
    { title: 'Clean & Press', icon: 'bi bi-sun' }, 
    { title: 'Delivery to You', icon: 'bi bi-gift' },    
  ];

  const plans = [
    { name: 'Student', price: 'GH₵90-150', description: 'Basic wash & fold service for students', link: '/prices', image: 'https://images.unsplash.com/photo-1641648538518-6f86b43a5baf?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Standard', price: 'GH₵100-200', description: 'Laundry service with wash, dry and fold included', link: '/prices', image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c' },
    { name: 'VIP', price: 'GH₵150-250', description: 'Premium service with wash, dry and iron', link: '/prices', image: 'https://images.unsplash.com/photo-1489274495757-95c7c837b101?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },    
  ];
  


  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', color: '#3D251E', position: 'relative' }}>
      {/* Floating Shape Top Left */}
      {/* <img src={shape1} alt="Shape" className="position-absolute floating-shape" style={{top: '50px',left: 0,width: '80px',zIndex: 1,}}/> */}

      {/* Header */}
      <Header />

      {/* Hero */}
      <section className="d-flex align-items-center" style={{ minHeight: '85vh', paddingTop: '140px', background: "#fff" }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Left */}
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="text-center text-lg-start">
                <div className='mb-4'>
                    <img src={test} alt="Sunrise" style={{ height: "100px", verticalAlign: "baseline", margin: "0 auto"}}/>
                </div>     

                <div>
                  <h3 className="fw-bold text-black"><span style={{color: '#008080'}}>Quality</span> laundry service at your <span style={{color: '#D3A745'}}>Doorstep</span>!</h3>                   
                  <p className="mb-4 fs-5 text-muted" >Professional & express dry wash services with eco-friendly washing and friendly staff. The best in the area, laundry is ready for pickup within 48 hours! We offer <strong>Wash & Fold, Hand Wash Delicates, Color-separated wash, Formal wear wash & care, and Stain Removal</strong>.</p>                  
                </div>


                <div className="d-flex justify-content-center justify-content-lg-start gap-3">
                  <Link to="/form" className="btn text-white btn-md px-4 py-2" style={{background: '#D3A745'}}>Schedule Your Pick Up</Link>
                  <Link to="/prices" className="btn text-white btn-md px-4 py-2" style={{background: '#008080'}}>See Prices</Link>
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
                  src="https://images.unsplash.com/photo-1641648538518-6f86b43a5baf?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Thumb1"
                  className="position-absolute rounded-circle border border-white shadow"
                  style={{ width: '80px', height: '80px', top: '0px', left: 0 }}
                />
                <img
                  src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c"
                  alt="Thumb2"
                  className="position-absolute rounded-circle border border-white shadow"
                  style={{ width: '80px', height: '80px', bottom: '0px', left: 0 }}
                />
                <img
                  src="https://images.unsplash.com/photo-1489274495757-95c7c837b101?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Thumb3"
                  className="position-absolute rounded-circle border border-white shadow"
                  style={{ width: '80px', height: '80px', bottom: '0px', right: 0 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      {/* <section className="py-5 text-center text-white" style={{background: '#008080'}}>
        <div className="container">
          <h2 className="display-5 fw-bold mb-2">We Commit to Quality and Reliability</h2>
        </div>
      </section> */}

    <section className="position-relative py-5" style={{background: '#008080', color: ''}}>
      {/* Dark Mask */}
      <div className="position-absolute top-0 start-0 w-100 h-100"/>

      {/* Content */}
      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <h6 className="mb-3" style={{color: '#fff'}}>Moving with us!</h6>
            <h2 className="display-5 fw-bold text-white">How This Works?</h2>
            <div className="mx-auto mt-3 mb-4" style={{ width: '60px', height: '3px', background: '#D3A745' }}></div>
            <p className="lead text-white">
              We make the process easy and reliable. From booking to delivery, you're in good hands with Sunrise.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="row g-4">
          {steps.map((step, index) => (
            <div key={index} className="col-sm-6 col-lg-3">
              <div className="text-center p-4">
                <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: 70, height: 70, border: '2px solid #fff', color: '#fff' }}>                    
                  <i className={`${step.icon} fs-4 fw-bold`}></i>                                    
                </div>
                <h5 className='text-white'>{step.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Pricing section */}
    <section className="py-5 text-center">
      <div className="container">
        <div className='mb-5'>
          <h6 className="mb-3" style={{color: '#008080'}}>Our Pricing</h6>
          <h2 className="display-5 fw-bold mb-2">Choose Your Perfect Plan</h2>
          <div className="mx-auto mt-3 mb-4" style={{ width: '60px', height: '3px', background: '#D3A745' }}></div>
          <p className="mb-4">Experience premium laundry service tailored to your needs</p>
        </div>

        <div className="row justify-content-center mt-4">
          {plans.map((plan, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div className="card border-0 shadow-md" style={{
                    borderRadius: '20px',
                    transform: 'translateY(0)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <img src={plan.image} className="card-img-top" alt="Basic Laundry" style={{height: "200px", objectFit: "cover"}} />
                <div className="card-body py-4">
                  <h6 className="card-title" style={{color: '#008080'}}>{plan.name}</h6>
                  <h2 className="card-price mb-2 fw-bold" style={{color: '#000'}}>{plan.price}</h2>                  
                  <p className="mb-0">{plan.description}</p>
                  
                  <Link to={plan.link} className="btn mt-3 text-white" style={{background: '#008080'}}>Choose Plan</Link>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Services section */}
    <section className="position-relative py-5 text-white" style={{background: '#3D251E'}}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="mb-4">
              <span className="fw-bold small d-inline-block mb-2 position-relative ps-4" style={{color: '#D3A745'}}>
                Our Services
                <span className="position-absolute start-0 top-50 translate-middle-y rounded-pill" style={{ width: '8px', height: '8px', background: '#D3A745' }}></span>
              </span>
              <h2 className="display-5 fw-bold">Our top priority is your happiness</h2>
            </div>

            {/* Feature List */}
            <div className="mb-4 d-flex align-items-start">
              <div className="me-3 fs-4 text-white rounded-circle d-flex align-items-center justify-content-center" style={{minWidth: "40px", minHeight: "40px", width: "40px", height: "40px", background: '#008080'}}>
                <i className="bi bi-droplet-fill"></i>
              </div>
              
              <div>
                <h5 className="fw-semibold mb-1">Wash & Fold</h5>
                <p className="opacity-75 mb-0">Professional washing and expert folding for your everyday laundry needs.</p>
              </div>
            </div>

            <div className="mb-4 d-flex align-items-start">
              <div className="me-3 fs-4 text-white rounded-circle d-flex align-items-center justify-content-center" style={{minWidth: "40px", minHeight: "40px", width: "40px", height: "40px", background: '#008080'}}>
                <i className="bi bi-droplet-fill"></i>
              </div>
              
              <div>
                <h5 className="fw-semibold mb-1">Hand Wash Delicates</h5>
                <p className="opacity-75 mb-0">Gentle hand washing for your delicate garments and special care items.</p>
              </div>
            </div>

            <div className="mb-4 d-flex align-items-start">
              <div className="me-3 fs-4 text-white rounded-circle d-flex align-items-center justify-content-center" style={{minWidth: "40px", minHeight: "40px", width: "40px", height: "40px", background: '#008080'}}>
                <i className="bi bi-droplet-fill"></i>
              </div>
              
              <div>
                <h5 className="fw-semibold mb-1">Color-Separated Wash</h5>
                <p className="opacity-75 mb-0">Careful color separation to protect and preserve your garments.</p>
              </div>
            </div>

            <div className="mb-4 d-flex align-items-start">
              <div className="me-3 fs-4 text-white rounded-circle d-flex align-items-center justify-content-center" style={{minWidth: "40px", minHeight: "40px", width: "40px", height: "40px", background: '#008080'}}>
                <i className="bi bi-droplet-fill"></i>
              </div>
              
              <div>
                <h5 className="fw-semibold mb-1">Stain Removal</h5>
                <p className="opacity-75 mb-0">Expert stain treatment and removal for all types of fabrics.</p>
              </div>
            </div>

            {/* Additional feature items follow same pattern... */}

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

    {/* Contact section */}
    <section className="py-5 text-black">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <h6 className="mb-3" style={{color: '#008080'}}>Get in Touch</h6>
            <h2 className="display-5 fw-bold">Contact Us</h2>
            <div className="mx-auto mt-3 mb-4" style={{ width: '60px', height: '3px', background: '#D3A745' }}></div>
            <p className="lead">Click on any of the options below to reach us!</p>            
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {/* Contact cards follow same pattern... */}
          <div className="row g-4 justify-content-center">
          <div className="col-sm-6 col-lg-4">
            <div className="text-center p-4">
              <a href="tel:+233557600158" className="text-decoration-none">
                <div className="rounded-circle shadow d-inline-flex align-items-center justify-content-center mb-3" style={{ width: 80, height: 80, background: '#008080', color: '#fff' }}>
                  <i className="bi bi-telephone-fill fs-2"></i>
                </div>
                <h6 style={{color: "#3D251E"}}>Phone</h6>
                <p className="mb-0">(055) 760-0158</p>
              </a>
            </div>
          </div>

          <div className="col-sm-6 col-lg-4">
            <div className="text-center p-4">
              <a href="https://www.instagram.com/sunriselaundryservice?igsh=eDE2MTV5ZmIybm0y" target='_blank' className="text-decoration-none">
                <div className="rounded-circle shadow d-inline-flex align-items-center justify-content-center mb-3" style={{ width: 80, height: 80, background: '#008080', color: '#fff' }}>
                  <i className="bi bi-instagram fs-2"></i>
                </div>
                <h6 style={{color: "#3D251E"}}>Instagram</h6>
                <p className="mb-0">@sunriselaundryservices</p>
              </a>
            </div>
          </div>

          <div className="col-sm-6 col-lg-4">
            <div className="text-center p-4">
              <a href="https://www.tiktok.com/@sunrise_laundryservice?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <div className="rounded-circle shadow d-inline-flex align-items-center justify-content-center mb-3" style={{ width: 80, height: 80, background: '#008080', color: '#fff' }}>
                  <i className="bi bi-tiktok fs-2"></i>
                </div>
                <h6 style={{color: "#3D251E"}}>TikTok</h6>
                <p className="mb-0">@sunrise_laundryservice</p>
              </a>
            </div>
          </div>
        </div> 
        </div>                
      </div>
    </section>

    <section>
      <div className="shadow rounded overflow-hidden" style={{height: '600px'}}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.5647563274387!2d0.08135467605459437!3d5.749829994572787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10208733f620c33b%3A0x5c3db980e23e679c!2sPrampram%20rd!5e0!3m2!1sen!2sgh!4v1708101548744!5m2!1sen!2sgh"
          width="100%" 
          height="100%" 
          style={{border: 0}}
          allow="fullscreen"
          allowFullScreen={true}
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </section>    

    {/* Footer */}
    <Footer />
      
    </div>
  );
};

export default Index;
