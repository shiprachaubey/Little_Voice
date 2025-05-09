import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/images/VoiceLogo.png';

const Chat: React.FC = () => {
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
    {
      type: 'agl',
      content: `Dear John Doe,

Thank you for contacting us regarding your recent electricity bill dated [Bill Date]. We sincerely apologize for any frustration or concern this matter has caused. Ensuring our customers feel confident and informed about their energy charges is a top priority for us.

We have received your dispute and understand your concerns regarding the significant increase in charges. To address this promptly, we have initiated a detailed review of your account, including:
• A verification of your billing history.`
    },
   
    {
      type: 'seccond',
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
  navigate('/chathistorys'); // change this to your route
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
    <p className="font-semibold text-blue-200 mb-2">
      ▾ {response.type === 'first' ? 'First Response' : 
         response.type === 'seccond' ? 'Second Response' : 
         response.type === 'agl' ? 'AGL Response' : 'Response'}
    </p>
    <p className="text-sm leading-relaxed text-white whitespace-pre-line">
      {response.content}
    </p>
  </div>
))}


</div>
        
      

        <div className="mb-6">
          <label className="block mb-2">AGI Response</label>
          <div className="bg-white text-[#2C3A5F] p-6 rounded-[10px] h-[200px] overflow-y-auto space-y-6 text-sm">
 
 

  {/* Second AI Response */}
  
</div>
<div className="flex items-center gap-4 mt-6">
<button
  onClick={() => navigate('/home')}
  className="bg-[#ED9A9A] hover:bg-red-400 text-white font-semibold mt-4 px-6 py-2 text-sm rounded-full flex items-center gap-2"
>
  <span className="text-white text-lg">✖</span> Close Case
</button>

<button
  onClick={() => navigate('/home')}
  className="bg-[#9AE69A] hover:bg-green-400 text-white font-semibold mt-4 px-6 py-2 text-sm rounded-full flex items-center gap-2 ml-4"
>
  <span className="text-white text-lg">✔</span> Mark As Successful
</button>

</div>

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

export default Chat;

