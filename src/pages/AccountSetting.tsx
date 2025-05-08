import React  from 'react';
import Sidebar from '../components/Sidebar';
import Logo from '../assets/images/VoiceLogo.png';
import ProfileImg from '../assets/images/profile.png'; // use your profile image
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const AccountSettings: React.FC = () => {


  const [showCardForm, setShowCardForm] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  
  const handleRemove = () => {
    setCardNumber('');
    setShowCardForm(false);
  };
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-white flex">
      <Sidebar />

      <div className="w-[55%] px-10 py-8 flex flex-col ml-[120px]">
        {/* Back Link */}
        <div className="flex items-center text-blue-200 cursor-pointer mb-6">
          <span className="mr-2">←</span>
          <span>Back</span>
        </div>

        {/* Page Heading */}
        <h1 className="text-3xl font-bold mb-8">Account Settings</h1>

        {/* Profile Picture */}
        <div className="flex items-center gap-6 mb-8">
  <img src={ProfileImg} alt="Profile" className="w-32 h-32 rounded-full" />
  <div>
    <h2 className="text-xl font-semibold">John Doe</h2>
    <a href="#" className="text-sm text-blue-300 underline mt-1 inline-block">
      Upload / Edit Profile Picture
    </a>
  </div>
</div>


        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block mb-2 text-sm">Full Name</label>
            <input
              type="text"
              defaultValue="John Doe"
              className="w-full px-4 py-2 text-black rounded-[4px]"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm">Company</label>
            <input
              type="text"
              defaultValue="John Doe’s Manufacturing"
              className="w-full px-4 py-2 text-black rounded-[4px]"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm">Email Address</label>
            <input
              type="email"
              defaultValue="john@johndoe.com.au"
              className="w-full px-4 py-2 text-black rounded-[4px]"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm">Phone Number</label>
            <input
              type="text"
              defaultValue="0400 000 000"
              className="w-full px-4 py-2 text-black rounded-[4px]"
            />
          </div>
        </div>

        {/* Payment Info */}
        <div className="mb-6 flex items-center gap-4 flex-wrap">
  <button
    className="bg-[#2A2F3A] text-white px-4 py-2 rounded-full text-sm flex items-center gap-2"
    onClick={() => setShowCardForm(true)}
  >
    Add Payment Method 💳
  </button>

  {/* Show last 4 digits */}
  {cardNumber && (
    <div className="text-sm text-white flex items-center gap-2">
      <span>Current: **** **** **** {cardNumber.slice(-4)}</span>
      <span className="inline-block">
                {/* Mastercard SVG */}
                <svg width="35" height="24" viewBox="0 0 35 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="35.004" height="24" rx="2.00023" fill="white"/>
                  <path d="M22.1785 5.00006C25.9476 5.00006 29.0037 8.09097 29.0037 11.9034C29.0035 15.7156 25.9474 18.8057 22.1785 18.8057C20.4887 18.8057 18.9436 18.1833 17.7517 17.1544C16.5598 18.1832 15.0147 18.8057 13.325 18.8057C9.55612 18.8055 6.50091 15.7155 6.50073 11.9034C6.50073 8.09108 9.55601 5.00025 13.325 5.00006C15.0144 5.00006 16.5599 5.62192 17.7517 6.65045C18.9435 5.62179 20.489 5.00011 22.1785 5.00006Z" fill="#ED0006"/>
                  <path d="M22.1787 5C25.9478 5.00002 29.0029 8.09092 29.0029 11.9033C29.0027 15.7155 25.9477 18.8056 22.1787 18.8057C20.4889 18.8057 18.9438 18.1832 17.752 17.1543C19.2185 15.8882 20.1493 14.0064 20.1494 11.9033C20.1494 9.79983 19.2189 7.91652 17.752 6.65039C18.9438 5.62175 20.4892 5 22.1787 5Z" fill="#F9A000"/>
                  <path d="M17.7517 6.651C19.2186 7.91713 20.1501 9.79954 20.1501 11.903C20.1501 14.0061 19.2183 15.8878 17.7517 17.1539C16.2853 15.8878 15.3543 14.006 15.3542 11.903C15.3542 9.79971 16.285 7.91713 17.7517 6.651Z" fill="#FF5E00"/>
                </svg>
              </span>
              <button className="text-red-400 hover:underline ml-2" onClick={handleRemove}>
                Remove Card
              </button>
    </div>
  )}
</div>

{showCardForm && (
  <div className="bg-[#2C3A5F] text-white p-6 rounded-xl max-w-md w-full space-y-4">
    <div>
      <label className="text-sm mb-1 block">Card Number</label>
      <input
        type="text"
        placeholder="0000 0000 0000 0000"
        maxLength={19}
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value.replace(/[^\d]/g, ''))}
        className="w-full px-4 py-2 text-black rounded-[4px]"
      />
    </div>
    <div className="flex gap-4">
      <div className="flex-1">
        <label className="text-sm mb-1 block">Expiry Date</label>
        <input
          type="text"
          placeholder="MM / YY"
          className="w-full px-4 py-2 text-black rounded-[4px]"
        />
      </div>
      <div className="flex-1">
        <label className="text-sm mb-1 block">CVV</label>
        <input
          type="password"
          placeholder="•••"
          className="w-full px-4 py-2 text-black rounded-[4px]"
        />
      </div>
    </div>
    <div>
      <label className="text-sm mb-1 block">Cardholder’s Name</label>
      <input
        type="text"
        placeholder="Name on card"
        className="w-full px-4 py-2 text-black rounded-[4px]"
      />
    </div>

    <button
      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm"
      onClick={() => setShowCardForm(false)}
    >
      Save Card Details →
    </button>
  </div>
)}


        {/* Save Button */}
        <button
  onClick={() => navigate('/home')} // or '/home' depending on your route setup
  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 text-sm rounded-full w-fit"
>
  Save & Back →
</button>

        {/* Logo bottom */}
        <div className="mt-auto flex justify-end">
        <img
    src={Logo}
    alt="Little Voices"
    className="absolute bottom-12 right-4 w-[120px] "
  />
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
