// import React from 'react';
// import Sidebar from '../components/Sidebar';
// import Logo from '../assets/images/VoiceLogo.png';
//  import { useNavigate } from 'react-router-dom';

// // const navigate = useNavigate();

// const GenerateCase: React.FC = () => {
//     const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-little-voices-navy text-white flex">
//           <Sidebar />
  
//           <div className="w-[70%] px-10 py-8 flex flex-col ml-[120px]">
//     {/* Sidebar */}
//     <Sidebar />
  
//     {/* Back Link */}
//     <div className="flex items-center text-blue-200 cursor-pointer mb-6">
//       <span className="mr-2">←</span>
//       <span>Previous</span>
//     </div>
  
//     {/* Heading with Date */}
//     <div className="flex items-center gap-4 mb-6">
//       <h1 className="text-3xl font-bold">AGL</h1>
//       <span className="bg-[#2A2F3A] px-4 py-1 rounded-full text-sm font-medium">
//         15 / 11 / 2024
//       </span>
//     </div>
  
//     <div className="text-xl font-semibold mb-4">Case Details</div>
  
//     {/* Tone of Voice Dropdown */}
//     <div className="mb-6">
//       <label className="block mb-2">Tone of Voice</label>
//       <select className="w-full px-4 py-2 text-black rounded-[4px]">
//         <option>Select one</option>
//         <option>Formal</option>
//         <option>Assertive</option>
//         <option>Sympathetic</option>
//       </select>
//     </div>
  
//     {/* Desired Outcome */}
//     <div className="mb-6">
//       <label className="block mb-2">What is your Desired Outcome?</label>
//       <textarea
//         className="w-full px-4 py-3 text-black rounded-[4px]"
//         rows={5}
//         placeholder="Type your outcome..."
//         defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat felis dui..."
//       />
//     </div>
   

// {/* <button

//   className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 text-sm rounded-full w-fit"
// >
//   Generate →
// </button> */}
//       <button
//   onClick={() => navigate('/case-chat')}
//   className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 text-sm rounded-full w-fit"
// >
//   Generate →
// </button>
  
//   </div>

//   {/* Logo bottom right */}
//   <img
//     src={Logo}
//     alt="Little Voices"
//     className="absolute bottom-12 right-4 w-[120px] "
//   />

//   </div>
  
//   );
// };

// export default GenerateCase;
import React from 'react';
import Sidebar from '../components/Sidebar';
import Logo from '../assets/images/VoiceLogo.png';
import { useNavigate } from 'react-router-dom';

const GenerateCase: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-little-voices-navy text-white flex flex-col md:flex-row relative">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 px-4 md:px-10 py-8 md:ml-[120px] w-full max-w-[900px]">
        {/* Back Link */}
        <div className="flex items-center text-blue-200 cursor-pointer mb-6">
          <span className="mr-2">←</span>
          <span>Previous</span>
        </div>

        {/* Heading with Date */}
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">AGL</h1>
          <span className="bg-[#2A2F3A] px-4 py-1 rounded-full text-sm font-medium w-fit">
            15 / 11 / 2024
          </span>
        </div>

        {/* Section Title */}
        <div className="text-lg md:text-xl font-semibold mb-4">Case Details</div>

        {/* Tone of Voice Dropdown */}
        <div className="mb-6">
          <label className="block mb-2">Tone of Voice</label>
          <select className="w-full px-4 py-2 text-black rounded-[4px]">
            <option>Select one</option>
            <option>Formal</option>
            <option>Assertive</option>
            <option>Sympathetic</option>
          </select>
        </div>

        {/* Desired Outcome */}
        <div className="mb-6">
          <label className="block mb-2">What is your Desired Outcome?</label>
          <textarea
            className="w-full px-4 py-3 text-black rounded-[4px]"
            rows={5}
            placeholder="Type your outcome..."
            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat felis dui..."
          />
        </div>

        {/* Generate Button */}
        <button
          onClick={() => navigate('/case-chat')}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 text-sm rounded-full w-fit"
        >
          Generate →
        </button>
      </div>

      {/* Logo Bottom Right */}
      <img
        src={Logo}
        alt="Little Voices"
        className="w-[80px] md:w-[120px] absolute bottom-4 right-4 md:bottom-12"
      />
    </div>
  );
};

export default GenerateCase;
