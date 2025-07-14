import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/s3.png';

const Footer = () => {
  return (
    <footer className="py-5  text-gray bg-white text-center"> 
      <div className="container">
        <div className="mx-auto text-center d-flex justify-content-center align-items-center">
          <Link to="/admin/login">
            <img src={logo} alt="Sunrise Laundry" className="footer-logo mb-2" style={{height: "70px"}} />
          </Link>
        </div>
        <hr />     
        <h6 className="mb-3">© {new Date().getFullYear()}. All rights reserved, <a href="https://mirjy.com" style={{textDecoration: "none", color: "#008080"}}>Mirjy Technologies Ltd</a>.</h6>   
      </div>
    </footer>
  )
}

export default Footer
