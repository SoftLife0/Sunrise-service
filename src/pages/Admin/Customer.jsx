import React from 'react'
import Header from '../../components/Header'


const Customer = () => {
  return (
    <div style={{backgroundColor: '#f1f2f4', minHeight: '100vh', color: '#000', position: 'relative', backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8) 0%, rgba(241,242,244,0.8) 100%)'}}>
      {/* Floating Shape Top Left */}
      <div style={{position: 'absolute',top: 0,left: 0,width: '300px',height: '300px',background: 'linear-gradient(45deg, rgba(74,222,222,0.1), rgba(74,222,222,0.2))',clipPath: 'polygon(0 0, 100% 0, 0 100%)',zIndex: 0}} />

      {/* Header */}
      <Header />

        {/* Hero */}
        <section className="d-flex align-items-center position-relative" style={{ paddingTop: '120px' }}>
            <div className="container">
                <div className="position-relative" style={{ zIndex: 1 }}>
                    <h4 className="card-title mb-2 d-flex align-items-center">
                    <i className="bi bi-grid-1x2-fill me-2" style={{ color: '#4ECDC4' }}></i>
                    Customers List
                    </h4>
                    <p className="input-label" style={{ color: "#ae3b3b" }}>A list of all customers</p>
                </div>

                <div className="col-md-6 table-responsive mt-4">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Map through customers data here */}
                            <tr>
                                <td>John Doe</td>
                                <td>+1 234 567 8900</td>
                            </tr>
                            <tr>
                                <td>Jane Smith</td>
                                <td>+1 234 567 8901</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </section>

    </div>
  )
}

export default Customer