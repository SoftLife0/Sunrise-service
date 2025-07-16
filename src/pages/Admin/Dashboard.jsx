import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import StatusBadge from '../../components/StatusBadge';
import { Offcanvas } from 'react-bootstrap';
import { apiService } from '../../services/apiService';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Dashboard = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [pickupRequests, setPickupRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('');
  const [filterStatus, setFilterStatus] = useState('new');

  useEffect(() => {
    const token = sessionStorage.getItem('user');
    if (!token) {
      toast.error('Please login to access the dashboard');
      navigate('/admin/login');
      return;
    }
  }, [navigate]);

  const handleClose = () => setShow(false);
  const handleShow = (request) => {
    setSelectedRequest(request);
    setSelectedStatus(request.status);
    setShow(true);
  };

  const handleStatusChange = async (newStatus) => {
    if (!selectedRequest) return;
    setLoading(true);
    
    try {
      await apiService.patch(`/request/${selectedRequest.id}/status/`, {
        status: newStatus
      });
      toast.success('Status updated successfully!');
      
      setSelectedRequest({
        ...selectedRequest,
        status: newStatus
      });
      
      // Refresh pickup requests
      const response = await apiService.get(`/requests/${filterStatus ? `${filterStatus}` : 'new'}/`);
      setPickupRequests(response);
      setShow(false)
      
    } catch (error) {
      console.error('Error updating status:', error);
      toast.error('Failed to update status. Please try again.')
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchPickupRequests = async () => {
      try {
        const response = await apiService.get(`/requests/${filterStatus ? `${filterStatus}` : 'new'}/`);
        console.log('Pickup Requests:', response);
        console.log("Api Url", {url: `/requests/${filterStatus ? `${filterStatus}` : 'new'}/`})
        setPickupRequests(response);
      } catch (error) {
        console.error('Error fetching pickup requests:', error);
        if (error.response?.status === 401) {
          toast.error('Session expired. Please login again');
          navigate('/login');
        }
      }
    };  
    fetchPickupRequests();
  }, [navigate, filterStatus]);

  const cardData = [
    {
        title: "New Request", 
        value: pickupRequests?.stats?.new_requests || "0",
        subtext: "New pickup requests",
        icon: <i className="bi bi-archive"></i>,
        gradient: "linear-gradient(45deg, #4ECDC4, #45B7AF)",
        link: "#",
    },
    {
        title: "All Requests",
        value: pickupRequests?.stats?.total_requests || "0",
        subtext: "Total pickup requests", 
        icon: <i className="bi bi-clipboard-check"></i>,
        gradient: "linear-gradient(45deg, #FF6B6B, #FF8E8E)",
        link: "#",
    },
    {
        title: "All Customers",
        value: pickupRequests?.stats?.total_customers || "0",
        subtext: "View customers list",
        icon: <i className="bi bi-person"></i>,
        gradient: "linear-gradient(45deg, #D3A745, #D3A745)",
        link: "/admin/customer",
    },
    {
        title: "SMS Balance",
        value: pickupRequests?.stats?.sms_credits || "0",
        subtext: "Total sms credit left",
        icon: <i className="bi bi-envelope-paper"></i>,
        gradient: "linear-gradient(45deg, #6B5B95, #9B8FBC)",
        link: "#",
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
              <div key={index} className="col-md-3">
                <Link to={card.link}>
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
                </Link>
              </div>
            ))}
          </div>

          <hr className='my-5' style={{opacity: 0.1}} />

          <div className="position-relative" style={{ zIndex: 1 }}>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="card-title d-flex align-items-center">
                <i className="bi bi-clock-history me-2" style={{ color: '#4ECDC4' }}></i>
                 {filterStatus.charAt(0).toUpperCase() + filterStatus.slice(1)} Requests ({pickupRequests?.filtered_count || "0"})                                                   
              </h4>
              <select 
                className="form-select" 
                style={{width: 'auto'}}
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="new">Pending Pickup</option>
                <option value="washing">In Wash</option>
                <option value="ready">Ready for Return</option>
                <option value="delivered">Completed</option>
              </select>
            </div>
          </div>


          <div className="row g-4 mb-5">
            {Array.isArray(pickupRequests?.requests) && pickupRequests?.requests.length > 0 ? (
              pickupRequests.requests.map((request, index) => (
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
              ))
            ) : (
              <div className="col-12 text-center">
                <div className="p-5">
                  <h5>No requests found for this status</h5>
                </div>
              </div>
            )}            
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

                    {selectedRequest.status === 'delivered' ? (
                      <div className="alert alert-info">
                        This request has been delivered and no further action can be taken.
                      </div>
                    ) : (
                      <div className="d-flex gap-2 align-items-center">
                        <select 
                          className="form-select"
                          value={selectedStatus}
                          onChange={(e) => setSelectedStatus(e.target.value)}
                        >
                          <option value="picked_up">Pending Pickup</option>
                          <option value="washing">In Wash</option>
                          <option value="ready">Ready for Return</option>
                          <option value="delivered">Completed</option>
                        </select>
                        <button 
                          className="btn btn-primary" 
                          disabled={loading} 
                          onClick={() => handleStatusChange(selectedStatus)}
                        >
                          {loading ? (
                            <>
                              <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                            </>
                          ) : (
                            "Update"
                          )}
                        </button>
                      </div>
                    )}                    
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
                      <div className="row">
                        <div className="col-md-6 mb-3">
                            <small className="text-muted d-block mb-1">Preferred Time</small>
                            <div className="d-flex align-items-center">
                                <i className="bi bi-clock me-2"></i>
                                {selectedRequest.preferred_time}
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <small className="text-muted d-block mb-1">Preferred Date</small>
                            <div className="d-flex align-items-center">
                                <i className="bi bi-calendar3 me-2"></i>
                                {selectedRequest.preferred_date}
                            </div>
                        </div>
                      </div>
                      <div className="mb-3">
                          <small className="text-muted d-block mb-1">Services</small>
                          <div className="d-flex align-items-center">
                              <i className="bi bi-basket me-2"></i>
                              {selectedRequest?.service?.map((service, index) => (
                                <span key={service.id}>
                                   {service.name} 
                                   {index < selectedRequest.service.length - 1 ? ', ' : ''}  
                                </span>
                              )) || "N/A"}
                          </div>
                      </div>
                      
                      <div className="mb-3">
                          <small className="text-muted d-block mb-1">Duration</small>
                          <div className="d-flex align-items-center">
                              <i className="bi bi-calendar3 me-2"></i>
                              {selectedRequest.duration}
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
                </div>
            )}
            </Offcanvas.Body>          
        </Offcanvas>
    </div>
  )
}

export default Dashboard
