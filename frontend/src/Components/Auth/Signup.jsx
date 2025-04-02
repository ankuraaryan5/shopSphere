import React, { useState } from 'react'
import { BACKEND_URL } from '../../config/config'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import Header from '../Header'
import Navbar from '../Navbar'
import { FaUser } from 'react-icons/fa'
function Signup() {
    const [formData, setFormData] = useState({
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      phone: "",
      address: "",
      role: "customer",
    })
    const navigate = useNavigate()

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
      e.preventDefault()
      try {
        const response = await axios.post(`${BACKEND_URL}/api/v1/signup`, formData)
        console.log(response.data)
        // Handle successful login (e.g., store token, redirect user)
        navigate("/") // Example redirect
      } catch (error) {
        console.error("Login failed:", error)
      }
    }
  return (
    <div>
        <Header />
        <Navbar />
        <div className="flex flex-col w-full bg-cyan-800 text-white px-16 py-4 justify-center items-center gap-4">
        <h1 className="text-2xl font-bold text-accent">Signup</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-72 p-2 rounded-md border border-gray-400 text-black"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-72 p-2 rounded-md border border-gray-400 text-black"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-72 p-2 rounded-md border border-gray-400 text-black"
          />
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="w-72 p-2 rounded-md border border-gray-400 text-black"
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-72 p-2 rounded-md border border-gray-400 text-black"
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="w-72 p-2 rounded-md border border-gray-400 text-black"
          />

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Sign Up
          </button>
          <p className="text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Signup