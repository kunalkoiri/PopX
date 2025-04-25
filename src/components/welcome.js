import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Welcome to PopX</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <button onClick={() => navigate('/register')} className="btn purple">Create Account</button>
      <button onClick={() => navigate('/login')} className="btn light">Already Registered? Login</button>
    </div>
  );
};

export default Welcome;
