import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Index from './pages/Index'
import Prices from './pages/Prices';
import Form from './pages/Form';
import Dashboard from './pages/Admin/Dashboard';
import Login from './pages/Auth/Login';
import Customer from './pages/Admin/Customer';

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/form" element={<Form />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/customer" element={<Customer />} />
          {/* Add more routes as needed */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
        <ToastContainer position="top-right" hideProgressBar={true} newestOnTop closeOnClick pauseOnHover theme="light"/>
      </div>
    </Router>
  )
}

export default App
