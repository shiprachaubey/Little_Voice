// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import Sidebar from '../components/Sidebar';
// // import Logo from '../assets/images/VoiceLogo.png';

// // const CaseChat: React.FC = () => {
// //     const [showResponseOverlay, setShowResponseOverlay] = useState(false);
// //     // const handleAddToDraft = () => {
// //     //     const subject = encodeURIComponent('New Complaint Draft');
// //     //     const body = encodeURIComponent(`Dear [Energy Company Representative],\n\nThank you for your prompt response to my inquiry...`);
// //     //     window.open(`https://mail.google.com/mail/?view=cm&fs=1&tf=1&su=${subject}&body=${body}`, '_blank');
// //     //   };
// //     const handleAddToDraft = () => {
// //       const subject = encodeURIComponent('New Complaint Draft');
// //       const body = encodeURIComponent(
// //         `Dear [Energy Company Representative],\n\nThank you for your prompt response...`
// //       );
    
// //       const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?subject=${subject}&body=${body}`;
// //       window.open(outlookUrl, '_blank');
// //     };
    
      
// // const navigate = useNavigate();

// // const handleSendViaLittleVoices = () => {
// //   navigate('/final-submit'); // change this to your route
// // };


// //   return (
// //     <div className="min-h-screen bg-little-voices-navy  text-white flex">
// //       {/* Sidebar */}
// //       <Sidebar />

// //       {/* Main Content */}
// //       <div className="w-[70%] px-10 py-8 flex flex-col ml-[120px]">
// //         {/* Back Button */}
// //         <div className="flex items-center text-blue-200 cursor-pointer mb-6">
// //           <span className="mr-2">←</span>
// //           <span>Previous</span>
// //         </div>

// //         {/* Header with Date */}
// //         <div className="flex items-center gap-4 mb-6">
// //           <h1 className="text-3xl font-bold">AGL</h1>
// //           <span className="bg-[#2A2F3A] px-4 py-1 rounded-full text-sm font-medium">
// //             15 / 11 / 2024
// //           </span>
// //         </div>

// //         {/* Company Details Dropdown */}
// //         <div className="text-xl font-semibold mb-4 flex items-center gap-1">
// //           Company Details <span className="text-lg">▾</span>
// //         </div>

// //         {/* Chat History */}
// //         <div className="mb-6">
// //           <label className="block mb-2">Chat History</label>
// //           <div className="bg-white text-[#2C3A5F] p-6 rounded-[10px] h-[400px] overflow-y-auto space-y-6 text-sm">
// //   {/* Desired Outcome */}
// //   <div>
// //     <p className="font-semibold mb-1">Desired Outcome:</p>
// //     <p className="font-medium">
// //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat felis dui, id luctus quam tristique vel. In luctus et turpis pharetra aliquet. Nunc eget metus nec odio ullamcorper imperdiet. Proin feugiat lectus eu odio lacinia gravida. Pellentesque fringilla eget leo tincidunt pretium.
// //     </p>
// //   </div>

// //   {/* AI Response */}
// //   <div>
// //     <p className="text-blue-600 font-semibold mb-1">AI Response:</p>
// //     <p className="font-medium">
// //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat felis dui, id luctus quam tristique vel...
// //     </p>
// //   </div>

// //   {/* Your Reply */}
// //   <div>
// //     <p className="font-semibold mb-1">Your Reply:</p>
// //     <p className="font-medium">
// //       Proin feugiat lectus eu odio lacinia gravida. Pellentesque fringilla eget leo tincidunt pretium.
// //     </p>
// //   </div>

// //   {/* Second AI Response */}
// //   <div>
// //     <p className="text-blue-600 font-semibold mb-1">AI Response:</p>
// //     <p className="font-medium whitespace-pre-line">
// //       Dear [Energy Company Name or Customer Service Team],{'\n\n'}
// //       I am writing to express my extreme dissatisfaction with my recent electricity bill dated [Bill Date] for account number [Your Account Number]. The charges are outrageously high, far exceeding my usual bills without any reasonable explanation.{'\n\n'}
// //       For context:{'\n'}
// //       • My average bill over the past [X months/years] has been approximately [Typical Amount].
// //     </p>
// //   </div>
// // </div>

// //         </div>

// //         {/* Reply Input */}
// //         <div className="mb-6">
// //           <label className="block mb-2">Reply</label>
// //           <div className="flex">
// //             <input
// //               type="text"
// //               className="w-full px-4 py-2 text-black rounded-[10px]"
// //               defaultValue="Proin feugiat lectus eu odio lacinia gravida..."
// //             />
// //             <button className="bg-[#2A2F3A] px-4 py-2 rounded-r-md">
// //               Send →
// //             </button>
// //           </div>
// //         </div>

// //         {/* Approve Button */}
// //         <button
// //    onClick={() => setShowResponseOverlay(true)}
// //   className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 text-sm rounded-full w-fit"
// // >
// //   Approve →
// // </button>

// // {showResponseOverlay && (
// //   <div className="fixed inset-0  flex items-center justify-center bg-black bg-opacity-40 p-4 z-50">
// //     <div className="bg-little-voices-navy   text-white rounded-xl shadow-lg w-[720px] h-[496px] flex flex-col p-10 relative">
      
// //       {/* Back Button */}
// //       <div className="flex items-center mb-4">
// //         <button className="flex items-center text-white hover:text-gray-300">
// //           <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
// //           </svg>
// //           Back
// //         </button>
// //       </div>

// //       {/* Title */}
// //       <h2 className="text-4xl font-bold mb-6">Final Response</h2>

// //       {/* Content */}
// //       <div className="overflow-y-auto flex-grow pr-4 space-y-6">
// //         <p>Dear [Energy Company Name or Customer Service Team],</p>
// //         <p>
// //           I am writing to express my extreme dissatisfaction with my recent electricity bill dated [Bill Date] for account number [Your Account Number]. The charges are outrageously high, far exceeding my usual bills without any reasonable explanation.
// //         </p>

// //         <p>For context:</p>
// //         <ul className="list-disc pl-5 space-y-2">
// //           <li>My average bill over the past [X months/years] has been approximately [Typical Amount].</li>
// //           <li>This bill is [Amount], reflecting an unjustified increase of [Percentage].</li>
// //           <li>I have made no significant changes to my energy usage, appliance usage, or household routines to warrant such a spike.</li>
// //         </ul>

// //         <p>
// //           Frankly, I find this situation unacceptable. As a paying customer, I expect transparency and fair pricing. This unexplained charge is inconsistent with my usage patterns and previous billing history.
// //         </p>

// //         <p>I request:</p>
// //         <ul className="list-disc pl-5 space-y-2">
// //           <li>A thorough investigation into this billing anomaly</li>
// //           <li>A detailed breakdown of how these charges were calculated</li>
// //           <li>Adjustment of my bill to reflect my actual usage</li>
// //           <li>Confirmation that this issue will not recur in future billing cycles</li>
// //         </ul>

// //         <p>
// //           Please address this matter urgently. I expect a response within [timeframe, e.g., 5 business days].
// //         </p>

// //         <p>
// //           Sincerely,<br />
// //           [Your Name]<br />
// //           [Your Contact Information]
// //         </p>
// //       </div>

// //       {/* Footer Buttons */}
// //       <div className="flex justify-center gap-4 mt-6 pt-4 border-t border-gray-700">

// //       <button
// //   onClick={handleAddToDraft}
// //   className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-sm"
// // >
// //   Add to My Drafts
// //   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
// //   </svg>
// // </button>


// //         <button onClick={handleSendViaLittleVoices} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-sm">
// //           Send via Little Voices
// //           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
// //           </svg>
// //         </button>
// //       </div>

    
// //     </div>
// //   </div>
// // )}
// //   <div className="mt-auto flex justify-end">
// //         <img
// //     src={Logo}
// //     alt="Little Voices"
// //     className="absolute bottom-12 right-4 w-[120px] "
// //   />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CaseChat;

// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Sidebar from '../components/Sidebar';
// import Logo from '../assets/images/VoiceLogo.png';

// const CaseChat: React.FC = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [showResponseOverlay, setShowResponseOverlay] = useState(false);
//   const [chatHistory, setChatHistory] = useState<string[]>([location.state?.aiResponse || '']);
//   const [userInput, setUserInput] = useState('');
//   const aiResponse = location.state?.aiResponse;
//   const caseMeta = location.state?.caseMeta;

//   const handleAddToDraft = () => {
//     const subject = encodeURIComponent('New Complaint Draft');
//     const body = encodeURIComponent(aiResponse || '');
//     const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?subject=${subject}&body=${body}`;
//     window.open(outlookUrl, '_blank');
//   };

  

//   const handleSendViaLittleVoices = () => {
//     navigate('/final-submit');
//   };

//   const handleSend = async () => {
//     if (!userInput.trim()) return;
//     const updatedHistory = [...chatHistory, `User: ${userInput}`];
//     setChatHistory(updatedHistory);
//     setUserInput('');

//     try {
//       const token = localStorage.getItem('token');
//       if (!token) throw new Error('No token found');

//       const res = await fetch('http://localhost:5000/api/case/ai-response', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           ...caseMeta,
//           tone: caseMeta.tone || 'Formal',
//           desiredOutcome: userInput
//         }),
//       });

//       const text = await res.text();
//       const data = JSON.parse(text);

//       setChatHistory(prev => [...prev, `Claude: ${data.aiResponse}`]);
//     } catch (error) {
//       console.error('Error getting reply:', error);
//       alert('Failed to get AI response.');
//     }
//   };

//   if (!aiResponse || !caseMeta) {
//     return <div className="text-white p-4">No AI response or case data found.</div>;
//   }

//   return (
//     <div className="min-h-screen bg-little-voices-navy text-white flex">
//       <Sidebar />

//       <div className="w-[70%] px-10 py-8 flex flex-col ml-[120px]">
//         <div className="flex items-center text-blue-200 cursor-pointer mb-6">
//           <span className="mr-2">←</span>
//           <span>Previous</span>
//         </div>

//         <div className="flex items-center gap-4 mb-6">
//           <h1 className="text-3xl font-bold">{caseMeta.companyName}</h1>
//           <span className="bg-[#2A2F3A] px-4 py-1 rounded-full text-sm font-medium">
//             {new Date().toLocaleDateString('en-GB')}
//           </span>
//         </div>

//         <div className="text-xl font-semibold mb-4 flex items-center gap-1">
//           Company Details <span className="text-lg">▾</span>
//         </div>

//         <div className="mb-6">
//           <label className="block mb-2">Chat History</label>
//           <div className="bg-white text-[#2C3A5F] p-6 rounded-[10px] h-[400px] overflow-y-auto space-y-6 text-sm whitespace-pre-line">
//             {chatHistory.map((line, index) => (
//               <div key={index}>{line}</div>
//             ))}
//           </div>
//         </div>

//         <div className="mb-6">
//           <label className="block mb-2">Reply</label>
//           <div className="flex">
//             <input
//               type="text"
//               value={userInput}
//               onChange={(e) => setUserInput(e.target.value)}
//               className="w-full px-4 py-2 text-black rounded-[10px]"
//               placeholder="Type your reply..."
//             />
//             <button
//               onClick={handleSend}
//               className="bg-[#2A2F3A] px-4 py-2 rounded-r-md"
//             >
//               Send →
//             </button>
//           </div>
//         </div>

//         <button
//           onClick={() => setShowResponseOverlay(true)}
//           className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 text-sm rounded-full w-fit"
//         >
//           Approve →
//         </button>

//         {showResponseOverlay && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 p-4 z-50">
//             <div className="bg-little-voices-navy text-white rounded-xl shadow-lg w-[720px] h-[496px] flex flex-col p-10 relative">
//               <div className="flex items-center mb-4">
//                 <button
//                   onClick={() => setShowResponseOverlay(false)}
//                   className="flex items-center text-white hover:text-gray-300"
//                 >
//                   <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//                   </svg>
//                   Back
//                 </button>
//               </div>

//               <h2 className="text-4xl font-bold mb-6">Final Response</h2>

//               <div className="overflow-y-auto flex-grow pr-4 space-y-6 whitespace-pre-line">
//                 {chatHistory[chatHistory.length - 1]}
//               </div>

//               <div className="flex justify-center gap-4 mt-6 pt-4 border-t border-gray-700">
//                 <button
//                   onClick={handleAddToDraft}
//                   className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-sm"
//                 >
//                   Add to My Drafts
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//                   </svg>
//                 </button>

//                 <button
//                   onClick={handleSendViaLittleVoices}
//                   className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-sm"
//                 >
//                   Send via Little Voices
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         <div className="mt-auto flex justify-end">
//           <img
//             src={Logo}
//             alt="Little Voices"
//             className="absolute bottom-12 right-4 w-[120px]"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CaseChat;


import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Logo from '../assets/images/VoiceLogo.png';

const CaseChat: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showResponseOverlay, setShowResponseOverlay] = useState(false);
  const [chatHistory, setChatHistory] = useState<string[]>([location.state?.aiResponse || '']);
  const [userInput, setUserInput] = useState('');
  const aiResponse = location.state?.aiResponse;
  const caseMeta = location.state?.caseMeta;

  const handleAddToDraft = () => {
    const subject = encodeURIComponent('New Complaint Draft');
    const body = encodeURIComponent(aiResponse || '');
    const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?subject=${subject}&body=${body}`;
    window.open(outlookUrl, '_blank');
  };

const handleSendViaLittleVoices = () => {
  navigate('/final-submit', {
    state: {
      chatHistory,
      caseMeta
    }
  });
};

  const handleSend = async () => {
    if (!userInput.trim()) return;

    const newUserMessage = { role: "user", content: userInput };
    const structuredMessages = chatHistory.map((msg) => {
      if (msg.startsWith("User:")) return { role: "user", content: msg.replace("User: ", "") };
      return { role: "assistant", content: msg.replace("Claude: ", "") };
    });

    setChatHistory((prev) => [...prev, `User: ${userInput}`]);
    setUserInput('');

    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No token found');

      const res = await fetch('http://localhost:5000/api/case/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ messages: [...structuredMessages, newUserMessage] }),
      });

      const data = await res.json();
      setChatHistory((prev) => [...prev, `Claude: ${data.aiResponse}`]);
    } catch (error) {
      console.error('Error getting reply:', error);
      alert('Failed to get AI response.');
    }
  };

  if (!aiResponse || !caseMeta) {
    return <div className="text-white p-4">No AI response or case data found.</div>;
  }

  return (
    <div className="min-h-screen bg-little-voices-navy text-white flex">
      <Sidebar />

      <div className="w-[70%] px-10 py-8 flex flex-col ml-[120px]">
        <div className="flex items-center text-blue-200 cursor-pointer mb-6">
          <span className="mr-2">←</span>
          <span>Previous</span>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-3xl font-bold">{caseMeta.companyName}</h1>
          <span className="bg-[#2A2F3A] px-4 py-1 rounded-full text-sm font-medium">
            {new Date().toLocaleDateString('en-GB')}
          </span>
        </div>

        <div className="text-xl font-semibold mb-4 flex items-center gap-1">
          Company Details <span className="text-lg">▾</span>
        </div>

        <div className="mb-6">
          <label className="block mb-2">Chat History</label>
          <div className="bg-white text-[#2C3A5F] p-6 rounded-[10px] h-[400px] overflow-y-auto space-y-6 text-sm whitespace-pre-line">
            {chatHistory.map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="block mb-2">Reply</label>
          <div className="flex">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="w-full px-4 py-2 text-black rounded-[10px]"
              placeholder="Type your reply..."
            />
            <button
              onClick={handleSend}
              className="bg-[#2A2F3A] px-4 py-2 rounded-r-md"
            >
              Send →
            </button>
          </div>
        </div>

        <button
          onClick={() => setShowResponseOverlay(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 text-sm rounded-full w-fit"
        >
          Approve →
        </button>

        {showResponseOverlay && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 p-4 z-50">
            <div className="bg-little-voices-navy text-white rounded-xl shadow-lg w-[720px] h-[496px] flex flex-col p-10 relative">
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

              <h2 className="text-4xl font-bold mb-6">Final Response</h2>

              <div className="overflow-y-auto flex-grow pr-4 space-y-6 whitespace-pre-line">
                {chatHistory[chatHistory.length - 1]}
              </div>

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

        <div className="mt-auto flex justify-end">
          <img
            src={Logo}
            alt="Little Voices"
            className="absolute bottom-12 right-4 w-[120px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CaseChat;
