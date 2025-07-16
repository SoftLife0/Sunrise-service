import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { apiService } from '../services/apiService'
import shape1 from '../assets/shape1.png';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';


const Form = () => {
  const [formData, setFormData] = useState({customer_name: '',phone: '',preferred_date: '',preferred_time: '',pickup_address: '',service: '', notes: '', latitude: '', longitude: '', email: ''})
  const [serviceOptions, setServiceOptions] = useState([])
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }))
  }

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await apiService.get('/services/');
        console.log('Services:', response);
        setServiceOptions(response);

      } catch (error) {
        console.error('Error fetching Services:', error);
      }
    };

    fetchServices();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      console.log('Pickup Data:', formData)
      const response = await apiService.post('/request/', formData)
      console.log('Response:', response)
      toast.success("Pickup scheduled successfully!", { position: 'top-right', hideProgressBar: true });
      navigate('/prices')
      setFormData({customer_name: '',phone: '',preferred_date: '',preferred_time: '',pickup_address: '',service: '',notes: '',latitude: '',longitude: '',email: ''})
    } catch (error) {
      toast.error("Error scheduling pickup.", { position: 'top-right', hideProgressBar: true });
      console.error('Error scheduling pickup:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ backgroundColor: '#fff', paddingTop: '120px', color: '#000' }}>
        {/* Floating Shape Top Left */}
        {/* <img src={shape1} alt="Shape" className="position-absolute floating-shape" style={{top: '50px',left: 0,width: '80px',zIndex: 1,}}/> */}

        <Header />

        <div className="container mb-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="text-center mb-3">
                        <h6 className="mb-3" style={{color: '#008080'}}>Pickup Request Form</h6>
                        <h2 className="display-5 fw-bold">Schedule Your Pickup</h2>
                        <div className="mx-auto mt-3 mb-5" style={{ width: '60px', height: '3px', background: '#D3A745' }}></div>
                        <Link to="/prices" className="btn text-white btn-md " style={{background: '#008080'}}>Check Out Our Prices</Link>
                    </div>

                    <form className="card shadow-lg p-3 bg-light" onSubmit={handleSubmit}>
                        <div className="row g-4">
                            <div className="col-md-6">
                                <label htmlFor="customer_name" className="form-label fw-bold">Full Name</label>
                                <input 
                                  type="text" 
                                  className="form-control rounded-3" 
                                  id="customer_name" 
                                  value={formData.customer_name}
                                  onChange={handleChange}
                                  placeholder="Enter your full name"
                                  required 
                                />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="phone" className="form-label fw-bold">Phone Number</label>
                                <input 
                                  type="tel" 
                                  className="form-control rounded-3"
                                  id="phone"
                                  value={formData.phone}
                                  onChange={handleChange}
                                  placeholder="Enter your phone number"
                                  required 
                                />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="preferred_date" className="form-label fw-bold">Pickup Date</label>
                                <input 
                                  type="date" 
                                  className="form-control rounded-3"
                                  id="preferred_date"
                                  value={formData.preferred_date}
                                  onChange={handleChange}
                                  required 
                                />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="preferred_time" className="form-label fw-bold">Pickup Time</label>
                                <input 
                                  type="time" 
                                  className="form-control rounded-3"
                                  id="preferred_time"
                                  value={formData.preferred_time}
                                  onChange={handleChange}
                                  required 
                                />
                            </div>

                            <div className="row mt-3">
                              <div className="col-7">
                                    <label htmlFor="service" className="form-label fw-bold">Service Type</label>
                                    <div className="position-relative">
                                        <div 
                                            className="form-select rounded-3"
                                            onClick={() => setDropdownOpen(!dropdownOpen)}
                                            style={{cursor: 'pointer'}}
                                        >
                                            {formData.service.length ? `${formData.service.length} services selected` : 'Select services'}
                                        </div>
                                        
                                        {dropdownOpen && (
                                            <div className="dropdown position-absolute w-100 bg-white border rounded-3 mt-1" style={{zIndex: 1000}}>
                                                {Array.isArray(serviceOptions) && serviceOptions.length > 0 ? (
                                                    serviceOptions.map((service) => (
                                                        <label key={service.id} className="d-block px-3 py-2 m-0" style={{cursor: 'pointer'}}>
                                                            <input 
                                                                type="checkbox"
                                                                className="me-2"
                                                                checked={formData.service.includes(service.id)}
                                                                onChange={() => {
                                                                    const updatedServices = formData.service.includes(service.id)
                                                                        ? formData.service.filter(id => id !== service.id)
                                                                        : [...formData.service, service.id];
                                                                    setFormData(prev => ({...prev, service: updatedServices}));
                                                                }}
                                                            />
                                                            {service.name}
                                                        </label>
                                                    ))
                                                ) : (
                                                    <p className="m-0 p-3">No services available</p>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="col-5">
                                    <label className="form-label fw-bold">Duration</label>
                                    <select 
                                      className="form-select rounded-3"
                                      id="duration"
                                      value={formData.duration}
                                      onChange={handleChange}
                                    >
                                        <option value="">Select duration</option>
                                        <option value="Same Day Express">Same Day Express</option>
                                        <option value="Next Day Service">Next Day Service</option>
                                        <option value="2-Day Service">2-Day Service</option>
                                        <option value="3-Day Service">3-Day Service</option>                                        
                                        <option value="Others">Others</option>                                        
                                    </select>
                                </div>
                                
                            </div>

                            <div className="col-12">
                                <label htmlFor="pickup_address" className="form-label fw-bold">Pickup Address</label>
                                <textarea 
                                  className="form-control rounded-3"
                                  id="pickup_address" 
                                  rows="1"
                                  value={formData.pickup_address}
                                  onChange={handleChange}
                                  placeholder="Enter your pickup address"
                                  required
                                ></textarea>
                                <small className="text-muted">Please provide complete address including building/apartment number</small>
                            </div>

                            <div className="col-12">
                                <label htmlFor="notes" className="form-label fw-bold">Special Instructions</label>
                                <textarea
                                  className="form-control rounded-3"
                                  id="notes"
                                  rows="2"
                                  placeholder="Any special instructions for pickup?"
                                  value={formData.notes}
                                  onChange={handleChange}
                                ></textarea>
                            </div>

                            <div className="col-12 text-center mt-4">
                                <button type="submit" className="btn text-white btn-md px-5" style={{background: '#D3A745'}} disabled={loading}>
                                    {loading ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                            Processing...
                                        </>
                                    ) : (
                                        'Schedule Pickup'
                                    )}
                                </button>
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
