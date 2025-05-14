import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/images/logo.png';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!username || !password) {
    alert("All fields are required.");
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: username,
        password: password
      }),
    });

    const data = await response.json();

    if (response.ok) {
      // ✅ Save token and user info
      localStorage.setItem('token', data.token); // 🔐 Store the JWT for future API calls
      localStorage.setItem('user', JSON.stringify(data.user));
      navigate('/account-setting');
    } else {
      if (data.msg?.toLowerCase().includes("user not found")) {
        const goToSignup = confirm("User not found. Would you like to sign up?");
        if (goToSignup) navigate('/signup');
      } else {
        alert(data.msg || "Invalid credentials. Please try again.");
      }
    }
  } catch (error) {
    console.error('Login error:', error);
    alert("Something went wrong. Please try again.");
  }
};



  return (
    <div className="min-h-screen bg-little-voices-navy flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md">
        <div className="flex justify-center mb-8">
          <img src={Logo} alt="Logo" className="h-30 w-100" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-left">
            <label className="block mb-1 mt-12 text-sm text-gray-900 font-bold">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full px-4 py-3 mt-2 rounded-xl bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            />
          </div>

          <div className="text-left">
            <label className="block mb-1 mt-6 text-sm text-gray-900 font-bold">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-3 mt-2 rounded-xl bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            />
            <div className="mt-2 text-right">
              <Link to="/forgot-password" className="text-sm text-blue-500 hover:underline">
                Forgot Password?
              </Link>
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
