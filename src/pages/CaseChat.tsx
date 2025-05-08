import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Logo from '../assets/images/VoiceLogo.png';

const CaseChat: React.FC = () => {
    const [showResponseOverlay, setShowResponseOverlay] = useState(false);
    // const handleAddToDraft = () => {
    //     const subject = encodeURIComponent('New Complaint Draft');
    //     const body = encodeURIComponent(`Dear [Energy Company Representative],\n\nThank you for your prompt response to my inquiry...`);
    //     window.open(`https://mail.google.com/mail/?view=cm&fs=1&tf=1&su=${subject}&body=${body}`, '_blank');
    //   };
    const handleAddToDraft = () => {
        const subject = encodeURIComponent('New Complaint Draft');
        const body = encodeURIComponent(
          `Dear [Energy Company Representative],\n\nThank you for your prompt response...`
        );
      
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&su=${subject}&body=${body}`;
        window.open(gmailUrl, '_blank');
      };
      
      
const navigate = useNavigate();

const handleSendViaLittleVoices = () => {
  navigate('/final-submit'); // change this to your route
};


  return (
    <div className="min-h-screen text-white flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="w-[70%] px-10 py-8 flex flex-col ml-[120px]">
        {/* Back Button */}
        <div className="flex items-center text-blue-200 cursor-pointer mb-6">
          <span className="mr-2">←</span>
          <span>Previous</span>
        </div>

        {/* Header with Date */}
        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-3xl font-bold">AGL</h1>
          <span className="bg-[#2A2F3A] px-4 py-1 rounded-full text-sm font-medium">
            15 / 11 / 2024
          </span>
        </div>

        {/* Company Details Dropdown */}
        <div className="text-xl font-semibold mb-4 flex items-center gap-1">
          Company Details <span className="text-lg">▾</span>
        </div>

        {/* Chat History */}
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

        </div>

        {/* Reply Input */}
        <div className="mb-6">
          <label className="block mb-2">Reply</label>
          <div className="flex">
            <input
              type="text"
              className="w-full px-4 py-2 text-black rounded-[10px]"
              defaultValue="Proin feugiat lectus eu odio lacinia gravida..."
            />
            <button className="bg-[#2A2F3A] px-4 py-2 rounded-r-md">
              Send →
            </button>
          </div>
        </div>

        {/* Approve Button */}
        <button
   onClick={() => setShowResponseOverlay(true)}
  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 text-sm rounded-full w-fit"
>
  Approve →
</button>
{showResponseOverlay && (
  <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center px-4">
  <div className="bg-[#2C3A5F] text-white rounded-2xl max-w-2xl w-full shadow-lg relative flex flex-col max-h-[90vh]">

      {/* Back Button */}
      <button
        className="absolute top-4 left-4 text-white text-lg"
        onClick={() => setShowResponseOverlay(false)}
      >
        ← Back
      </button>

      {/* Title */}
      <h2 className="text-2xl font-bold mb-6 mt-8 text-center">New Response</h2>

      {/* Letter Content */}
      <div className="overflow-y-auto px-6 py-4 text-sm leading-relaxed space-y-4">
        <p><strong>Dear [Energy Company Representative],</strong></p>
        <p>
          Thank you for your prompt response to my inquiry regarding the recent electricity bill. 
          While I appreciate your acknowledgment of my concerns and the steps being taken to review 
          the matter, I remain deeply dissatisfied with the current situation.
        </p>
        <p>
          Your suggestions about checking meter readings, potential changes in appliance use, or 
          energy plan rates are noted. However, I have already verified these factors on my end, 
          and I can confirm there have been no significant changes that would justify the substantial 
          increase in charges.
        </p>
        <p>
          I must stress the urgency of this matter. This unexplained spike in charges is causing 
          considerable inconvenience, and I expect a resolution to be provided promptly. 
          Specifically, I request:
        </p>
        
      </div>

      {/* Copy + Action Buttons */}
      <div className="mt-8 text-center">
        <p className="text-sm mb-4">Copy to Clipboard 📋</p>
        <div className="flex justify-center gap-4 flex-wrap">
        <button
  onClick={handleAddToDraft}
  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2"
>
  Add to My Drafts ✏️
</button>
<button
  onClick={handleSendViaLittleVoices}
  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2"
>
  Send via Little Voices 📩
</button>
        </div>
      </div>
    </div>
  </div>
)}



        {/* Logo at the bottom */}
        <div className="mt-auto flex justify-end">
        <img
    src={Logo}
    alt="Little Voices"
    className="absolute bottom-12 right-4 w-[120px] "
  />
        </div>
      </div>
    </div>
  );
};

export default CaseChat;


