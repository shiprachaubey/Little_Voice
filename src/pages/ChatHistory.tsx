import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/images/VoiceLogo.png';

const ChatHistory2: React.FC = () => {
  const [detailsVisible, setDetailsVisible] = useState(true);
    const [showResponseOverlay, setShowResponseOverlay] = useState(false);

  const responseHistory = [
    {
      type: 'first',
      content: `Dear [Energy Company Name or Customer Service Team],

I am writing to express my extreme dissatisfaction with my recent electricity bill dated [Bill Date] for account number [Your Account Number]. The charges are outrageously high, far exceeding my usual bills without any reasonable explanation.

For context:
• My average bill over the past [X months/years] has been approximately [Typical Amount].
• This bill is [Amount], reflecting an unjustified increase of [Percentage].
• I have made no significant changes to my energy usage, appliance usage, or household routines to warrant such a spike.`
    },

   
  ];

  const toggleDetails = () => {
    setDetailsVisible(!detailsVisible);
  };

 const handleAddToDraft = () => {
      const subject = encodeURIComponent('New Complaint Draft');
      const body = encodeURIComponent(
        `Dear [Energy Company Representative],\n\nThank you for your prompt response...`
      );
    
      const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?subject=${subject}&body=${body}`;
      window.open(outlookUrl, '_blank');
    };
    
      
const navigate = useNavigate();

const handleSendViaLittleVoices = () => {
  navigate('/chat'); // change this to your route
};

  return (
    <div className="min-h-screen text-white flex bg-little-voices-navy ">
      <Sidebar />

      <div className="w-[70%] px-10 py-8 flex flex-col ml-[120px]">
        {/* Back Button */}
        <div className="flex items-center text-blue-200 cursor-pointer mb-6">
          <span className="mr-2">←</span>
          <span>Previous</span>
        </div>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-3xl font-bold">AGL</h1>
          <span className="bg-[#2A2F3A] px-4 py-1 rounded-full text-sm font-medium">
            15 / 11 / 2024
          </span>
        </div>

        {/* Case Details Section */}
        <div className="mb-10 border-b border-[#475371] pb-6">
          <div 
            className="text-lg font-semibold mb-4 flex items-center cursor-pointer" 
            onClick={toggleDetails}
          >
            <span>Case Details</span>
            <span className="text-sm ml-2">{detailsVisible ? '▾' : '▸'}</span>
          </div>
          
          {detailsVisible && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
              <div className="col-span-2">
                <p className="text-sm text-gray-400 mb-1">Issue Details / History</p>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat felis dui, id luctus quam tristique vel. In luctus et turpis pharetra aliquet...
                </p>
              </div>
            </>
          )}
        </div>

        {/* Response History */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold mb-4">Response History</h2>

          {responseHistory.map((response, index) => (
            <div className="mb-6" key={index}>
              <p className="font-semibold text-blue-200 mb-2">▾ First Response:</p>
              <p className="text-sm leading-relaxed text-white whitespace-pre-line">
                {response.content}
              </p>
            </div>
          ))}
            {responseHistory.map((response, index) => (
            <div className="mb-6" key={index}>
              <p className="font-semibold text-blue-200 mb-2">▾ Second Response:</p>
              <p className="text-sm leading-relaxed text-white whitespace-pre-line">
                {response.content}
              </p>
            </div>
          ))}
        </div>


        <div className="mb-6">
          <label className="block mb-2">Chat History</label>
          <div className="bg-white text-[#2C3A5F] p-6 rounded-[10px] h-[400px] overflow-y-auto space-y-6 text-sm">
  {/* Desired Outcome */}
  <div>
    <p className="font-semibold mb-1">Desired Outcome:</p>
    <p className="font-medium">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat felis dui, id luctus quam tristique vel. In luctus et turpis pharetra aliquet. Nunc eget metus nec odio ullamcorper imperdiet. Proin feugiat lectus eu odio lacinia gravida. Pellentesque fringilla eget leo tincidunt pretium.
    </p>
  </div>

  {/* AI Response */}
  <div>
    <p className="text-blue-600 font-semibold mb-1">AI Response:</p>
    <p className="font-medium">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat felis dui, id luctus quam tristique vel...
    </p>
  </div>

  {/* Your Reply */}
  <div>
    <p className="font-semibold mb-1">Your Reply:</p>
    <p className="font-medium">
      Proin feugiat lectus eu odio lacinia gravida. Pellentesque fringilla eget leo tincidunt pretium.
    </p>
  </div>

  {/* Second AI Response */}
  <div>
    <p className="text-blue-600 font-semibold mb-1">AI Response:</p>
    <p className="font-medium whitespace-pre-line">
      Dear [Energy Company Name or Customer Service Team],{'\n\n'}
      I am writing to express my extreme dissatisfaction with my recent electricity bill dated [Bill Date] for account number [Your Account Number]. The charges are outrageously high, far exceeding my usual bills without any reasonable explanation.{'\n\n'}
      For context:{'\n'}
      • My average bill over the past [X months/years] has been approximately [Typical Amount].
    </p>
  </div>
</div>
<button
   onClick={() => setShowResponseOverlay(true)}
  className="bg-blue-500 hover:bg-blue-600 text-white mt-4 px-4 py-1.5 text-sm rounded-full w-fit"
>
  Approve →
</button>
   {/* Response Overlay */}
{showResponseOverlay && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
    <div className="bg-little-voices-navy text-white rounded-xl shadow-lg w-[720px] max-h-[60vh] flex flex-col p-10 relative overflow-hidden">
      
      {/* Back Button */}
      <div className="flex items-center mb-4">
        <button
          onClick={() => setShowResponseOverlay(false)}
          className="flex items-center text-white hover:text-gray-300"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </button>
      </div>

      {/* Title */}
      <h2 className="text-4xl font-bold mb-6">Final Response</h2>

      {/* Scrollable Content */}
      <div className="overflow-y-auto flex-grow pr-4 space-y-6">
        <p>Dear [Energy Company Name or Customer Service Team],</p>
        <p>
          I am writing to express my extreme dissatisfaction with my recent electricity bill...
        </p>
        <p>For context:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>My average bill over the past [X months/years] has been approximately [Typical Amount].</li>
          <li>This bill is [Amount], reflecting an unjustified increase of [Percentage].</li>
          <li>I have made no significant changes...</li>
        </ul>
        <p>Frankly, I find this situation unacceptable...</p>
        <p>I request:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>A thorough investigation...</li>
          <li>A detailed breakdown...</li>
          <li>Adjustment of my bill...</li>
          <li>Confirmation this won’t recur...</li>
        </ul>
        <p>Please address this matter urgently...</p>
        <p>Sincerely,<br />[Your Name]<br />[Your Contact Info]</p>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-center gap-4 mt-6 pt-4 border-t border-gray-700">
        <button
          onClick={handleAddToDraft}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-sm"
        >
          Add to My Drafts
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </button>

        <button
          onClick={handleSendViaLittleVoices}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-sm"
        >
          Send via Little Voices
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
)}


        </div>

  <div className="mt-auto flex justify-end">
  <img
  src={Logo}
  alt="Little Voices"
  className="fixed bottom-4 right-4 w-[120px] z-40"
/>
        </div>
      </div>
    </div>
  );
};

export default ChatHistory2;

