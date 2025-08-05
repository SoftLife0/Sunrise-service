import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import { apiService } from '../../services/apiService';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Customer = () => {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);
  const [formData, setFormData] = useState({name: '', phone: '', file: null})
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false);
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [message, setMessage] = useState('');
  const [selectAll, setSelectAll] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editCustomer, setEditCustomer] = useState(null);
  const [reports, setReports] = useState([]);


  useEffect(() => {
    const token = sessionStorage.getItem('user');
    if (!token) {
      toast.error('Please login to access the dashboard');
      navigate('/admin/login');
      return;
    }
    fetchCustomers()
    fetchReport()
  }, [navigate]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.position-relative')) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);


  useEffect(() => {
    if(selectAll) {
      setSelectedCustomers(customers.map(customer => customer.phone));
    } else {
      setSelectedCustomers([]);
    }
  }, [selectAll, customers]);

  const handleDelete = async (customerId) => {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      try {
        await apiService.delete(`/customers/${customerId}/delete`);
        toast.success('Customer deleted successfully');
        fetchCustomers();
      } catch (err) {
        console.error('Error deleting customer:', err);
        toast.error('Error deleting customer');
      }
    }
  }

  const handleEdit = (customer) => {
    setEditMode(true);
    setEditCustomer(customer);
    setFormData({ name: customer.name, phone: customer.phone });
    // document.querySelector('[data-bs-dismiss="modal"]').click()
    const modal = new window.bootstrap.Modal(document.getElementById('addCustomerModal'));
    modal.show();
  }

  const resetForm = () => {
    setFormData({ name: '', phone: '', file: null });
    setEditMode(false);
    setEditCustomer(null);
    setError('');
  };

  useEffect(() => {
    const modal = document.getElementById('addCustomerModal');
    modal?.addEventListener('hidden.bs.modal', resetForm);
    return () => modal?.removeEventListener('hidden.bs.modal', resetForm);
  }, []);


  const fetchCustomers = async () => {
    try {
      const response = await apiService.get('/customers')
      console.log('Customers:', response)
      setCustomers(response?.requests)
    } catch (err) {
      console.error('Error fetching customers:', err)
    }
  }

  const fetchReport = async () => {
    try {
      const response = await apiService.get('/sms-history')
      console.log('Report:', response)
      setReports(response || [])     
    } catch (err) {
      console.error('Error fetching report:', err)
    }
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id === 'customerName' ? 'name' : e.target.id === 'customerPhone' ? 'phone' : e.target.name]: e.target.value
    })
  }

  const handleFileChange = (e) => {
    setFormData({...formData,
      file: e.target.files[0],
      name: '',
      phone: ''
    })
  }

  const handleCustomerSelect = (phone) => {
    setSelectedCustomers(prev => {
      if(prev.includes(phone)) {
        return prev.filter(p => p !== phone);
      } else {
        return [...prev, phone];
      }
    });
  }

  const handleMessageSubmit = async (e) => {
    if (!window.confirm(`Send this message to ${selectedCustomers.length} customers?`)) return;

    e.preventDefault();
    setLoading(true);
    try {
      const response = await apiService.post('/send-message/', {recipients: selectedCustomers,message: message});
      console.log('Message sent:', response);
      toast.success('Message sent successfully!');
      setMessage('');
      setSelectedCustomers([]);
      setSelectAll(false);
      document.querySelector('[data-bs-dismiss="modal"]').click()
    } catch (err) {
      console.error('Error sending message:', err);
      toast.error('Error sending message. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    if (!formData.file && (!formData.name || !formData.phone)) {
      setError('Please either fill in both name and phone, or upload a file')
      return
    }

    // if (!/^\d{10,15}$/.test(formData.phone)) {
    //   setError('Enter a valid phone number');
    //   return;
    // }


    try {
      if (editMode && editCustomer) {
        await apiService.post(`/customers/${editCustomer.id}/update/`, {
          name: formData.name,
          phone: formData.phone
        });
        toast.success('Customer updated successfully!');
      } else {
        if (formData.file) {
          const formPayload = new FormData()
          formPayload.append('file', formData.file)
          await apiService.post('/add-or-upload-customer/', formPayload)
        } else {
          await apiService.post('/add-or-upload-customer/', {name: formData.name, phone: formData.phone})
        }
        toast.success('File uploaded successfully!')
      }

      setFormData({ name: '', phone: '', file: null })
      fetchCustomers()
      fetchReport()
      setEditMode(false)
      setEditCustomer(null)
      document.querySelector('[data-bs-dismiss="modal"]').click()
    } catch (err) {
      const errorMessage = err?.response?.data?.detail
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', color: '#2c3e50', position: 'relative', backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.9) 0%, rgba(248,249,250,0.9) 100%)'}}>
      {/* Floating Shape Top Left */}
      <div style={{position: 'absolute',top: 0,left: 0,width: '400px',height: '400px',background: 'linear-gradient(45deg, rgba(74,222,222,0.15), rgba(74,222,222,0.25))',clipPath: 'polygon(0 0, 100% 0, 0 100%)',zIndex: 0,filter: 'blur(2px)'}} />

      {/* Header */}
      <Header />

      {/* Hero */}
      <section className="d-flex align-items-center position-relative" style={{ paddingTop: '100px' }}>
        <div className="container">
          <div className="position-relative" style={{ zIndex: 1 }}>
            <div className="d-flex justify-between align-items-center gap-4">
                <div>
                  <h4 className="card-title mb-2 d-flex align-items-center"><i className="bi bi-phone me-2" style={{ color: '#4ECDC4' }}></i>Customer List</h4>
                  <p className="input-label mb-4" style={{ color: "#6c757d", fontSize: '1.1rem' }}>Manage and view all your customers in one place</p>
                </div>   

                <button onClick={() => navigate(-1)} className="btn btn-outline-secondary mb-4 px-4 py-2" style={{boxShadow: '0 2px 4px rgba(0,0,0,0.1)', transition: 'all 0.3s ease'}}>Back</button>                
            </div>     

            {/* Add Customer Button */}
            <button type="button" className="btn btn-primary mb-4 px-4 py-2 me-2" 
              style={{ 
                backgroundColor: '#4ECDC4', 
                border: 'none', 
                boxShadow: '0 2px 4px rgba(78,205,196,0.3)',
                transition: 'all 0.3s ease'
              }}
              data-bs-toggle="modal" 
              data-bs-target="#addCustomerModal">
              <i className="bi bi-plus-circle me-2"></i>Add New Customer
            </button>

            <button type="button" className="btn btn-primary mb-4 px-4 py-2" 
              style={{ 
                backgroundColor: '#FF6B6B', 
                border: 'none', 
                boxShadow: '0 2px 4px rgba(78,205,196,0.3)',
                transition: 'all 0.3s ease'
              }}
              data-bs-toggle="modal" 
              data-bs-target="#broadcastModal">
              <i className="bi bi-broadcast me-2"></i>Broadcast Message
            </button>
          </div>


          <div className="row">
            <div className="col-md-7 table-responsive my-4" style={{ maxHeight: '600px', overflowY: 'auto' }}>
              <table className="table table-hover shadow-sm bg-white rounded">
                <thead style={{ backgroundColor: '#f8f9fa', position: 'sticky', top: 0, zIndex: 1 }}>
                  <tr>
                    <th className="py-3">Name</th>
                    <th className="py-3">Phone</th>
                    <th className="py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer, index) => (
                    <tr key={index}>
                      <td className="py-3">{customer.name}</td>
                      <td className="py-3">{customer.phone}</td>
                      <td className="py-3">
                        <button onClick={() => handleEdit(customer)} className="btn btn-sm me-2" style={{ backgroundColor: '#4ECDC4', border: 'none' }}>
                          <i className="bi bi-pencil"></i>
                        </button>
                        <button onClick={() => handleDelete(customer.id)} className="btn btn-danger btn-sm me-2" style={{ backgroundColor: '#FF6B6B', border: 'none' }}>
                          <i className="bi bi-trash"></i>
                        </button>
                      </td>                    
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="col-md-5 table-responsive mt-4" style={{ maxHeight: '600px', overflowY: 'auto' }}>
              <h6>Message Report</h6>
              <table className="table table-hover shadow-sm bg-white rounded">
                <thead style={{ backgroundColor: '#f8f9fa', position: 'sticky', top: 0, zIndex: 1 }}>
                  <tr>
                    <th className="py-3">Phone</th>
                    <th className="py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {reports.map((report) => (
                    <tr key={report?.id}>
                      <td className="py-3">{report.phone}</td>
                      <td className="py-3">
                        <span className={`badge ${report.status === 'DELIVERED' ? 'bg-success' : report.status === 'NOT_DELIVERED' ? 'bg-danger' : 'bg-secondary'}`}>
                          {report.status}
                        </span>
                      </td>                      
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Add Customer Modal */}
          <div className="modal fade" id="addCustomerModal" tabIndex="-1" aria-labelledby="addCustomerModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content border-0 shadow">
                <div className="modal-header border-bottom-0">
                  <h5 className="modal-title" id="addCustomerModalLabel" style={{ color: '#2c3e50', fontWeight: '600' }}>Add New Customer</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body px-4">
                  <form onSubmit={handleSubmit}>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <div className="mb-4">
                      <label htmlFor="customerName" className="form-label text-muted">Customer Name</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="customerName" 
                        placeholder="Enter customer name"
                        value={formData.name}
                        onChange={handleInputChange}
                        disabled={editMode ? false : formData.file !== null}
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="customerPhone" className="form-label text-muted">Phone Number</label>
                      <input 
                        type="tel" 
                        className="form-control" 
                        id="customerPhone" 
                        placeholder="Enter phone number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        disabled={editMode ? false : formData.file !== null}
                      />
                    </div>

                    <div className="flex items-center my-2">
                        <hr className="flex-grow border-t border-gray-300" />
                        <span className="px-3 text-gray-500 text-sm">or</span>
                        <hr className="flex-grow border-t border-gray-300" />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="customerPhoto" className="form-label text-muted">Bulk Upload</label>
                      <input 
                        type="file" 
                        className="form-control" 
                        id="customerPhoto" 
                        accept=".csv,.xlsx,.xls"
                        onChange={handleFileChange}
                        disabled={formData.name !== '' || formData.phone !== ''}
                      />
                    </div>
                  
                    <div className="modal-footer border-top-0">
                      <button type="button" className="btn btn-light px-4" data-bs-dismiss="modal">Cancel</button>
                      <button onClick={handleSubmit} disabled={loading} className="btn btn-primary px-4" style={{ backgroundColor: '#4ECDC4', border: 'none' }}>
                        {loading ? (
                          <>
                            <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                          </>
                        ) : (
                          editMode ? "Update Customer" : "Save Customer"
                        )}
                        
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Broadcast Modal */}
          <div className="modal fade" id="broadcastModal" tabIndex="-1" aria-labelledby="broadcastModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content border-0 shadow">
                <div className="modal-header border-bottom-0">
                  <h5 className="modal-title" id="broadcastModalLabel" style={{ color: '#2c3e50', fontWeight: '600' }}>Send Broadcast Message</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body px-4">
                  <form onSubmit={handleMessageSubmit}>

                    <div className="mb-4">
                      <label className="form-label fw-bold">Select Customers</label>
                      <div className="position-relative">
                        <div 
                          className="form-select rounded-3"
                          onClick={() => setDropdownOpen(prev => !prev)}
                          style={{ cursor: 'pointer' }}
                        >
                          {selectedCustomers.length
                            ? `${selectedCustomers.length} customers selected`
                            : 'Click to select customers'}
                        </div>

                        {dropdownOpen && (
                          <div
                            className="dropdown position-absolute w-100 bg-white border rounded-3 mt-1"
                            style={{ maxHeight: '200px', overflowY: 'auto', zIndex: 1000 }}
                          >
                            <div className="px-3 py-2 border-bottom">
                              <input
                                type="checkbox"
                                className="me-2"
                                checked={selectedCustomers.length === customers.length}
                                onChange={() => {
                                  if (selectedCustomers.length === customers.length) {
                                    setSelectedCustomers([]);
                                  } else {
                                    setSelectedCustomers(customers.map(c => c.phone));
                                  }
                                }}
                              />
                              <label className="form-check-label">Select All</label>
                            </div>

                            {customers.length ? (
                              customers.map((customer, index) => (
                                <label
                                  key={customer.id}
                                  className="d-block px-3 py-2 m-0"
                                  style={{ cursor: 'pointer' }}
                                >
                                  <input
                                    type="checkbox"
                                    className="me-2"
                                    checked={selectedCustomers.includes(customer.phone)}
                                    onChange={() => {
                                      setSelectedCustomers(prev =>
                                        prev.includes(customer.phone)
                                          ? prev.filter(p => p !== customer.phone)
                                          : [...prev, customer.phone]
                                      );
                                    }}
                                  />
                                  {customer.name} ({customer.phone})
                                </label>
                              ))
                            ) : (
                              <p className="m-0 p-3">No customers available</p>
                            )}
                          </div>
                        )}
                      </div>
                    </div>


                    <div className="mb-4">
                      <label htmlFor="message" className="form-label text-muted">Message</label>
                      <textarea 
                        className="form-control" 
                        id="message"
                        rows="4"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Enter your message"
                      />
                    </div>
                    <div className="modal-footer border-top-0">
                      <button type="button" className="btn btn-light px-4" data-bs-dismiss="modal">Cancel</button>
                      <button 
                        type="submit" 
                        disabled={loading || selectedCustomers.length === 0 || !message} 
                        className="btn btn-primary px-4" 
                        style={{ backgroundColor: '#4ECDC4', border: 'none' }}
                      >
                        {loading ? (
                          <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                        ) : (
                          "Send Message"
                        )}

                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
};

export default Customer
