import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/s.png';

const Header = () => {
  return (
    <header className="border-bottom fixed-top shadow-sm z-3" >
      <nav className="navbar navbar-expand-lg fixed-top bg-white ">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/"><img src={logo} alt="Sunrise Logo" className="navbar-brand" style={{ height: '70px' }} /></Link>
          
          <a href="tel:+233557600158" className="btn text-white btn-md px-4 py-2" style={{background: "#008080"}} >Contact Us</a>
        </div>
      </nav>
      
    </header>
  );
};

export default Header;
