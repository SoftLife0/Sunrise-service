import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Index from './pages/Index'


function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
        <ToastContainer position="top-right" hideProgressBar={true} newestOnTop closeOnClick pauseOnHover theme="dark"/>
      </div>
    </Router>
  )
}

export default App
