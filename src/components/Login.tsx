import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/images/logo.png';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
   
    console.log('Login:', { username, password });
    navigate('/home');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md">
        <div className="flex justify-center mb-8">
        <img src={Logo} alt="Logo" className="h-30 w-100" />
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
  <div className="text-left">
    <label className="block mb-1 mt-12 text-sm text-gray-900 font-bold ">Username</label>
    <input
      type="text"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      placeholder="Enter your username"
      className="w-full px-4 py-3 mt-2 rounded-xl bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>

  <div className="text-left">
    <label className="block mb-1 mt-6 text-sm text-gray-900 font-bold">Password</label>
    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Enter your password"
      className="w-full px-4 py-3 mt-2 rounded-xl bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    <div className="mt-2 text-right">
      <a href="#" className="text-sm text-blue-500 hover:underline">
        Forgot Password?
      </a>
    </div>
  </div>

  <button
    type="submit"
    className="w-full bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600 transition-colors font-semibold text-lg"
  >
    Log In
  </button>
</form>

<div className="mt-6 text-center text-sm text-gray-600">
  Don’t have an account?{' '}
  <Link to="/signup" className="text-blue-500 hover:underline font-medium">
    Sign Up.
  </Link>
</div>

      </div>
    </div>
  );
};

export default Login;