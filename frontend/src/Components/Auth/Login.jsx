import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../Header";
import Navbar from "../Navbar";
import { BACKEND_URL } from "../../config/config";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/login`, formData);
      console.log(response.data);
      // Handle successful login (e.g., store token, redirect user)
      navigate("/"); // Example redirect
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
      <Header />
      <Navbar />
      <div className="flex flex-col w-full bg-cyan-800 text-white px-16 py-4 justify-center items-center gap-4">
        <h1 className="text-2xl font-bold text-accent">Login</h1>
        <form 
          onSubmit={handleSubmit} 
          className="flex flex-col gap-4 justify-center items-center w-full"
        >
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-72 p-2 rounded-md border border-gray-400 text-black"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-72 p-2 rounded-md border border-gray-400 text-black"
            required
          />
          <button type="submit" className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition">
            <FaUser />
            <p>Login</p>
          </button>
        </form>
        <p className="text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-300 hover:underline">Register here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
