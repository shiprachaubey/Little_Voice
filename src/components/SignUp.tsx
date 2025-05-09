import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
const SignUp = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Sign up:', formData);
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-little-voices-navy flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-12 w-full max-w-md">
        
      <div className="flex justify-center mb-8">
          <img src={Logo} alt="Logo" className="h-30 w-100" />
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
          <label className="block mb-1 mt-12 text-sm text-gray-900 font-bold ">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company"
              className="w-full text-black px-4 py-3 mt-2 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:border-blue-500"
            />
          </div>
          
          <div>
          <label className="block mb-1 mt-4 text-sm text-gray-900 font-bold ">Email Address </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full  text-black px-4 py-3 mt-2 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:border-blue-500"
            />
          </div>
          
          <div>
          <label className="block mb-1 mt-4 text-sm text-gray-900 font-bold ">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full  text-black px-4 py-3 mt-2 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:border-blue-500"
            />
          </div>
          
          <div>
          <label className="block mb-1 mt-4 text-sm text-gray-900 font-bold ">password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full text-black px-4 py-3 mt-2 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:border-blue-500"
            />
          </div>
          
          <div>
          <label className="block mb-1 mt-4 text-sm text-gray-900 font-bold ">Confirm password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="w-full text-black px-4 py-3 mt-2 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:border-blue-500"
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