import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-800">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
           <Route path="/home"element={<Home />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;