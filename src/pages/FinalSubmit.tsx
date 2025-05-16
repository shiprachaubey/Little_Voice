

// // import React, { useState } from 'react';
// // import Sidebar from '../components/Sidebar';
// // import { useNavigate } from 'react-router-dom';

// // const FinalSubmit: React.FC = () => {
// //   const [detailsVisible, setDetailsVisible] = useState(true);
// //   const navigate = useNavigate();

// //   const responseHistory = [
// //     {
// //       type: 'first',
// //       content: `Dear [Energy Company Name or Customer Service Team],

// // I am writing to express my extreme dissatisfaction with my recent electricity bill dated [Bill Date] for account number [Your Account Number]. The charges are outrageously high, far exceeding my usual bills without any reasonable explanation.

// // For context:
// // • My average bill over the past [X months/years] has been approximately [Typical Amount].
// // • This bill is [Amount], reflecting an unjustified increase of [Percentage].
// // • I have made no significant changes to my energy usage, appliance usage, or household routines to warrant such a spike.`
// //     },
// //     {
// //       type: 'agl',
// //       content: `Dear John Doe,

// // Thank you for contacting us regarding your recent electricity bill dated [Bill Date]. We sincerely apologize for any frustration or concern this matter has caused. Ensuring our customers feel confident and informed about their energy charges is a top priority for us.

// // We have received your dispute and understand your concerns regarding the significant increase in charges. To address this promptly, we have initiated a detailed review of your account, including:
// // • A verification of your billing history.`
// //     }
// //   ];

// //   const toggleDetails = () => setDetailsVisible(!detailsVisible);

// //   const handleSubmit = () => {
// //     navigate('/chat-history', { state: { responseHistory } });
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

// //         {/* Case Details Toggle */}
// //         <div className="mb-10 border-b border-[#475371] pb-6">
// //           <div
// //             className="text-lg font-semibold mb-4 flex items-center cursor-pointer"
// //             onClick={toggleDetails}
// //           >
// //             <span>Case Details</span>
// //             <span className="text-sm ml-2">{detailsVisible ? '▾' : '▸'}</span>
// //           </div>

// //           {detailsVisible && (
// //             <>
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
// //                 <div>
// //                   <p className="text-sm text-gray-400 mb-1">Company Name</p>
// //                   <p className="font-medium">AGL</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-sm text-gray-400 mb-1">Company Website</p>
// //                   <p className="font-medium">AGL.com.au</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-sm text-gray-400 mb-1">Contact Name</p>
// //                   <p className="font-medium">James Andrew</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-sm text-gray-400 mb-1">Email</p>
// //                   <p className="font-medium">support@agl.com.au</p>
// //                 </div>
// //               </div>
// //               <div>
// //                 <p className="text-sm text-gray-400 mb-1">Issue Details / History</p>
// //                 <p className="text-sm">
// //                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat felis
// //                   dui, id luctus quam tristique vel. In luctus et turpis pharetra aliquet...
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
// //               <p className="font-semibold text-blue-200 mb-2">
// //                 ▾ {response.type === 'first' ? 'First Response:' : "AGL's Response:"}
// //               </p>
// //               <div
// //                 className={`text-sm p-4 rounded-md whitespace-pre-line ${
// //                   response.type === 'agl' ? 'bg-white text-black' : 'text-white'
// //                 }`}
// //               >
// //                 {response.content}
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Submit Button */}
// //         <button
// //           onClick={handleSubmit}
// //           className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full text-sm w-fit flex items-center"
// //         >
// //           Submit
// //           <span className="ml-2">→</span>
// //         </button>

// //         {/* Logo (Text Version) */}
// //         <div className="mt-12 flex justify-end">
// //           <div className="text-3xl font-bold text-slate-700 opacity-30">voices</div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FinalSubmit;

// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Sidebar from '../components/Sidebar';

// const FinalSubmit: React.FC = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const chatHistory = location.state?.chatHistory || [];
//   const caseMeta = location.state?.caseMeta || {};
//   const [detailsVisible, setDetailsVisible] = useState(true);

//   const responseHistory = chatHistory.map((msg: string) => {
//     if (msg.startsWith("User:")) return { type: 'user', content: msg.replace("User: ", "") };
//     if (msg.startsWith("Claude:")) return { type: 'claude', content: msg.replace("Claude: ", "") };
//     if (msg.startsWith("Company:")) return { type: 'company', content: msg.replace("Company: ", "") };
//     return { type: 'other', content: msg };
//   });

//   const toggleDetails = () => setDetailsVisible(!detailsVisible);

//   const handleSubmit = () => {
//     navigate('/chat-history', { state: { responseHistory, caseMeta } });
//   };

//   return (
//     <div className="min-h-screen bg-little-voices-navy text-white flex flex-col md:flex-row">
//       <Sidebar />
//       <div className="flex-1 px-4 md:px-10 py-8 md:ml-[120px] w-full max-w-[900px]">
//         <div className="flex items-center text-blue-200 cursor-pointer mb-6">
//           <span className="mr-2">←</span>
//           <span>Previous</span>
//         </div>

//         <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-6">
//           <h1 className="text-2xl md:text-3xl font-bold">{caseMeta.companyName || 'Company'}</h1>
//           <span className="bg-[#2A2F3A] px-4 py-1 rounded-full text-sm font-medium w-fit">
//             {new Date().toLocaleDateString('en-GB')}
//           </span>
//         </div>

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
//                   <p className="font-medium">{caseMeta.companyName}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-400 mb-1">Company Website</p>
//                   <p className="font-medium">{caseMeta.companyWebsite}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-400 mb-1">Contact Name</p>
//                   <p className="font-medium">{caseMeta.contactName}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-400 mb-1">Email</p>
//                   <p className="font-medium">{caseMeta.email}</p>
//                 </div>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-400 mb-1">Issue Details / History</p>
//                 <p className="text-sm">{caseMeta.issueDescription}</p>
//               </div>
//             </>
//           )}
//         </div>

//         <div className="mb-10">
//           <h2 className="text-lg font-semibold mb-4">Response History</h2>
//           {responseHistory.map((response, index) => (
//             <div className="mb-6" key={index}>
//               <p className="font-semibold text-blue-200 mb-2">
//                 ▾ {response.type === 'user'
//                   ? 'Your Reply:'
//                   : response.type === 'claude'
//                   ? "Claude's Response:"
//                   : response.type === 'company'
//                   ? `${caseMeta.companyName || 'Company'}'s Response:`
//                   : 'Message'}
//               </p>
//               <div
//                 className={`text-sm p-4 rounded-md whitespace-pre-line ${
//                   response.type === 'claude'
//                     ? 'bg-white text-black'
//                     : response.type === 'company'
//                     ? 'bg-white text-black border border-gray-300 shadow-sm'
//                     : 'text-white'
//                 }`}
//               >
//                 {response.content}
//               </div>
//             </div>
//           ))}
//         </div>

//         <button
//           onClick={handleSubmit}
//           className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full text-sm w-fit flex items-center"
//         >
//           Submit
//           <span className="ml-2">→</span>
//         </button>

//         <div className="mt-12 flex justify-end">
//           <div className="text-3xl font-bold text-slate-700 opacity-30">voices</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FinalSubmit;



import React, { useState,useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const FinalSubmit: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const chatHistory = location.state?.chatHistory || [];
  const caseMeta = location.state?.caseMeta || {};
  const [detailsVisible, setDetailsVisible] = useState(true);
  const [companyMessage, setCompanyMessage] = useState<any>(null);
  const [submitted, setSubmitted] = useState(false);


  const responseHistory = chatHistory.map((msg: string) => {
    if (msg.startsWith("User:")) return { type: 'user', content: msg.replace("User: ", "") };
    if (msg.startsWith("Claude:")) return { type: 'claude', content: msg.replace("Claude: ", "") };
    if (msg.startsWith("Company:")) return { type: 'company', content: msg.replace("Company: ", "") };
    return { type: 'other', content: msg };
  });

useEffect(() => {
  const fetchCompanyResponse = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`http://localhost:5000/api/message/messages/${caseMeta._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const messages = await res.json();

      const companyMessages = messages
        .filter((msg: any) => msg.type === 'company')
        .sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

      if (companyMessages.length > 0) {
        setCompanyMessage(companyMessages[0]); // ✅ latest reply
      }
    } catch (err) {
      console.error("Error fetching messages:", err);
    }
  };

  if (caseMeta._id) fetchCompanyResponse();
}, [caseMeta._id]);

  const toggleDetails = () => setDetailsVisible(!detailsVisible);

  // const handleSubmit = () => {
  //   navigate('/chat-history', { state: { responseHistory, caseMeta } });
  // };

  return (
    <div className="min-h-screen bg-little-voices-navy text-white flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex-1 px-4 md:px-10 py-8 md:ml-[120px] w-full max-w-[900px]">
        <div className="flex items-center text-blue-200 cursor-pointer mb-6">
          <span className="mr-2">←</span>
          <span>Previous</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">{caseMeta.companyName || 'Company'}</h1>
          <span className="bg-[#2A2F3A] px-4 py-1 rounded-full text-sm font-medium w-fit">
            {new Date().toLocaleDateString('en-GB')}
          </span>
        </div>

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
                  <p className="font-medium">{caseMeta.companyName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Company Website</p>
                  <p className="font-medium">{caseMeta.companyWebsite}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Contact Name</p>
                  <p className="font-medium">{caseMeta.contactName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <p className="font-medium">{caseMeta.email}</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Issue Details / History</p>
                <p className="text-sm">{caseMeta.issueDescription}</p>
              </div>
            </>
          )}
        </div>

{/* Conditionally show Response History & Company Reply */}
{!submitted && (
  <>
    {/* Response History */}
    <div className="mb-10">
      <h2 className="text-lg font-semibold mb-4">Response History</h2>
      {responseHistory.map((response, index) => (
        <div className="mb-6" key={index}>
          <p className="font-semibold text-blue-200 mb-2">
            ▾ {response.type === 'user'
              ? 'Your Reply:'
              : response.type === 'claude'
              ? "Claude's Response:"
              : response.type === 'company'
              ? `${caseMeta.companyName || 'Company'}'s Response:`
              : 'Message'}
          </p>
          <div
            className={`text-sm p-4 rounded-md whitespace-pre-line ${
              response.type === 'claude'
                ? 'bg-white text-black'
                : response.type === 'company'
                ? 'bg-white text-black border border-gray-300 shadow-sm'
                : 'text-white'
            }`}
          >
            {response.content}
          </div>
        </div>
      ))}
    </div>

    {/* Company Response */}
    <div className="mb-10">
      <h2 className="text-lg font-semibold mb-4">
        {caseMeta.companyName ? `${caseMeta.companyName}'s Response` : 'Company Response'}
      </h2>
      {companyMessage ? (
        <div className="bg-white text-black border border-gray-300 shadow-sm rounded-md p-4 whitespace-pre-line">
          <div className="text-sm">{companyMessage.content}</div>
          <p className="text-xs text-gray-500 mt-2">
            {new Date(companyMessage.createdAt).toLocaleString()}
          </p>
        </div>
      ) : (
        <div className="bg-white text-black border border-dashed border-gray-400 p-4 rounded-md text-sm text-gray-500 italic">
          Waiting for company to respond...
        </div>
      )}
    </div>
  </>
)}

{/* Submit Button or Chat Input */}
{!submitted ? (
  <button
    onClick={() => setSubmitted(true)}
    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full text-sm w-fit flex items-center"
  >
    Submit
    <span className="ml-2">→</span>
  </button>
) : (
  <div className="mt-10">
    <h2 className="text-lg font-semibold mb-4">Reply to {caseMeta.companyName || 'Company'}</h2>
    <textarea
      rows={5}
      placeholder="Type your response..."
      className="w-full p-4 bg-[#1F2937] border border-gray-600 text-white rounded-md"
    />
    <button
      className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full"
    >
      Send Reply
    </button>
  </div>
)}



        <div className="mt-12 flex justify-end">
          <div className="text-3xl font-bold text-slate-700 opacity-30">voices</div>
        </div>
      </div>
    </div>
  );
};

export default FinalSubmit;
