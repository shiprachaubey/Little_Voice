// import React from 'react';
// import Sidebar from '../components/Sidebar';
// import Logo from '../assets/images/VoiceLogo.png';

// const FinalSubmit: React.FC = () => {
//   return (
//     <div className="min-h-screen text-white flex">
//       <Sidebar />

//       <div className="w-[70%] px-10 py-8 flex flex-col ml-[120px]">
//         {/* Back Button */}
//         <div className="flex items-center text-blue-200 cursor-pointer mb-6">
//           <span className="mr-2">←</span>
//           <span>Previous</span>
//         </div>

//         {/* Header */}
//         <div className="flex items-center gap-4 mb-6 ">
//           <h1 className="text-3xl font-bold">AGL</h1>
//           <span className="bg-[#2A2F3A] px-4 py-1 rounded-full text-sm font-medium ">
//             15 / 11 / 2024
//           </span>
//         </div>

//         {/* Case Details Section */}
//         <div className="mb-10 border-b border-[#475371] pb-6">
//           <div className="text-lg font-semibold mb-4">Case Details <span className="text-sm">▾</span></div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 ">
//           <div>
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
//           </div>
//           <div className="col-span-2">
//                   <p className="text-sm text-gray-400 mb-1">Issue Details / History</p>
//                   <p className="text-sm">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat felis dui, id luctus quam tristique vel. In luctus et turpis pharetra aliquet. Nunc eget metus nec odio ullamcorper imperdiet. Proin feugiat luctus eu odio lacinia gravida. Pellentesque fringilla eget leo tincidunt pretium. Vestibulum vel leo in urna ornare dictum. Fusce odio enim, blandit ac eros eu, euismod consectetur turpis. Aenean quis erat erat. Vestibulum sed placerat enim, eu lacinia velit. Sed eget aliquet est. Nullam placerat arcu a eros facilisis sodales.
//                   </p>
//                 </div>
//         </div>

//         {/* Response History */}
//         <div className="mb-10">
//           <h2 className="text-lg font-semibold mb-4">Response History</h2>

//           <div className="mb-6">
//             <p className="font-semibold text-blue-200 mb-2">▾ First Response:</p>
//             <p className="text-sm leading-relaxed text-white">
//               Dear [Energy Company Name or Customer Service Team],<br /><br />
//               I am writing to express my extreme dissatisfaction with my recent electricity bill dated [Bill Date]...
//               <ul className="list-disc pl-6 mt-2">
//                 <li>My average bill over the past [X months/years] has been approximately [Typical Amount].</li>
//                 <li>This bill is [Amount], reflecting an unjustified increase of [Percentage].</li>
//                 <li>I have made no significant changes to my energy usage...</li>
//               </ul>
//             </p>
//           </div>

//           <div>
//             <p className="font-semibold text-blue-200 mb-2">▾ AGL's Response:</p>
//             <textarea
//               className="w-full text-black text-sm p-4 rounded-md resize-y min-h-[200px]"
//               defaultValue={`Dear John Doe,\n\nThank you for contacting us regarding your recent electricity bill dated [Bill Date]...`}
//             />
//           </div>
//         </div>

//         {/* Submit Button */}
//         <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full text-sm w-fit">
//           Submit →
//         </button>

//         {/* Logo */}
//         <div className="mt-auto flex justify-end">
//           <img
//             src={Logo}
//             alt="Little Voices"
//             className="w-[120px] sm:w-[100px] xs:w-[80px] mt-10"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FinalSubmit;
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Logo from '../assets/images/VoiceLogo.png';

const FinalSubmit: React.FC = () => {
  const [detailsVisible, setDetailsVisible] = useState(true);
  const [showAiReply, setShowAiReply] = useState(false);
  const [userReply, setUserReply] = useState('');  

  
  const toggleDetails = () => {
    setDetailsVisible(!detailsVisible);
  };

  return (
    <div className="min-h-screen text-white flex bg-slate-800">
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat felis dui, id luctus quam tristique vel. In luctus et turpis pharetra aliquet. Nunc eget metus nec odio ullamcorper imperdiet. Proin feugiat luctus eu odio lacinia gravida. Pellentesque fringilla eget leo tincidunt pretium. Vestibulum vel leo in urna ornare dictum. Fusce odio enim, blandit ac eros eu, euismod consectetur turpis. Aenean quis erat erat. Vestibulum sed placerat enim, eu lacinia velit. Sed eget aliquet est. Nullam placerat arcu a eros facilisis sodales.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Response History */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold mb-4">Response History</h2>

          <div className="mb-6">
            <p className="font-semibold text-blue-200 mb-2">▾ First Response:</p>
            <p className="text-sm leading-relaxed text-white">
              Dear [Energy Company Name or Customer Service Team],<br /><br />
              I am writing to express my extreme dissatisfaction with my recent electricity bill dated [Bill Date] for account number [Your Account Number]. The charges are outrageously high, far exceeding my usual bills without any reasonable explanation.
              <br /><br />
              For context:
              <ul className="list-disc pl-6 mt-2">
                <li>My average bill over the past [X months/years] has been approximately [Typical Amount].</li>
                <li>This bill is [Amount], reflecting an unjustified increase of [Percentage].</li>
                <li>I have made no significant changes to my energy usage, appliance usage, or household routines to warrant such a spike.</li>
              </ul>
            </p>
          </div>

          

          <div>
            <p className="font-semibold text-blue-200 mb-2">▾ AGL's Response:</p>
            <div className="bg-white text-black text-sm p-4 rounded-md">
              <p className="mb-3">Dear John Doe,</p>
              <p className="mb-3">Thank you for contacting us regarding your recent electricity bill dated [Bill Date]. We sincerely apologize for any frustration or concern this matter has caused. Ensuring our customers feel confident and informed about their energy charges is a top priority for us.</p>
              <p className="mb-3">We have received your dispute and understand your concerns regarding the significant increase in charges. To address this promptly, we have initiated a detailed review of your account, including:</p>
              <ul className="list-disc pl-6 mb-3">
                <li>A verification of your billing history.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full text-sm w-fit flex items-center">
          Submit
          <span className="ml-2">→</span>
        </button>

        {/* Logo */}
        <div className="mt-auto flex justify-end">
          <div className="w-[120px] sm:w-[100px] xs:w-[80px] mt-10 text-4xl font-bold text-slate-700 opacity-30">
            voices
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalSubmit;