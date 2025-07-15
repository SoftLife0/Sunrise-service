import React from 'react'
import Header from '../../components/Header'


const Customer = () => {
  return (
    <div style={{
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
      color: '#2c3e50',
      position: 'relative',
      backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.9) 0%, rgba(248,249,250,0.9) 100%)'
    }}>
      {/* Floating Shape Top Left */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '400px',
        height: '400px',
        background: 'linear-gradient(45deg, rgba(74,222,222,0.15), rgba(74,222,222,0.25))',
        clipPath: 'polygon(0 0, 100% 0, 0 100%)',
        zIndex: 0,
        filter: 'blur(2px)'
      }} />

      {/* Header */}
      <Header />

      {/* Hero */}
      <section className="d-flex align-items-center position-relative" style={{ paddingTop: '100px' }}>
        <div className="container">
          <div className="position-relative" style={{ zIndex: 1 }}>
            <div className="d-flex justify-between align-items-center gap-4">
                <div>
                    <h4 className="card-title mb-3 d-flex align-items-center" style={{ fontSize: '2rem', fontWeight: '600' }}>
                    <i className="bi bi-grid-1x2-fill me-3" style={{ color: '#4ECDC4' }}></i>
                    Customers List
                    </h4>
                    <p className="input-label mb-4" style={{ color: "#6c757d", fontSize: '1.1rem' }}>Manage and view all your customers in one place</p>
                </div>               
            </div>     

            {/* Add Customer Button */}
            <button type="button" className="btn btn-primary mb-4 px-4 py-2" 
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
          </div>

          <div className="col-md-8 table-responsive mt-4">
            <table className="table table-hover shadow-sm bg-white rounded">
              <thead style={{ backgroundColor: '#f8f9fa' }}>
                <tr>
                  <th className="py-3">Name</th>
                  <th className="py-3">Phone</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3">John Doe</td>
                  <td className="py-3">+1 234 567 8900</td>
                </tr>
                <tr>
                  <td className="py-3">Jane Smith</td>
                  <td className="py-3">+1 234 567 8901</td>
                </tr>
              </tbody>
            </table>
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
                  <form>
                    <div className="mb-4">
                      <label htmlFor="customerName" className="form-label text-muted">Customer Name</label>
                      <input type="text" className="form-control" id="customerName" placeholder="Enter customer name"/>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="customerPhone" className="form-label text-muted">Phone Number</label>
                      <input type="tel" className="form-control" id="customerPhone" placeholder="Enter phone number"/>
                    </div>

                    <div className="flex items-center my-2">
                        <hr className="flex-grow border-t border-gray-300" />
                        <span className="px-3 text-gray-500 text-sm">or</span>
                        <hr className="flex-grow border-t border-gray-300" />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="customerPhoto" className="form-label text-muted">Bulk Upload</label>
                      <input type="file" className="form-control" id="customerPhoto" accept="image/*"/>
                    </div>
                  </form>
                </div>

                <div className="modal-footer border-top-0">
                  <button type="button" className="btn btn-light px-4" data-bs-dismiss="modal">Cancel</button>
                  <button type="button" className="btn btn-primary px-4" style={{ backgroundColor: '#4ECDC4', border: 'none' }}>Save Customer</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

export default Customer
