import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="py-4 bg-dark text-white text-center">
      <div className="container">
        <p className="mb-0">© {new Date().getFullYear()} Sunrise Laundry Service. All rights reserved.</p>        
        <p className="mb-0">Made with ❤️ by Mirjy <Link to="/admin/dashboard">Tech</Link>.</p>
      </div>
    </footer>
  )
}

export default Footer
