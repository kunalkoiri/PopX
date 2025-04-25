import React from 'react';
import profilePic from '../assets/profile.jpg';

const Accountsetting = () => {
  return (
    <div className="container">
      <h3>Account Settings</h3>
      <div className="profile-box">
        <img src={profilePic} alt="Profile" className="avatar" />
        <div>
          <strong>Marry Doe</strong>
          <p>Marry@Gmail.Com</p>
        </div>
      </div>
      <p className="bio">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  );
};

export default Accountsetting;
