import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Logo from '../assets/images/VoiceLogo.png';

const FinalSubmit: React.FC = () => {
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [showAiReply, setShowAiReply] = useState(false);
  const [userReply, setUserReply] = useState('');

  const toggleDetails = () => {
    setDetailsVisible(!detailsVisible);
  };

  const handleSubmit = () => {
    setShowAiReply(true);
  };

  return (
    <div className="min-h-screen text-white flex bg-slate-800">
   

      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header with back button */}
        <div className="flex items-center p-6 border-b border-slate-700">
          <button className="flex items-center text-sm text-gray-300 mr-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Previous
          </button>
          
          <div className="flex items-center">
            <h1 className="text-xl font-bold mr-4">AGL</h1>
            <div className="px-2 py-1 bg-slate-900 rounded-md text-xs">
              15 / 11 / 2024
            </div>
          </div>
        </div>

        {/* Main content - scrollable */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {/* Case Details Section */}
          <div className="mb-6 border-b border-slate-700 pb-4">
            <div 
              className="flex items-center cursor-pointer mb-2"
              onClick={toggleDetails}
            >
              <h2 className="font-medium">Case Details</h2>
              <span className="ml-1">{detailsVisible ? '▾' : '▸'}</span>
            </div>
            
            {detailsVisible && (
              <div className="mb-4">
                <div className="grid grid-cols-2 gap-6 mb-4">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Company Name</p>
                    <p className="font-medium">AGL</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Company Website</p>
                    <p className="font-medium">AGL.com.au</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Contact Name</p>
                    <p className="font-medium">James Andrew</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <p className="font-medium">support@agl.com.au</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Issue Details / History</p>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat felis dui, id luctus quam tristique vel. In luctus et turpis pharetra aliquet. Nunc eget metus nec odio ullamcorper imperdiet. Proin feugiat luctus eu odio lacinia gravida. Pellentesque fringilla eget leo tincidunt pretium. Vestibulum vel leo in urna ornare dictum. Fusce odio enim, blandit ac eros eu, euismod consectetur turpis. Aenean quis erat erat. Vestibulum sed placerat enim, eu lacinia velit. Sed eget aliquet est. Nullam placerat arcu a eros facilisis sodales.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Response History Section */}
          <div className="mb-6">
            <h2 className="font-medium mb-6">Response History</h2>

            {/* First Response Section */}
            <div className="mb-6">
              <div className="flex items-center mb-3">
                <span className="mr-2">▸</span>
                <h3 className="font-medium">First Response:</h3>
              </div>
              
              <div className="pl-6">
                <p className="mb-3">Dear [Energy Company Name or Customer Service Team],</p>
                <p className="mb-3">I am writing to express my extreme dissatisfaction with my recent electricity bill dated [Bill Date] for account number [Your Account Number]. The charges are outrageously high, far exceeding my usual bills without any reasonable explanation.</p>
                <p className="mb-3">For context:</p>
                <ul className="list-disc pl-6 mb-3">
                  <li>My average bill over the past [X months/years] has been approximately [Typical Amount].</li>
                  <li>This bill is [Amount], reflecting an unjustified increase of [Percentage].</li>
                  <li>I have made no significant changes to my energy usage, appliance usage, or household routines to warrant such a spike.</li>
                </ul>
              </div>
            </div>

            {/* AGL's Response Section */}
            <div className="mb-6">
              <div className="flex items-center mb-3">
                <span className="mr-2">▸</span>
                <h3 className="font-medium">AGL's Response:</h3>
              </div>
              
              <div className="pl-6">
                <p className="mb-3">Dear John Doe,</p>
                <p className="mb-3">Thank you for contacting us regarding your recent electricity bill dated [Bill Date]. We sincerely apologize for any frustration or concern this matter has caused. Ensuring our customers feel confident and informed about their energy charges is a top priority for us.</p>
                <p className="mb-3">We have received your dispute and understand your concerns regarding the significant increase in charges. To address this promptly, we have initiated a detailed review of your account, including:</p>
                <ul className="list-disc pl-6 mb-3">
                  <li>A verification of your billing history.</li>
                  <li>A comparison of current charges with past usage.</li>
                </ul>
              </div>
            </div>

            {/* Chat History - only shows after submit */}
            {showAiReply && (
              <div className="mb-6">
                <h3 className="font-medium mb-3">Chat History</h3>
                
                <div className="bg-white text-slate-800 rounded-md p-4 mb-4">
                  <p className="font-medium mb-2">AI Reply:</p>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat felis dui, id luctus quam tristique vel. In luctus et turpis pharetra aliquet. Nunc eget metus nec odio ullamcorper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat felis dui, id luctus quam tristique vel. In luctus et turpis pharetra aliquet. Nunc eget metus nec odio ullamcorper.
                  </p>
                </div>
                
                <div className="bg-white text-slate-800 rounded-md p-4">
                  <p className="font-medium mb-2">Your Reply:</p>
                  <textarea 
                    className="w-full border border-gray-300 rounded p-2 text-sm"
                    rows={4}
                    value={userReply}
                    onChange={(e) => setUserReply(e.target.value)}
                    placeholder="Type your reply here..."
                  ></textarea>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="p-4 border-t border-slate-700">
          <button 
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full flex items-center transition-colors"
            onClick={handleSubmit}
          >
            Submit
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>

      {/* Voices watermark */}
      <div className="absolute bottom-4 right-6 text-4xl font-bold text-slate-700 opacity-30">
        voices
      </div>
    </div>
  );
};

export default FinalSubmit;