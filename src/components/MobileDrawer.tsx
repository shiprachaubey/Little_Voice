import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import HomeIcon from '../assets/svg/Home';
import Newcase from '../assets/svg/Newcase';
import Support from '../assets/svg/Support';
import Profile from '../assets/images/profile.jpeg';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  navigate: any;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose, navigate }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-[240px] h-full bg-[#F28DB9] z-40 p-6 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex justify-between items-center mb-6">
        <div className="text-black font-bold text-xl">LV</div>
        <button onClick={onClose}>
          <FaTimes size={20} className="text-white" />
        </button>
      </div>

      <div className="flex flex-col gap-6">
        <NavLink to="/home" onClick={onClose}>
          {({ isActive }) => (
            <div className="flex items-center gap-3">
              <HomeIcon className="w-6 h-6" fill={isActive ? '#FF0000' : '#FFFFFF'} />
              <span className="text-white font-medium">Home</span>
            </div>
          )}
        </NavLink>

        <NavLink to="/newcase" onClick={onClose}>
          {({ isActive }) => (
            <div className="flex items-center gap-3">
              <Newcase className="w-6 h-6" fill={isActive ? '#FF0000' : '#FFFFFF'} />
              <span className="text-white font-medium">New Case</span>
            </div>
          )}
        </NavLink>

        <NavLink to="/support" onClick={onClose}>
          {({ isActive }) => (
            <div className="flex items-center gap-3">
              <Support className="w-6 h-6" fill={isActive ? '#FF0000' : '#FFFFFF'} />
              <span className="text-white font-medium">Support</span>
            </div>
          )}
        </NavLink>
      </div>

      <div
        onClick={() => {
          navigate('/account-setting');
          onClose();
        }}
        className="mt-10 flex items-center gap-3 cursor-pointer"
      >
        <img
          src={Profile}
          alt="User"
          className="w-10 h-10 rounded-full border-2 border-white object-cover"
        />
        <span className="text-white font-medium">Account</span>
      </div>
    </div>
  );
};

export default MobileDrawer;
