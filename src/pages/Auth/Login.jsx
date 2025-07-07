import React, { useState } from 'react'
import { apiService } from '../../services/apiService'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {
    const [formData, setFormData] = useState({phone: '', password: ''})
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        })
    }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
        const response = await apiService.post('/login/', formData)
        console.log('Login response:', response)
        sessionStorage.setItem('user', JSON.stringify(response))
        toast.success("Login successful!", { position: 'top-right', hideProgressBar: true });
        navigate('/admin/dashboard')
        setFormData({phone: '', password: ''})
    } catch (error) {
        toast.error("Login failed. Please check your credentials.", { position: 'top-right', hideProgressBar: true });
      console.error('Login failed:', error)
    } finally {
        setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center" style={{backgroundColor: '#F5F5DC'}}>
      <div className="max-w-md w-full p-6 rounded-lg shadow-lg" style={{backgroundColor: '#008080'}}>
        <h2 className="text-2xl font-bold text-white text-center mb-8">Admin Login</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm font-medium text-white">Phone Number</label>
            <input
              type="text"
              name="phone"
              className="mt-1 block w-full px-3 py-2 border rounded-md"
              style={{borderColor: '#D3A745', backgroundColor: '#FFFDD0'}}
              placeholder="233**********"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-white">Password</label>
            <input
              type="password"
              name="password"
              className="mt-1 block w-full px-3 py-2 border rounded-md"
              style={{borderColor: '#D3A745', backgroundColor: '#FFFDD0'}}
              placeholder="********"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center justify-between">
            <a href="#" className="text-sm text-white hover:underline">Forgot password?</a>
          </div>

          <div className="flex justify-center">
            <button type="submit" className="w-50 py-2 px-4 d-flex justify-content-center align-items-center font-medium rounded-pill" style={{background: '#F5F5DC', color: "#008080"}} disabled={loading}>
                {loading ? (
                    <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Processing...
                    </>
                ) : (
                    'Sign in'
                )}
            </button>
        </div>
        </form>
      </div>
    </div>    
  )
}

export default Login
