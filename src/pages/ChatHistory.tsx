
// // import React, { useState } from 'react';
// // import Sidebar from '../components/Sidebar';
// // import { useNavigate } from 'react-router-dom';
// // import Logo from '../assets/images/VoiceLogo.png';

// // const ChatHistory2: React.FC = () => {
// //   const [detailsVisible, setDetailsVisible] = useState(true);
// //   const [showResponseOverlay, setShowResponseOverlay] = useState(false);
// //   const navigate = useNavigate();

// //   const responseHistory = [
// //     {
// //       type: 'first',
// //       content: `Dear [Energy Company Name or Customer Service Team],

// // I am writing to express my extreme dissatisfaction with my recent electricity bill dated [Bill Date] for account number [Your Account Number]...

// // For context:
// // • My average bill over the past [X months/years] has been approximately [Typical Amount].
// // • This bill is [Amount], reflecting an unjustified increase of [Percentage].
// // • I have made no significant changes...`,
// //     },
// //   ];

// //   const toggleDetails = () => setDetailsVisible(!detailsVisible);

// //   const handleAddToDraft = () => {
// //     const subject = encodeURIComponent('New Complaint Draft');
// //     const body = encodeURIComponent(`Dear [Energy Company Representative],\n\nThank you for your prompt response...`);
// //     const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?subject=${subject}&body=${body}`;
// //     window.open(outlookUrl, '_blank');
// //   };

// //   const handleSendViaLittleVoices = () => {
// //     navigate('/chat');
// //   };

// //   return (
// //     <div className="min-h-screen bg-little-voices-navy text-white flex flex-col md:flex-row">
// //       <Sidebar />

// //       <div className="flex-1 px-4 md:px-10 py-8 md:ml-[120px] w-full max-w-[900px]">
// //         {/* Back Button */}
// //         <div className="flex items-center text-blue-200 cursor-pointer mb-6">
// //           <span className="mr-2">←</span>
// //           <span>Previous</span>
// //         </div>

// //         {/* Header */}
// //         <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-6">
// //           <h1 className="text-2xl md:text-3xl font-bold">AGL</h1>
// //           <span className="bg-[#2A2F3A] px-4 py-1 rounded-full text-sm font-medium w-fit">
// //             15 / 11 / 2024
// //           </span>
// //         </div>

// //         {/* Case Details Section */}
// //         <div className="mb-10 border-b border-[#475371] pb-6">
// //           <div className="text-lg font-semibold mb-4 flex items-center cursor-pointer" onClick={toggleDetails}>
// //             <span>Case Details</span>
// //             <span className="text-sm ml-2">{detailsVisible ? '▾' : '▸'}</span>
// //           </div>

// //           {detailsVisible && (
// //             <>
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
// //                 {[
// //                   ['Company Name', 'AGL'],
// //                   ['Company Website', 'AGL.com.au'],
// //                   ['Contact Name', 'James Andrew'],
// //                   ['Email', 'support@agl.com.au'],
// //                 ].map(([label, value], i) => (
// //                   <div key={i}>
// //                     <p className="text-sm text-gray-400 mb-1">{label}</p>
// //                     <p className="font-medium">{value}</p>
// //                   </div>
// //                 ))}
// //               </div>
// //               <div>
// //                 <p className="text-sm text-gray-400 mb-1">Issue Details / History</p>
// //                 <p className="text-sm">
// //                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat felis dui...
// //                 </p>
// //               </div>
// //             </>
// //           )}
// //         </div>

// //         {/* Response History */}
// //         <div className="mb-10">
// //           <h2 className="text-lg font-semibold mb-4">Response History</h2>

// //           {responseHistory.map((response, index) => (
// //             <div className="mb-6" key={index}>
// //               <p className="font-semibold text-blue-200 mb-2">▾ First Response:</p>
// //               <p className="text-sm leading-relaxed text-white whitespace-pre-line">
// //                 {response.content}
// //               </p>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Chat History Section */}
// //         <div className="mb-6">
// //           <label className="block mb-2">Chat History</label>
// //           <div className="bg-white text-[#2C3A5F] p-6 rounded-[10px] h-[400px] overflow-y-auto space-y-6 text-sm">
// //             <div>
// //               <p className="font-semibold mb-1">Desired Outcome:</p>
// //               <p className="font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
// //             </div>
// //             <div>
// //               <p className="text-blue-600 font-semibold mb-1">AI Response:</p>
// //               <p className="font-medium">Vivamus feugiat felis dui, id luctus quam tristique vel...</p>
// //             </div>
// //             <div>
// //               <p className="font-semibold mb-1">Your Reply:</p>
// //               <p className="font-medium">Proin feugiat lectus eu odio lacinia gravida...</p>
// //             </div>
// //             <div>
// //               <p className="text-blue-600 font-semibold mb-1">AI Response:</p>
// //               <p className="font-medium whitespace-pre-line">
// //                 Dear [Energy Company Name or Customer Service Team],{'\n\n'}I am writing to express...
// //               </p>
// //             </div>
// //           </div>

// //           {/* Approve Button */}
// //           <button
// //             onClick={() => setShowResponseOverlay(true)}
// //             className="bg-blue-500 hover:bg-blue-600 text-white mt-4 px-4 py-2 text-sm rounded-full w-fit"
// //           >
// //             Approve →
// //           </button>
// //         </div>

// //         {/* Fixed Logo (Responsive) */}
// //         <div className="mt-12 flex justify-end">
// //           <img src={Logo} alt="Little Voices" className="w-[80px] md:w-[120px] fixed bottom-4 right-4 z-40" />
// //         </div>
// //       </div>

// //       {/* Overlay */}
// //       {showResponseOverlay && (
// //         <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center px-4">
// //           <div className="bg-[#2C3A5F] text-white rounded-xl w-full max-w-2xl shadow-lg max-h-[90vh] flex flex-col p-6 md:p-10 overflow-hidden">
// //             {/* Back Button */}
// //             <div className="mb-4">
// //               <button
// //                 onClick={() => setShowResponseOverlay(false)}
// //                 className="flex items-center text-white hover:text-gray-300"
// //               >
// //                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
// //                 </svg>
// //                 Back
// //               </button>
// //             </div>

// //             <h2 className="text-2xl md:text-4xl font-bold mb-6">Final Response</h2>

// //             {/* Scrollable Letter */}
// //             <div className="overflow-y-auto pr-2 space-y-4 text-sm flex-grow">
// //               <p>Dear [Energy Company Name or Customer Service Team],</p>
// //               <p>I am writing to express my extreme dissatisfaction with my recent electricity bill...</p>
// //               <p>For context:</p>
// //               <ul className="list-disc pl-5 space-y-1">
// //                 <li>My average bill over the past [X months/years]...</li>
// //                 <li>This bill is [Amount]...</li>
// //                 <li>No significant changes in usage...</li>
// //               </ul>
// //               <p>I request:</p>
// //               <ul className="list-disc pl-5 space-y-1">
// //                 <li>A thorough investigation</li>
// //                 <li>A detailed breakdown</li>
// //                 <li>Adjustment of my bill</li>
// //                 <li>Confirmation this won’t recur</li>
// //               </ul>
// //               <p>Sincerely,<br />[Your Name]<br />[Your Contact Info]</p>
// //             </div>

// //             {/* Footer Buttons */}
// //             <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 pt-4 border-t border-gray-700">
// //               <button
// //                 onClick={handleAddToDraft}
// //                 className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-sm flex items-center gap-2"
// //               >
// //                 Add to My Drafts
// //               </button>
// //               <button
// //                 onClick={handleSendViaLittleVoices}
// //                 className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-sm flex items-center gap-2"
// //               >
// //                 Send via Little Voices
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default ChatHistory2;

// import React, { useEffect, useState } from 'react';
// import Sidebar from '../components/Sidebar';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Logo from '../assets/images/VoiceLogo.png';

// const ChatHistory2: React.FC = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const aiResponse = location.state?.aiResponse;
//   const caseMeta = location.state?.caseMeta;

//   const [showResponseOverlay, setShowResponseOverlay] = useState(false);
//   const [approvedMessageId, setApprovedMessageId] = useState<string | null>(null);

//   const handleApprove = async () => {
//     const token = localStorage.getItem('token');
//     if (!token || !aiResponse || !caseMeta) return;

//     try {
//       // 1. Create case
//       const caseRes = await fetch('/api/cases', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(caseMeta),
//       });

//       const caseData = await caseRes.json();

//       // 2. Save AI response as approved message
//       const messageRes = await fetch('/api/messages', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           caseId: caseData._id,
//           sender: 'claude',
//           content: aiResponse,
//           type: 'ai',
//           approved: true,
//         }),
//       });

//       const messageData = await messageRes.json();
//       setApprovedMessageId(messageData._id || messageData.aiMessage?._id || null);
//       setShowResponseOverlay(true);
//     } catch (err) {
//       console.error('Approval failed:', err);
//     }
//   };

//   const handleSendViaLittleVoices = () => {
//     navigate('/chat');
//   };

//   return (
//     <div className="min-h-screen bg-little-voices-navy text-white flex flex-col md:flex-row">
//       <Sidebar />
//       <div className="flex-1 px-4 md:px-10 py-8 md:ml-[120px] w-full max-w-[900px]">
//         <div className="flex items-center text-blue-200 cursor-pointer mb-6">
//           <span className="mr-2">←</span>
//           <span>Previous</span>
//         </div>

//         <div className="text-2xl md:text-3xl font-bold mb-6">Review & Approve Response</div>

//         <div className="bg-white text-[#2C3A5F] p-6 rounded-[10px] h-[400px] overflow-y-auto space-y-6 text-sm whitespace-pre-line">
//           {aiResponse}
//         </div>

//         <button
//           onClick={handleApprove}
//           className="bg-blue-500 hover:bg-blue-600 text-white mt-4 px-4 py-2 text-sm rounded-full w-fit"
//         >
//           Approve →
//         </button>

//         <div className="mt-12 flex justify-end">
//           <img src={Logo} alt="Little Voices" className="w-[80px] md:w-[120px] fixed bottom-4 right-4 z-40" />
//         </div>
//       </div>

//       {/* Final Response Overlay */}
//       {showResponseOverlay && (
//         <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center px-4">
//           <div className="bg-[#2C3A5F] text-white rounded-xl w-full max-w-2xl shadow-lg max-h-[90vh] flex flex-col p-6 md:p-10 overflow-hidden">
//             <div className="mb-4">
//               <button onClick={() => setShowResponseOverlay(false)} className="flex items-center text-white hover:text-gray-300">
//                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//                 </svg>
//                 Back
//               </button>
//             </div>

//             <h2 className="text-2xl md:text-4xl font-bold mb-6">Final Response</h2>

//             <div className="overflow-y-auto pr-2 space-y-4 text-sm flex-grow">
//               <p className="whitespace-pre-line">{aiResponse}</p>
//             </div>

//             <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 pt-4 border-t border-gray-700">
//               <button
//                 onClick={() => window.open(`https://outlook.live.com/mail/0/deeplink/compose?subject=Complaint Draft&body=${encodeURIComponent(aiResponse)}`, '_blank')}
//                 className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-sm"
//               >
//                 Add to My Drafts
//               </button>
//               <button
//                 onClick={handleSendViaLittleVoices}
//                 className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-sm"
//               >
//                 Send via Little Voices
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatHistory2;

import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../assets/images/VoiceLogo.png';

const ChatHistory2: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const aiResponse = location.state?.aiResponse;
  const caseMeta = location.state?.caseMeta;

  const [showResponseOverlay, setShowResponseOverlay] = useState(false);
  const [approvedMessageId, setApprovedMessageId] = useState<string | null>(null);

  const handleApprove = async () => {
    const token = localStorage.getItem('token');
    if (!token || !aiResponse || !caseMeta) return;

    try {
      // 1. Create case in DB
      const caseRes = await fetch('http://localhost:5000/api/cases', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(caseMeta),
      });

      const createdCase = await caseRes.json();

      // 2. Save AI message
      const msgRes = await fetch('http://localhost:5000/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          caseId: createdCase._id,
          sender: 'claude',
          content: aiResponse,
          type: 'ai',
          approved: true,
        }),
      });

      const msgData = await msgRes.json();
      setApprovedMessageId(msgData._id || msgData.aiMessage?._id || null);
      setShowResponseOverlay(true);
    } catch (error) {
      console.error('Error approving message:', error);
    }
  };

  const handleSendViaLittleVoices = () => {
    navigate('/chat');
  };

  if (!aiResponse || !caseMeta) {
    return <div className="text-white p-4">No message found. Go back and generate a case.</div>;
  }

  return (
    <div className="min-h-screen bg-little-voices-navy text-white flex flex-col md:flex-row">
      <Sidebar />

      <div className="flex-1 px-4 md:px-10 py-8 md:ml-[120px] w-full max-w-[900px]">
        <div className="text-2xl md:text-3xl font-bold mb-6">Review & Approve Response</div>

        <div className="bg-white text-[#2C3A5F] p-6 rounded-[10px] h-[400px] overflow-y-auto space-y-6 text-sm whitespace-pre-line">
          {aiResponse}
        </div>

        <button
          onClick={handleApprove}
          className="bg-blue-500 hover:bg-blue-600 text-white mt-4 px-4 py-2 text-sm rounded-full w-fit"
        >
          Approve →
        </button>
      </div>

      {showResponseOverlay && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center px-4">
          <div className="bg-[#2C3A5F] text-white rounded-xl w-full max-w-2xl shadow-lg max-h-[90vh] flex flex-col p-6 md:p-10 overflow-hidden">
            <div className="mb-4">
              <button onClick={() => setShowResponseOverlay(false)} className="flex items-center text-white hover:text-gray-300">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back
              </button>
            </div>

            <h2 className="text-2xl md:text-4xl font-bold mb-6">Final Response</h2>

            <div className="overflow-y-auto pr-2 space-y-4 text-sm flex-grow">
              <p className="whitespace-pre-line">{aiResponse}</p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 pt-4 border-t border-gray-700">
              <button
                onClick={() => window.open(`https://outlook.live.com/mail/0/deeplink/compose?subject=Complaint Draft&body=${encodeURIComponent(aiResponse)}`, '_blank')}
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-sm"
              >
                Add to My Drafts
              </button>
              <button
                onClick={handleSendViaLittleVoices}
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-sm"
              >
                Send via Little Voices
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatHistory2;


