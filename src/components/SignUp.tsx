
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/images/logo.png';

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { fullName, company, email, phone, password, confirmPassword, agreeToTerms } = formData;

    if (!fullName || !company || !email || !phone || !password || !confirmPassword) {
      alert("All fields are required");
      return;
    }

    if (!agreeToTerms) {
      alert("Please agree to the Terms & Conditions");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

 const payload = {
  fullname: formData.fullName, // ✅ lowercase "n" for backend compatibility
  company: formData.company,
  email: formData.email,
  phone: formData.phone,
  password: formData.password,
  confirmPassword: formData.confirmPassword
};


    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      console.log('📦 Raw response:', data);
      console.log('📦 Status code:', response.status);

      if (response.ok) {
      console.log('✅ Signup successful:', data);
  localStorage.setItem('token', data.token);             // ← store the JWT token
  localStorage.setItem('user', JSON.stringify(data.user)); // optional
  navigate('/home');
      
      } else {
        alert(data.message || 'Signup failed');
      }
    } catch (error) {
      console.error('❌ Error during signup:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-little-voices-navy flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-xl md:max-w-2xl">
        <div className="flex justify-center mb-6">
          <img src={Logo} alt="Logo" className="h-20 w-auto" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block mb-1 text-sm text-gray-900 font-bold">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full text-black px-4 py-2 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-900 font-bold">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company"
              className="w-full text-black px-4 py-2 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-900 font-bold">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full text-black px-4 py-2 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-900 font-bold">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full text-black px-4 py-2 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-900 font-bold">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full text-black px-4 py-2 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-900 font-bold">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="w-full text-black px-4 py-2 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-sm text-gray-600">
              I agree to the Terms & Conditions
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 mt-6 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/" className="text-blue-500 hover:text-blue-600">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
