import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate('/account'); 
  };

  return (
    <div className="container">
      <h2>Create your PopX account</h2>
      <input type="text" placeholder="Full Name*" />
      <input type="text" placeholder="Phone number*" />
      <input type="email" placeholder="Email address*" />
      <input type="password" placeholder="Password *" />
      <input type="text" placeholder="Company name" />
      <p>Are you an Agency?*</p>
      <div>
        <input type="radio" name="agency" id="yes" /><label htmlFor="yes"> Yes</label>
        <input type="radio" name="agency" id="no" /><label htmlFor="no"> No</label>
      </div>
      <button className="btn purple" onClick={handleCreateAccount}>Create Account</button>
    </div>
  );
};

export default Signup;
