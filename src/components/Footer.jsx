import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/s.png';

const Footer = () => {
  return (
    <footer className="py-5  text-white text-center" style={{background: "#008080"}}> 
      <div className="container">
        <div className="mx-auto text-center d-flex justify-content-center align-items-center">
          <Link to="/admin/login">
            <img src={logo} alt="Sunrise Laundry" className="footer-logo mb-2" style={{height: "70px"}} />
          </Link>
        </div>
        <hr />     
        <small className="mb-3">© {new Date().getFullYear()}. All rights reserved.</small>   
        <h6 className="mb-0">Powered by <a to="https://www.mirjy.com" style={{textDecoration: "none"}}>Mirjy Technologies Ltd</a></h6>
      </div>
    </footer>
  )
}

export default Footer
