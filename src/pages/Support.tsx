
import React, { useState, ChangeEvent, FC } from 'react';
import Sidebar from '../components/Sidebar';
import Logo from '../assets/images/VoiceLogo.png';


const Support: FC = () => {

  return (
    <div className="min-h-screen bg-little-voices-navy text-white flex">
      <Sidebar />
      <div className="flex-1 ml-[120px] px-10 py-8">
        {/* Back Button */}
        <div className="flex items-center text-blue-200 cursor-pointer mb-6">
          <span className="mr-2">←</span>
          <span>Back</span>
        </div>

        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-6">Support Tickets </h1>

        <div className="space-y-6 w-full max-w-[900px]">
        <button
            
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full mt-4"
          >
            Next →
          </button>
        
        </div>
      </div>

      <img
        src={Logo}
        alt="Little Voices"
        className="absolute bottom-12 right-4 w-[120px]"
      />
    </div>
  );
};

export default Support;
