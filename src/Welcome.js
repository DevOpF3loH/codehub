import React from 'react';
import "./Welcome.css";
import logo from './images/logogreen.png';

function Welcome() {
  return (
    <div className='welcome'>
    <div className="welcome_container">
    <img src={logo} alt="Codehub Logo"/>
    <h1>Welcome</h1>
    </div>
  </div>
  )
}

export default Welcome