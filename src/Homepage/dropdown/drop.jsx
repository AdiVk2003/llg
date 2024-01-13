import React, { useState } from 'react';
//import { useNavigate,  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import Logout from './Logout';
import '../../styles/index.css'; 

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const showAlert = () => {
    window.alert('Account Logged Out!');
  };
  
  return (
    <div className={`custom-dropdowndd ${isOpen ? 'open' : ''}`}>
      <div className="dropdown-headerdd" onClick={toggleDropdown}>
        {/* <img className='im' src={U1} alt="Dropdown Arrow" /> */}
      </div>
      {isOpen && (
        <div className="dropdown-contentdd">
          {/* Your dropdown options go here */}
          <div className='Divdd'>Name</div>
          <br/>
          <div className='Divdd'>Email</div>
          <br/>
          
          <button className='butndd' onClick={showAlert}>Logout</button>
      
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
