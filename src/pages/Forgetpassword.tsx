import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Password reset link sent to:', email);
    alert('If this email is registered, you’ll receive a password reset link.');
  };

  return (
    <div className="min-h-screen bg-little-voices-navy flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md">
        <div className="flex justify-center mb-8">
          <img src={Logo} alt="Logo" className="h-30 w-100" />
        </div>

        <h2 className="text-center text-xl font-semibold text-gray-800 mb-6">Forgot Password</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-left">
            <label className="block mb-1 text-sm text-gray-900 font-bold">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 mt-2 rounded-xl bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600 transition-colors font-semibold text-lg"
          >
            Send Reset Link
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          <Link to="/" className="text-blue-500 hover:underline font-medium">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
