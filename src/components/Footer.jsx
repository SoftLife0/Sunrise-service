import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/s.png';

const Footer = () => {
  return (
    <footer className="py-5  text-white text-center" style={{background: "#008080"}}> 
      <div className="container">
        <div className="mx-auto text-center d-flex justify-content-center align-items-center">
            <img src={logo} alt="Sunrise Laundry" className="footer-logo mb-2" style={{height: "70px"}} />
        </div>
        <p className="mb-0">© {new Date().getFullYear()} Sunrise Laundry Service. All rights reserved.</p>        
        <p className="mb-0">Powered by Mirjy <Link to="/admin/dashboard">Tech</Link>.</p>
      </div>
    </footer>
  )
}

export default Footer
