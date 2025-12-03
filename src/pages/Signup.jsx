import { useState } from "react";
import { signupUser } from "../api/auth";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signupUser(form);
      alert("Signup successful!");
      navigate("/"); // redirect to login
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow w-full max-w-sm">
        <h2 className="text-3xl font-bold mb-6 text-center">Create Account</h2>

        <input 
          name="name" 
          placeholder="Full Name" 
          className="w-full border p-3 rounded mb-4" 
          onChange={handleChange} 
        />

        <input 
          name="email" 
          type="email" 
          placeholder="Email" 
          className="w-full border p-3 rounded mb-4" 
          onChange={handleChange} 
        />

        <input 
          name="password" 
          type="password" 
          placeholder="Password" 
          className="w-full border p-3 rounded mb-6" 
          onChange={handleChange} 
        />

        <button className="w-full bg-blue-600 rounded text-white p-3">Sign Up</button>
      </form>
    </div>
  );
}
