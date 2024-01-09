
import Land from '../images/2.png';
import React from 'react';
import '../Css/landing.css'; 

const Landing = () => {
  return (
    <div className="opening-page">
      <img src={Land} alt="Welcome" className="opening-image" />
      <h1 className="welcome-message">Hoş Geldiniz!</h1>
    </div>
  );
};

export default Landing;
