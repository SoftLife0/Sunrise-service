import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/s.png';

const Header = () => {
  return (
    <header className="border-bottom fixed-top shadow-sm z-3" >
      <nav className="navbar navbar-expand-lg fixed-top bg-white ">
        <div className="container">
          {/* <Link className="navbar-brand fw-bold text-black" to="/">🌅 Sunrise</Link> */}
          <img src={logo} alt="Sunrise Logo" className="navbar-brand" style={{ height: '80px', width: '100px' }} />
          
          <a href="tel:+233557600158" className="btn text-white btn-md px-4 py-2" style={{background: "#008080"}} >Contact Us</a>
          
          

          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button> */}

          {/* <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Features</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Pricing</a></li>
              <li className="nav-item">
                <a className="btn btn-primary ms-lg-3 px-4 py-2" href="#">Get Started</a>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
      
    </header>
  );
};

export default Header;
