import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Index from './pages/Index'
import Prices from './pages/Prices';


function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/prices" element={<Prices />} />
          {/* Add more routes as needed */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
        <ToastContainer position="top-right" hideProgressBar={true} newestOnTop closeOnClick pauseOnHover theme="dark"/>
      </div>
    </Router>
  )
}

export default App
