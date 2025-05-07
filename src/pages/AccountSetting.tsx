import React from 'react';
import Sidebar from '../components/Sidebar';

const AccountSettings = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 bg-[#2C3553] text-white p-8">
        <h1 className="text-2xl font-semibold mb-6">Account Settings</h1>

        <div className="bg-white/10 rounded-lg p-6 max-w-xl">
          <div className="mb-4">
            <label className="block text-sm mb-1">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 rounded bg-white text-black"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">Email Address</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full px-4 py-2 rounded bg-white text-black"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded bg-white text-black"
            />
          </div>

          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Update Settings
          </button>
        </div>
      </main>
    </div>
  );
};

export default AccountSettings;