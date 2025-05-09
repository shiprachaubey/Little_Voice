import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './pages/Home';
import Newcase from './pages/NewCase';
import GenerateCase from './pages/GenerateCase';
import CaseChat from './pages/CaseChat';
import AccountSettings from './pages/AccountSetting';
import Support from './pages/Support';
import FinalSubmit from './pages/FinalSubmit';
import ChatHistory from './pages/ChatHistory';
import Chat from './pages/Chat';
import ForgetPassword from './pages/Forgetpassword';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-800">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<ForgetPassword />} />
          <Route path="/signup" element={<SignUp />} />
           <Route path="/home"element={<Home />}/>
           <Route path="/newcase"element={<Newcase />}/>
           <Route path="/generate-case"element={<GenerateCase />}/>
           <Route path="/case-chat" element={<CaseChat />} />
           <Route path="/account-setting" element={<AccountSettings />} />
           <Route path="/support" element={<Support />} />
           <Route path="/final-submit" element={<FinalSubmit />} />
           <Route path="/chat-history" element={<ChatHistory />} />
           <Route path="/chat" element={<Chat/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;