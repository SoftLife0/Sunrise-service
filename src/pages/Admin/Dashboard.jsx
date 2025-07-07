import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import StatusBadge from '../../components/StatusBadge';
import { Offcanvas } from 'react-bootstrap';
import { apiService } from '../../services/apiService';


const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [pickupRequests, setPickupRequests] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = (request) => {
    setSelectedRequest(request);
    setShow(true);
  };

  useEffect(() => {
    const fetchPickupRequests = async () => {
      try {
        const response = await apiService.get('/requests/new/');
        console.log('Pickup Requests:', response);
        setPickupRequests(response);
      } catch (error) {
        console.error('Error fetching pickup requests:', error);
      }
    };  
    fetchPickupRequests();
  }, []);

  const cardData = [
    {
        title: "New Request",
        value: pickupRequests?.count || "0",
        subtext: "New pickup requests",
        icon: <i className="bi bi-archive"></i>,
        gradient: "linear-gradient(45deg, #FF6B6B, #FF8E8E)"
    },
    {
        title: "All Requests",
        value: "0", 
        subtext: "Total pickup requests",
        icon: <i className="bi bi-clipboard-check"></i>,
        gradient: "linear-gradient(45deg, #4ECDC4, #45B7AF)"
    },
    {
        title: "All Customers",
        value: "0",
        subtext: "View customers list",
        icon: <i className="bi bi-person"></i>,
        gradient: "linear-gradient(45deg, #FFD93D, #FFE566)"
    }
  ];

  return (
    <div style={{ 
      backgroundColor: '#f1f2f4',
      minHeight: '100vh',
      color: '#000',
      position: 'relative',
      backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8) 0%, rgba(241,242,244,0.8) 100%)'
    }}>
      {/* Floating Shape Top Left */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '300px',
        height: '300px',
        background: 'linear-gradient(45deg, rgba(74,222,222,0.1), rgba(74,222,222,0.2))',
        clipPath: 'polygon(0 0, 100% 0, 0 100%)',
        zIndex: 0
      }} />

      {/* Header */}
      <Header />

      {/* Hero */}
      <section className="d-flex align-items-center position-relative" style={{ paddingTop: '120px' }}>
        <div className="container">
          <div className="position-relative" style={{ zIndex: 1 }}>
            <h4 className="card-title mb-2 d-flex align-items-center">
              <i className="bi bi-grid-1x2-fill me-2" style={{ color: '#4ECDC4' }}></i>
              Request Overview
            </h4>
            <p className="input-label" style={{ color: "#ae3b3b" }}>A summary of your sales and pickup requests</p>
          </div>

          <div className="row g-4 mb-4">
            {cardData.map((card, index) => (
              <div key={index} className="col-md-4">
                <div className="card shadow-lg h-100 border-0" 
                  style={{
                    borderRadius: '20px',
                    background: card.gradient,
                    transform: 'translateY(0)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div className="card-body p-5" style={{ color: '#fff' }}>
                    <div className="mb-3" style={{fontSize: '2rem'}}>{card.icon}</div>
                    <div className="mb-1">
                      <h6 className="card-title mb-2">{card.title}</h6>
                      <h4 className="mb-0" style={{fontSize: '2.5rem'}}>{card.value}</h4>
                    </div>
                    <small className="mb-0" style={{opacity: 0.8}}>{card.subtext}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <hr className='my-5' style={{opacity: 0.1}} />

          <div className="position-relative" style={{ zIndex: 1 }}>
            <h4 className="card-title mb-4 d-flex align-items-center">
              <i className="bi bi-clock-history me-2" style={{ color: '#4ECDC4' }}></i>
              Recent Request
            </h4>
          </div>


          <div className="row g-4 mb-5">
            {Array.isArray(pickupRequests?.requests) && pickupRequests?.requests.map((request, index) => (
              <div key={index} className="col-md-4">
                <div className="card shadow-lg h-100 border-0" 
                  style={{
                    borderRadius: '20px',
                    background: 'rgba(255,255,255,0.9)',
                    backdropFilter: 'blur(10px)',
                    transform: 'translateY(0)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <small className="text-muted">
                        <i className="bi bi-calendar3 me-1"></i>
                        {request?.preferred_date} - {request.preferred_time}
                      </small>
                      <StatusBadge status={request.status} statusType="status" />
                    </div>
                    <h5 className="card-title mb-3 fw-bold">{request.customer_name}</h5>
                    <div className="d-flex align-items-center mb-2 text-secondary">
                      <i className="bi bi-geo-alt me-2"></i>
                      <span>{request.pickup_address}</span>
                    </div>
                    <div className="d-flex align-items-center text-secondary">
                      <i className="bi bi-telephone me-2"></i>
                      <span>{request.phone}</span>
                    </div>
                    <hr className="my-3" style={{opacity: 0.1}} />
                    <div className="d-flex justify-content-end">
                      <button 
                        className="btn btn-outline-secondary btn-sm" 
                        onClick={() => handleShow(request)}
                      >
                        <i className="bi bi-arrow-right me-2"></i>
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Request Details</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {selectedRequest && (
                <div>
                <div className="mb-4">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <small className="text-muted">Current Status:</small>
                        <StatusBadge status={selectedRequest.status} statusType="status" />
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                        <select 
                            className="form-select"
                            value={selectedRequest.status}
                            onChange={(e) => handleStatusChange(e.target.value)}
                        >
                            <option value="PENDING_PICKUP">Pending Pickup</option>
                            <option value="IN_WASH">In Wash</option>
                            <option value="READY_FOR_RETURN">Ready for Return</option>
                            <option value="COMPLETED">Completed</option>
                        </select>
                        <button className="btn btn-primary" onClick={() => handleStatusChange(selectedRequest.status)}>
                            Update
                        </button>
                    </div>
                </div>

                <div className="card border-0 shadow-sm mb-4">
                        <div className="card-body">
                            <h5 className="card-title mb-3">Customer Details</h5>
                            <div className="mb-3">
                                <small className="text-muted d-block mb-1">Name</small>
                                <div className="d-flex align-items-center">
                                    <i className="bi bi-person me-2"></i>
                                    {selectedRequest.customer_name}
                                </div>
                            </div>
                            <div className="mb-3">
                                <small className="text-muted d-block mb-1">Phone</small>
                                <div className="d-flex align-items-center">
                                    <i className="bi bi-telephone me-2"></i>
                                    {selectedRequest.phone}
                                </div>
                            </div>
                            <div className="mb-3">
                                <small className="text-muted d-block mb-1">Pickup Date</small>
                                <div className="d-flex align-items-center">
                                    <i className="bi bi-calendar3 me-2"></i>
                                    {selectedRequest.preferred_date}
                                </div>
                            </div>
                            <div className="mb-3">
                                <small className="text-muted d-block mb-1">Address</small>
                                <div className="d-flex align-items-center">
                                    <i className="bi bi-geo-alt me-2"></i>
                                    {selectedRequest.pickup_address}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card border-0 shadow-sm mb-4">
                        <div className="card-body">
                            <h5 className="card-title mb-3">Order Details</h5>
                            <div className="mb-3">
                                <small className="text-muted d-block mb-1">Items</small>
                                <ul className="list-unstyled">
                                    <li className="d-flex justify-content-between mb-2">
                                        <span>T-Shirts</span>
                                        <span>x3</span>
                                    </li>
                                    <li className="d-flex justify-content-between mb-2">
                                        <span>Pants</span>
                                        <span>x2</span>
                                    </li>
                                    <li className="d-flex justify-content-between mb-2">
                                        <span>Jackets</span>
                                        <span>x1</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="mb-3">
                                <small className="text-muted d-block mb-1">Special Instructions</small>
                                <p className="mb-0">Please handle with care, delicate materials</p>
                            </div>
                        </div>
                    </div>

                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title mb-3">Pricing Details</h5>
                            <div className="mb-3">
                                <ul className="list-unstyled">
                                    <li className="d-flex justify-content-between mb-2">
                                        <span>T-Shirts (3x)</span>
                                        <span>$15.00</span>
                                    </li>
                                    <li className="d-flex justify-content-between mb-2">
                                        <span>Pants (2x)</span>
                                        <span>$20.00</span>
                                    </li>
                                    <li className="d-flex justify-content-between mb-2">
                                        <span>Jackets (1x)</span>
                                        <span>$25.00</span>
                                    </li>
                                    <li className="d-flex justify-content-between mt-3 pt-2 border-top">
                                        <strong>Total</strong>
                                        <strong>$60.00</strong>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            </Offcanvas.Body>          
        </Offcanvas>
    </div>
  )
}

export default Dashboard
