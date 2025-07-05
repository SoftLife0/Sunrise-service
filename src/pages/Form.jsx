import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { apiService } from '../services/apiService'
import shape1 from '../assets/shape1.png';
import { Link } from 'react-router-dom'


const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    address: '',
    service: ''
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await apiService.post('/pickup-requests', formData)
      if(response.ok) {
        // Handle success
        alert('Pickup scheduled successfully!')
        setFormData({
          name: '',
          phone: '',
          date: '',
          time: '',
          address: '',
          service: ''
        })
      }
    } catch (error) {
      // Handle error
      console.error('Error scheduling pickup:', error)
      alert('Slow down there, ah no finish yet 😂.')
    }
  }

  return (
    <div style={{ backgroundColor: '#fff', paddingTop: '80px', color: '#000' }}>
        {/* Floating Shape Top Left */}
        <img src={shape1} alt="Shape" className="position-absolute floating-shape" style={{top: '50px',left: 0,width: '80px',zIndex: 1,}}/>

        <Header />

        <div className="container mb-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="text-center mb-3">
                        <h6 className="mb-3 text-primary">Pickup Request Form</h6>
                        <h2 className="display-5 fw-bold">Schedule Your Pickup</h2>
                        <div className="bg-black mx-auto mt-3 mb-5" style={{ width: '60px', height: '3px' }}></div>
                        <Link to="/prices" className="btn text-white btn-md " style={{background: '#e03e2c'}}>Check Out Our Prices</Link>
                    </div>

                    <form className="card shadow-lg p-3 bg-light" onSubmit={handleSubmit}>
                        <div className="row g-4">
                            <div className="col-md-6">
                                <label htmlFor="name" className="form-label fw-bold">Full Name</label>
                                <input 
                                  type="text" 
                                  className="form-control form-control-lg rounded-3" 
                                  id="name" 
                                  value={formData.name}
                                  onChange={handleChange}
                                  placeholder="Enter your full name"
                                  required 
                                />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="phone" className="form-label fw-bold">Phone Number</label>
                                <input 
                                  type="tel" 
                                  className="form-control form-control-lg rounded-3"
                                  id="phone"
                                  value={formData.phone}
                                  onChange={handleChange}
                                  placeholder="Enter your phone number"
                                  required 
                                />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="date" className="form-label fw-bold">Pickup Date</label>
                                <input 
                                  type="date" 
                                  className="form-control form-control-lg rounded-3"
                                  id="date"
                                  value={formData.date}
                                  onChange={handleChange}
                                  required 
                                />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="time" className="form-label fw-bold">Pickup Time</label>
                                <input 
                                  type="time" 
                                  className="form-control form-control-lg rounded-3"
                                  id="time"
                                  value={formData.time}
                                  onChange={handleChange}
                                  required 
                                />
                            </div>

                            <div className="col-12">
                                <label htmlFor="service" className="form-label fw-bold">Service Type</label>
                                <select 
                                  className="form-select form-select-lg rounded-3"
                                  id="service"
                                  value={formData.service}
                                  onChange={handleChange}
                                  required
                                >
                                    <option value="">Select a service</option>
                                    <option value="standard">Standard Pickup</option>
                                    <option value="express">Express Pickup</option>
                                    <option value="same-day">Same Day Pickup</option>
                                </select>
                            </div>

                            <div className="col-12">
                                <label htmlFor="address" className="form-label fw-bold">Pickup Address</label>
                                <textarea 
                                  className="form-control rounded-3"
                                  id="address" 
                                  rows="1"
                                  value={formData.address}
                                  onChange={handleChange}
                                  placeholder="Enter your pickup address"
                                  required
                                ></textarea>
                                <small className="text-muted">Please provide complete address including building/apartment number</small>
                            </div>

                            <div className="col-12">
                                <label htmlFor="note" className="form-label fw-bold">Additional Notes</label>
                                <textarea
                                  className="form-control rounded-3"
                                  id="note"
                                  rows="2"
                                  placeholder="Any special instructions for pickup?"
                                ></textarea>
                            </div>

                            <div className="col-12 text-center mt-4">
                                <button type="submit" className="btn btn-primary btn-md px-5 rounded-pill">Schedule Pickup</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <Footer />

    </div>
  )
}

export default Form
