

import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Logo from '../assets/images/VoiceLogo.png';
import { useLocation, useNavigate } from 'react-router-dom';

const GenerateCase: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const caseDetails = location.state?.caseData;

  const [tone, setTone] = useState('');
  const [showDetails, setShowDetails] = useState(true);
  const [desiredOutcome, setDesiredOutcome] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No token found');

      const res = await fetch('http://localhost:5000/api/case/case/ai-response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...caseDetails,
          tone,
          desiredOutcome,
        }),
      });

      const text = await res.text();
      console.log("🔍 Raw response text:", text);
      if (!res.ok) {
        console.error('❌ Server returned error:', res.status, text);
        throw new Error('Failed to generate case response');
      }

      const data = JSON.parse(text);

      navigate('/case-chat', {
        state: {
          aiResponse: data.aiResponse,
          caseMeta: {
            ...caseDetails,
            tone,
            desiredOutcome,
          },
        },
      });
    } catch (error) {
      console.error('Error generating case response:', error);
      alert('Something went wrong generating your case response.');
    } finally {
      setLoading(false);
    }
  };

  if (!caseDetails) {
    return <div className="text-white p-4">No case data provided. Go back to the New Case page.</div>;
  }

  return (
    <div className="min-h-screen bg-little-voices-navy text-white flex flex-col md:flex-row relative">
      <Sidebar />

      <div className="flex-1 px-4 md:px-10 py-8 md:ml-[120px] w-full max-w-[1000px]">
        {/* Back Link */}
        <div className="flex items-center text-blue-200 cursor-pointer mb-6">
          <span className="mr-2">←</span>
          <span>Previous</span>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">{caseDetails?.companyName}</h1>
          <span className="bg-[#2A2F3A] px-4 py-1 rounded-full text-sm font-medium w-fit">
            {new Date().toLocaleDateString('en-GB')}
          </span>
        </div>

        {/* Case Detail View */}
        <div className="mb-6">
          <div className="text-lg font-semibold mb-4 flex items-center justify-between">
  <span>Case Details</span>
  <button
    onClick={() => setShowDetails(!showDetails)}
    className="text-sm bg-[#1F2937] px-2 py-1 rounded hover:bg-[#374151]"
  >
    {showDetails ? '▾' : '▸'}
  </button>
</div>
          {showDetails && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Company Name</p>
                  <p className="font-medium">{caseDetails.companyName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Company Website</p>
                  <p className="font-medium">{caseDetails.companyWebsite}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Contact Name</p>
                  <p className="font-medium">{caseDetails.contactName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <p className="font-medium">{caseDetails.email}</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Issue Details / History</p>
                <p className="text-sm leading-relaxed">
                  {caseDetails.issueDescription}
                </p>
              </div>
            </>
          )}
        </div>

        {/* Tone + Outcome */}
        <div className="mb-6">
          <label className="block mb-2">Tone of Voice</label>
          <select
            className="w-full px-4 py-2 text-black rounded-[4px]"
            value={tone}
            onChange={(e) => setTone(e.target.value)}
          >
            <option value="">Select one</option>
            <option value="Formal">Formal</option>
            <option value="Assertive">Assertive</option>
            <option value="Sympathetic">Sympathetic</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block mb-2">What is your Desired Outcome?</label>
          <textarea
            className="w-full px-4 py-3 text-black rounded-[4px]"
            rows={5}
            placeholder="Type your outcome..."
            value={desiredOutcome}
            onChange={(e) => setDesiredOutcome(e.target.value)}
          />
        </div>

        <button
          onClick={handleGenerate}
          disabled={loading || !tone || !desiredOutcome}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 text-sm rounded-full w-fit disabled:opacity-50"
        >
          {loading ? 'Generating...' : 'Generate →'}
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

