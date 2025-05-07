


// // import React from 'react';
// // import { FaArrowRight, FaChevronDown } from 'react-icons/fa';

// // interface CaseCardProps {
// //     name: string;
// //     type: 'open' | 'closed';
// //     dateOptions?: string[];
// //     status?: 'Successful' | 'Closed';
// //   }

// // const CaseCard: React.FC<CaseCardProps> = ({ name, type, dateOptions = [], status }) => {
// //     const isOpen = type === 'open';

// //   if (isOpen) {
// //     return (
// //         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
// //         {/* Business Name */}
// //         <div className="w-full md:w-1/2">
// //           <label className="block mb-1 text-sm text-gray-300">Business Name</label>
// //           <div className="bg-white text-black px-4 py-2 rounded-full font-medium w-full">
// //             {name}
// //           </div>
// //         </div>

// //         {/* Date Opened */}
// //         <div>
// //           <label className="block mb-1 text-sm text-gray-300">Datess Opened</label>
// //           <div className="relative">
// //             <select className="appearance-none bg-white text-black px-4 py-2 rounded-full pr-8 text-sm">
// //               {dateOptions.map((date, idx) => (
// //                 <option key={idx} value={date}>
// //                   {date}
// //                 </option>
// //               ))}
// //             </select>
// //             <FaChevronDown
// //               className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
// //               size={12}
// //             />
// //           </div>
// //         </div>

// //         {/* View Case Button */}
// //         <div className="pt-6 md:pt-0">
// //           <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2">
// //             View Case <FaArrowRight size={12} />
// //           </button>
// //         </div>
// //       </div>
// //     );
// // };
// //   // Closed Case style
// //   return (
// //     <div
// //       className={`flex justify-between items-center px-4 py-3 rounded-md ${
// //         status === 'Successful'
// //           ? 'bg-green-400 text-black'
// //           : 'bg-red-400 text-black'
// //       }`}
// //     >
// //       <div className="font-medium">{name}</div>

// //       <div className="flex items-center gap-2">
// //         <div className="flex items-center gap-1 text-sm font-medium">
// //           {status === 'Successful' ? (
// //             <span className="text-green-800">✔</span>
// //           ) : (
// //             <span className="text-red-800">✖</span>
// //           )}
// //           {status}
// //         </div>
// //         <button className="bg-white text-blue-600 hover:opacity-90 px-3 py-1 rounded-full text-sm flex items-center gap-1">
// //           View Case <FaArrowRight size={12} />
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CaseCard;

// import React from 'react';
// import { FaArrowRight, FaChevronDown } from 'react-icons/fa';

// interface CaseCardProps {
//   name: string;
//   type: 'open' | 'closed';
//   dateOptions?: string[];
//   status?: 'Successful' | 'Closed';
// }

// const CaseCard: React.FC<CaseCardProps> = ({ name, type, dateOptions = [], status }) => {
//   const isOpen = type === 'open';

//   if (isOpen) {
//     return (
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white/10 px-4 py-3 rounded-lg">
//         {/* Business Name */}
//         <div className="w-full md:w-1/2">
//           <label className="block mb-1 text-sm text-gray-300">Business Name</label>
//           <div className="bg-white text-black px-4 py-2 rounded-full font-medium w-full">
//             {name}
//           </div>
//         </div>

//         {/* Date Opened */}
//         <div>
//           <label className="block mb-1 text-sm text-gray-300">Date Opened</label>
//           <div className="relative">
//             <select className="appearance-none bg-white text-black px-4 py-2 rounded-full pr-8 text-sm">
//               {dateOptions.map((date, idx) => (
//                 <option key={idx} value={date}>
//                   {date}
//                 </option>
//               ))}
//             </select>
//             <FaChevronDown
//               className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
//               size={12}
//             />
//           </div>
//         </div>

//         {/* View Case Button */}
//         <div className="pt-6 md:pt-0">
//           <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2">
//             View Case <FaArrowRight size={12} />
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // Closed Case
//   return (
//     <div
//       className={`flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-4 py-3 rounded-lg ${
//         status === 'Successful' ? 'bg-green-400' : 'bg-red-400'
//       } text-black`}
//     >
//       <div className="w-full md:w-1/2 font-medium">{name}</div>

//       <div className="flex items-center gap-4 w-full md:w-auto justify-between">
//         <div className="flex items-center gap-1 text-sm font-medium">
//           {status === 'Successful' ? (
//             <span className="text-green-800">✔</span>
//           ) : (
//             <span className="text-red-800">✖</span>
//           )}
//           {status}
//         </div>
//         <button className="bg-white text-blue-600 hover:opacity-90 px-4 py-2 rounded-full text-sm flex items-center gap-2">
//           View Case <FaArrowRight size={12} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CaseCard;

import React from 'react';
import { FaArrowRight, FaChevronDown, FaHome, FaPlus } from 'react-icons/fa';
import { BsBriefcase, BsInfoCircle } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';

interface CaseCardProps {
  name: string;
  type: 'open' | 'closed';
  dateOptions?: string[];
  status?: 'Successful' | 'Closed';
}

const CaseCard: React.FC<CaseCardProps> = ({ name, type, dateOptions = [], status }) => {
  const isOpen = type === 'open';

  if (isOpen) {
    return (
      <div className="flex justify-between items-center gap-4 bg-white/10 px-4 py-3 rounded-lg">
        {/* Business Name */}
        <div className="flex-1">
          <div className="bg-white text-black px-4 py-2 rounded-full font-medium w-full">
            {name}
          </div>
        </div>

        {/* Date */}
        <div className="relative">
          <div className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full">
            <span className="text-sm">{dateOptions[0]}</span>
            <FaChevronDown className="text-gray-500" size={12} />
          </div>
        </div>

        {/* View Case Button */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2">
          View Case <FaArrowRight size={12} />
        </button>
      </div>
    );
  }

  // Closed Case
  return (
    <div
      className={`flex justify-between items-center px-4 py-3 rounded-lg ${
        status === 'Successful' ? 'bg-green-400' : 'bg-red-400'
      } text-black`}
    >
      <div className="flex-1 font-medium">{name}</div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 text-sm font-medium">
          {status === 'Successful' ? (
            <span className="text-green-800">✔</span>
          ) : (
            <span className="text-red-800">✖</span>
          )}
          {status}
        </div>
        <button className="bg-white text-blue-600 hover:opacity-90 px-4 py-2 rounded-full text-sm flex items-center gap-2">
          View Case <FaArrowRight size={12} />
        </button>
      </div>
    </div>
  );
};
