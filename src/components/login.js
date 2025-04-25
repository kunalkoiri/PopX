import React from 'react';

const Login = () => {
  return (
    <div className="container">
      <h2>Signin to your PopX account</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <label>Email Address</label>
      <input type="email" placeholder="Enter email address" />
      <label>Password</label>
      <input type="password" placeholder="Enter password" />
      <button className="btn gray">Login</button>
    </div>
  );
};

export default Login;
