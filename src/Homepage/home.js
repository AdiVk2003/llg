import React, { useState } from 'react';
import Navbar from './navbar/navb.jsx';
import CustomDropdown from './dropdown/drop';
import {useNavigate} from "react-router-dom"
import "../styles/index.css"
function Homep() {
  const navigate=useNavigate()
  const shwAlert = () => {
    window.alert('This feature is coming soon....!');
  };
  
  return (
    <div className='hh'>
       <React.Fragment>
			<Navbar/>
		</React.Fragment>
      <section>
        <div className= "containerhh">
       
          <h2>Leverage your legal practice with our range of advanced AI tools offering</h2>
          <img src='C:/Users/Charan/OneDrive/Documents/Homes/homes/public/logo192.png/300/200' alt=''></img>
          <div className="cardshh">
            <div className='cardhh'>
              <h3>'Simple and Easy way to Contract Analysis'</h3>
              <p>
              It involves examining and understanding legal agreements to extract key terms,
              obligations, and risks for informed decision-making or automated processing.
              </p>
              <button className='btnhh' onClick={()=>{navigate("/aianalyse")}}>New File</button>
            </div>
            <div className='cardhh'>
              <h3>'LAWFIND: Navigating Legal Excellence Effortlessly'</h3>
              <p>
              Effortlessly connecting high quality legal professionals with potential clients using lawfind, 
              a state of the art platform, which aims to make connections transparent.
              </p>
              <button className='btnhh' onClick={()=>{navigate("/lawfind")}}>Search Now</button>
            </div>
            <div className='cardhh'>
              <h3>'Innovative Contracts: Embrace AI for Seamless Drafting'</h3>
              <p>
              Experience the future of contract drafting with AI. Precision meets efficiency, 
              empowering you to craft flawless agreements effortlessly. Elevate your contracts with innovation.
              </p>
              <button className='bttnhh' onClick={shwAlert}>Coming Soon</button>
            </div>
            
          

          </div>
        </div>
      </section>
    </div>
  )
}
export default Homep;