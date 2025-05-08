
import React, { useState, ChangeEvent, FC } from 'react';
import Sidebar from '../components/Sidebar';
import Logo from '../assets/images/VoiceLogo.png';
import { useNavigate } from 'react-router-dom';

const NewCase: FC = () => {
  const navigate = useNavigate();

  // Form field states
  const [companyName, setCompanyName] = useState('');
  const [companyWebsite, setCompanyWebsite] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [issueDetails, setIssueDetails] = useState('');
  const [contractFile, setContractFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setContractFile(e.target.files[0]);
    }
  };

  const handleNext = () => {
    const caseData = {
      companyName,
      companyWebsite,
      contactName,
      email,
      issueDetails,
      contractFile,
    };

    navigate('/generate-case', { state: caseData });
  };

  return (
    <div className="min-h-screen text-white flex">
      <Sidebar />
      <div className="flex-1 ml-[120px] px-10 py-8">
        {/* Back Button */}
        <div className="flex items-center text-blue-200 cursor-pointer mb-6">
          <span className="mr-2">←</span>
          <span>Back</span>
        </div>

        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-6">New Case</h1>

        <div className="space-y-6 w-full max-w-[900px]">
          <div className="text-xl font-semibold mb-4">Case Details</div>

          {/* Company & Website */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="companyName" className="block mb-2">
                Company Name
              </label>
              <input
                id="companyName"
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full px-4 py-2 rounded-[8px] text-black"
                placeholder="AGL"
              />
            </div>
            <div>
              <label htmlFor="companyWebsite" className="block mb-2">
                Company Website
              </label>
              <input
                id="companyWebsite"
                type="text"
                value={companyWebsite}
                onChange={(e) => setCompanyWebsite(e.target.value)}
                className="w-full px-4 py-2 rounded-[8px] text-black"
                placeholder="agl.com.au"
              />
            </div>
          </div>

          {/* Contact & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="contactName" className="block mb-2">
                Contact Name
              </label>
              <input
                id="contactName"
                type="text"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                className="w-full px-4 py-2 rounded-[8px] text-black"
                placeholder="James Andrew"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-[8px] text-black"
                placeholder="support@agl.com.au"
              />
            </div>
          </div>

          {/* Issue Details */}
          <div>
            <label htmlFor="issueDetails" className="block mb-2">
              Issue Details / History
            </label>
            <textarea
              id="issueDetails"
              value={issueDetails}
              onChange={(e) => setIssueDetails(e.target.value)}
              className="w-full px-4 py-3 rounded-[8px] text-black"
              rows={6}
              placeholder="Describe the issue here..."
            />
          </div>

          {/* File Upload */}
          <div>
            <label htmlFor="contractFile" className="block mb-2">
              Upload Contract
            </label>
            <input
              id="contractFile"
              type="file"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              onChange={handleFileChange}
              className="text-sm text-white"
            />
            <p className="text-xs text-gray-300 mt-1">Max File Size: 15MB</p>
            {contractFile && (
              <p className="mt-2 text-sm text-green-300">
                Selected File: {contractFile.name}
              </p>
            )}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full mt-4"
          >
            Next →
          </button>
        </div>
      </div>

      <img
        src={Logo}
        alt="Little Voices"
        className="absolute bottom-12 right-4 w-[120px]"
      />
    </div>
  );
};

export default NewCase;
