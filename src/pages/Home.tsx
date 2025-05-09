
import React from 'react';
import Sidebar from '../components/Sidebar';
import { FaArrowRight, FaChevronDown , FaArrowLeft } from 'react-icons/fa';

const openCases = [
  {
    name: 'AGL',
    dateOptions: ['15 / 11 / 2024', '10 / 05 / 2023', '12 / 12 / 2022'],
  },
  {
    name: 'Frontline Pharmacy',
    dateOptions: ['08 / 06 / 2024', '02 / 03 / 2024'],
  },
  {
    name: 'Small Dog Design',
    dateOptions: ['24 / 08 / 2023', '19 / 01 / 2023'],
  },
];

const Home = () => {
  return (
    <div className="flex  bg-little-voices-navy min-h-screen text-white overflow-x-hidden">
      <Sidebar />

      <div className="ml-[110px] p-6 md:p-10 w-full ">
        {/* Dashboard Title */}
        <div className="flex items-center gap-2 text-sm text-blue-300 cursor-pointer hover:underline mb-4">
          <FaArrowLeft size={14} />
          <span>Back</span>
        </div>
        <h1 className="text-2xl font-bold mb-6">Open Cases</h1>

        {/* Open Cases Section */}
        <section className="mb-12">
  {/* Table Headings */}
  <div className="hidden md:flex w-[70%] items-center text-sm text-gray-300 mb-3 px-4 ml-0">
    <div className="md:w-[50%] text-xl font-bold">Business Name</div>
    <div className="md:w-[25%] text-xl font-bold text-center">Date Opened</div>
    <div className="md:w-[25%] text-right"></div>
  </div>

  {/* List of Open Cases */}
  <div className="space-y-4">
    {openCases.map((caseItem, idx) => (
      <div
        key={idx}
        className="w-[70%] ml-0 flex flex-col md:flex-row justify-between items-center gap-2 px-4 py-2 rounded-lg "
      >
        {/* Business Name */}
        <div className="w-full md:w-[50%]">
          <div className="bg-white text-black px-6 py-3 rounded-full font-semibold text-center md:text-left w-full">
            {caseItem.name}
          </div>
        </div>

        {/* Date Opened Dropdown */}
        <div className="w-full md:w-[25%] flex justify-center">
          <div className="relative w-[200px]">
            <select className="appearance-none bg-white text-black px-4 py-2 rounded-full pr-8 text-sm w-full">
              {caseItem.dateOptions.map((date, dateIdx) => (
                <option key={dateIdx} value={date}>
                  {date}
                </option>
              ))}
            </select>
            <FaChevronDown
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
              size={12}
            />
          </div>
        </div>

        {/* View Case Button */}
        <div className="w-full md:w-[25%] flex justify-end">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2">
            View Case <FaArrowRight size={12} />
          </button>
        </div>
      </div>
    ))}
  </div>

  {/* Add New Case */}
  <button className="mt-6 text-sm text-blue-300 hover:underline">+ Add New Case</button>
</section>


{/* Closed Cases Section */}
<section className="mt-12">
<div className="flex items-center gap-4 px-4 mb-3">
    <h2 className="text-2xl font-bold mb-6">Closed Cases</h2>
    <button className="text-blue-300 text-sm hover:underline">View Archive</button>
  </div>

  {/* Table Headings */}
  <div className="hidden md:flex items-center text-sm text-gray-300 mb-3 px-4 w-[70%] ml-0">
  <div className="md:w-[50%] text-xl font-bold">Business Name</div>
  <div className="md:w-[25%] text-xl font-bold text-center">Status</div>
  <div className="md:w-[25%] text-right"></div>
</div>

{/* Closed Cases List */}
<div className="space-y-4">
  {[
    { name: 'John Doe Rugs', status: 'Successful' },
    { name: 'Jim’s Moving', status: 'Closed' },
    { name: 'AGL', status: 'Successful' },
    { name: 'ANZ', status: 'Successful' },
  ].map((caseItem, idx) => {
    const isSuccess = caseItem.status === 'Successful';
    return (
      <div
        key={idx}
        className="w-[70%] ml-0 flex flex-col md:flex-row justify-between items-center gap-2 px-4 py-2 rounded-lg"
      >
        {/* Business Name */}
        <div className="w-full md:w-[50%]">
          <div className={` px-6 py-3 rounded-full font-semibold text-black text-center md:text-left
            ${isSuccess ? 'bg-green-400' : 'bg-red-400'}`}>
            {caseItem.name}
          </div>
        </div>

        {/* Status */}
        <div className="w-full md:w-[25%] flex justify-center">
          <div className="flex items-center gap-2 text-sm font-medium">
            <span className={`${isSuccess ? 'text-green-800' : 'text-red-800'}`}>
              {isSuccess ? '✔' : '✖'}
            </span>
            <span className="text-white">{caseItem.status}</span>
          </div>
        </div>

        {/* View Case Button */}
        <div className="w-full md:w-[25%] flex justify-end">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2">
            View Case <FaArrowRight size={12} />
          </button>
        </div>
      </div>
    );
  })}
</div>
</section>



      </div>
    </div>
  );
};

export default Home;
