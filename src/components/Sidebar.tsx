// import React from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import Profile from '../assets/images/profile.jpeg';
// import HomeIcon from '../assets/svg/Home';
// import Newcase from '../assets/svg/Newcase';
// import Support from '../assets/svg/Support';

// const Sidebar = () => {
//   const navigate = useNavigate();

//   return (
//     <aside className="w-[90px] bg-[#F28DB9] fixed top-0 bottom-0 left-0 flex flex-col justify-between items-center py-6 z-10 rounded-[100px] mt-[20px] mb-[20px] ml-[18px]">
//       <div className="flex flex-col gap-10 items-center">
//         <div className="bg-white text-black w-[60px] h-[60px] flex items-center justify-center rounded-full font-bold text-xl">
//           LV
//         </div>

//         <div className="flex flex-col gap-6 items-center">
//           <NavLink to="/home">
//             {({ isActive }) => (
//               <HomeIcon
//                 className="w-13 h-13 cursor-pointer"
//                 fill={isActive ? '#FF0000' : '#FFFFFF'} // red when active
//               />
//             )}
//           </NavLink>

//           <NavLink to="/newcase">
//             {({ isActive }) => (
//               <Newcase
//                 className="w-13 h-13 cursor-pointer"
//                 fill={isActive ? '#FF0000' : '#FFFFFF'}
//               />
//             )}
//           </NavLink>

//           <NavLink to="/support">
//             {({ isActive }) => (
//               <Support
//                 className="w-13 h-13 cursor-pointer"
//                 fill={isActive ? '#FF0000' : '#FFFFFF'}
//               />
//             )}
//           </NavLink>
//         </div>
//       </div>

//       <div
//         className="w-[60px] h-[60px] rounded-full border-2 border-white overflow-hidden cursor-pointer"
//         onClick={() => navigate('/account-setting')}
//       >
//         <img src={Profile} alt="User" className="w-full h-full object-cover" />
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Profile from '../assets/images/profile.jpeg';
import HomeIcon from '../assets/svg/Home';
import Newcase from '../assets/svg/Newcase';
import Support from '../assets/svg/Support';
import MobileDrawer from './MobileDrawer';

const Sidebar = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      {/* Hamburger Menu on Mobile */}
      <div className="fixed top-4 left-4 z-30 md:hidden">
        <button
          onClick={() => setDrawerOpen(true)}
          className="text-white bg-[#F28DB9] p-2 rounded-full"
        >
          <FaBars size={20} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} navigate={navigate} />

      {/* Desktop Sidebar */}
      <aside
        className="
          hidden md:flex 
          flex-col justify-between items-center 
          w-[90px] bg-[#F28DB9] 
          fixed top-0 bottom-0 left-0 
          py-6 z-10 rounded-[100px] mt-[20px] mb-[20px] ml-[18px]
        "
      >
        <div className="flex flex-col gap-10 items-center">
          <div className="bg-white text-black w-[60px] h-[60px] flex items-center justify-center rounded-full font-bold text-xl">
            LV
          </div>

          <div className="flex flex-col gap-6 items-center">
            <NavLink to="/home">
              {({ isActive }) => (
                <HomeIcon className="w-14 h-14" fill={isActive ? '#FF0000' : '#FFFFFF'} />
              )}
            </NavLink>

            <NavLink to="/newcase">
              {({ isActive }) => (
                <Newcase className="w-14 h-14" fill={isActive ? '#FF0000' : '#FFFFFF'} />
              )}
            </NavLink>

            <NavLink to="/support">
              {({ isActive }) => (
                <Support className="w-14 h-14" fill={isActive ? '#FF0000' : '#FFFFFF'} />
              )}
            </NavLink>
          </div>
        </div>

        <div
          onClick={() => navigate('/account-setting')}
          className="w-[60px] h-[60px] rounded-full border-2 border-white overflow-hidden cursor-pointer"
        >
          <img src={Profile} alt="User" className="w-full h-full object-cover" />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
