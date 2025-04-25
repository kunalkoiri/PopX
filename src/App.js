import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/welcome';
import Login from './components/login';
import Signup from './components/signup';
import Accountsetting from './components/accountsetting';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/account" element={<Accountsetting/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
