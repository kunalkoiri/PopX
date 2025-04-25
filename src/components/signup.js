import React from 'react';

const signup = () => {
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
      <button className="btn purple">Create Account</button>
    </div>
  );
};

export default signup;
