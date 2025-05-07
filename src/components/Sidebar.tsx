import React from 'react';
import Profile from '../assets/images/profile.png'
import HomeIcon from '../assets/svg/Home';
import  Newcase  from '../assets/svg/Newcase';
import  Support  from '../assets/svg/Support';


const Sidebar = () => {
  return (
    <aside className="w-[90px] bg-[#F28DB9] fixed top-0 bottom-0 left-0 flex flex-col justify-between items-center py-6 z-10 rounded-[100px] mt-[20px] mb-[20px] ml-[18px]">
     <div className="flex flex-col gap-10 items-center">
      <div className="bg-white text-black w-[60px] h-[60px] flex items-center justify-center rounded-full font-bold text-xl">
        LV
      </div>
      <div className="flex flex-col gap-6 items-center">
        <HomeIcon className="w-18 h-18 text-white" />
        <Newcase className="w-18 h-18 text-white" />
        <Support className="w-18 h-18 text-white" />
      </div>
    </div>
    <div className="w-[60px] h-[60px] rounded-full border-2 border-white overflow-hidden">
      <img src= {Profile} alt="User" className="w-full h-full object-cover" />
    </div>
  </aside>
  );
};

export default Sidebar;
