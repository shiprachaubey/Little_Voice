// import React, { useState } from 'react';
// import Sidebar from '../components/Sidebar';
// import { useNavigate } from 'react-router-dom';

// const FinalSubmit: React.FC = () => {
//   const [detailsVisible, setDetailsVisible] = useState(true);

//   const responseHistory = [
//     {
//       type: 'first',
//       content: `Dear [Energy Company Name or Customer Service Team],

// I am writing to express my extreme dissatisfaction with my recent electricity bill dated [Bill Date] for account number [Your Account Number]. The charges are outrageously high, far exceeding my usual bills without any reasonable explanation.

// For context:
// • My average bill over the past [X months/years] has been approximately [Typical Amount].
// • This bill is [Amount], reflecting an unjustified increase of [Percentage].
// • I have made no significant changes to my energy usage, appliance usage, or household routines to warrant such a spike.`
//     },
//     {
//       type: 'agl',
//       content: `Dear John Doe,

// Thank you for contacting us regarding your recent electricity bill dated [Bill Date]. We sincerely apologize for any frustration or concern this matter has caused. Ensuring our customers feel confident and informed about their energy charges is a top priority for us.

// We have received your dispute and understand your concerns regarding the significant increase in charges. To address this promptly, we have initiated a detailed review of your account, including:
// • A verification of your billing history.`
//     }
//   ];

//   const toggleDetails = () => {
//     setDetailsVisible(!detailsVisible);
//   };

//   const navigate = useNavigate();
//   const handleSubmit = () => {
//     navigate('/chat-history', { state: { responseHistory } });
//   };

//   return (
//     <div className=" min-h-screen bg-little-voices-navy  text-white flex ">
//       <Sidebar />

//       <div className="w-[70%] px-10 py-8 flex flex-col ml-[120px]">
//         {/* Back Button */}
//         <div className="flex items-center text-blue-200 cursor-pointer mb-6">
//           <span className="mr-2">←</span>
//           <span>Previous</span>
//         </div>

//         {/* Header */}
//         <div className="flex items-center gap-4 mb-6">
//           <h1 className="text-3xl font-bold">AGL</h1>
//           <span className="bg-[#2A2F3A] px-4 py-1 rounded-full text-sm font-medium">
//             15 / 11 / 2024
//           </span>
//         </div>

//         {/* Case Details Section */}
//         <div className="mb-10 border-b border-[#475371] pb-6">
//           <div 
//             className="text-lg font-semibold mb-4 flex items-center cursor-pointer" 
//             onClick={toggleDetails}
//           >
//             <span>Case Details</span>
//             <span className="text-sm ml-2">{detailsVisible ? '▾' : '▸'}</span>
//           </div>
          
//           {detailsVisible && (
//             <>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                 <div>
//                   <p className="text-sm text-gray-400 mb-1">Company Name</p>
//                   <p className="font-medium">AGL</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-400 mb-1">Company Website</p>
//                   <p className="font-medium">AGL.com.au</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-400 mb-1">Contact Name</p>
//                   <p className="font-medium">James Andrew</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-400 mb-1">Email</p>
//                   <p className="font-medium">support@agl.com.au</p>
//                 </div>
//               </div>
//               <div className="col-span-2">
//                 <p className="text-sm text-gray-400 mb-1">Issue Details / History</p>
//                 <p className="text-sm">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat felis dui, id luctus quam tristique vel. In luctus et turpis pharetra aliquet...
//                 </p>
//               </div>
//             </>
//           )}
//         </div>

//         {/* Response History */}
//         <div className="mb-10">
//           <h2 className="text-lg font-semibold mb-4">Response History</h2>

//           {responseHistory.map((response, index) => (
//             <div className="mb-6" key={index}>
//               <p className="font-semibold text-blue-200 mb-2">
//                 ▾ {response.type === 'first' ? 'First Response:' : 'AGL\'s Response:'}
//               </p>
//               <div className={`text-sm p-4 rounded-md whitespace-pre-line ${
//                 response.type === 'agl' ? 'bg-white text-black' : 'text-white'
//               }`}>
//                 {response.content}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Submit Button */}
//         <button 
//           className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full text-sm w-fit flex items-center"
//           onClick={handleSubmit}
//         >
//           Submit
//           <span className="ml-2">→</span>
//         </button>

//         {/* Logo */}
//         <div className="mt-auto flex justify-end">
//           <div className="w-[120px] sm:w-[100px] xs:w-[80px] mt-10 text-4xl font-bold text-slate-700 opacity-30">
//             voices
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FinalSubmit;

import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';

const FinalSubmit: React.FC = () => {
  const [detailsVisible, setDetailsVisible] = useState(true);
  const navigate = useNavigate();

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
    }
  ];

  const toggleDetails = () => setDetailsVisible(!detailsVisible);

  const handleSubmit = () => {
    navigate('/chat-history', { state: { responseHistory } });
  };

  return (
    <div className="min-h-screen bg-little-voices-navy text-white flex flex-col md:flex-row">
      <Sidebar />

      <div className="flex-1 px-4 md:px-10 py-8 md:ml-[120px] w-full max-w-[900px]">
        {/* Back Button */}
        <div className="flex items-center text-blue-200 cursor-pointer mb-6">
          <span className="mr-2">←</span>
          <span>Previous</span>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">AGL</h1>
          <span className="bg-[#2A2F3A] px-4 py-1 rounded-full text-sm font-medium w-fit">
            15 / 11 / 2024
          </span>
        </div>

        {/* Case Details Toggle */}
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
              <div>
                <p className="text-sm text-gray-400 mb-1">Issue Details / History</p>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat felis
                  dui, id luctus quam tristique vel. In luctus et turpis pharetra aliquet...
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
                ▾ {response.type === 'first' ? 'First Response:' : "AGL's Response:"}
              </p>
              <div
                className={`text-sm p-4 rounded-md whitespace-pre-line ${
                  response.type === 'agl' ? 'bg-white text-black' : 'text-white'
                }`}
              >
                {response.content}
              </div>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full text-sm w-fit flex items-center"
        >
          Submit
          <span className="ml-2">→</span>
        </button>

        {/* Logo (Text Version) */}
        <div className="mt-12 flex justify-end">
          <div className="text-3xl font-bold text-slate-700 opacity-30">voices</div>
        </div>
      </div>
    </div>
  );
};

export default FinalSubmit;

