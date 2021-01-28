import React from 'react';
import logo from "../images/logo.png";
import '../App.css';

const Landing=()=> {

  return (
    <div className="landing"> 
        <div className="side1 landing-child">
          <div className="logo-div">
            <img alt="logo" src={logo} className="logo"/> WhiteShare
          </div>
            
            <h2 className="landing-child-text">
              Become Storage Provider 

            </h2>


            <button className="btn-sm landing-btn">Store on Mainnet</button>
            
        </div> 

        <div className="side2 landing-child">

        <h2 className="landing-child-text">
              Access Decentralized Storage

            </h2>

            <button className="btn-mm landing-btn">Mine on Mainnet</button>
           
            
        </div> 
      
    </div>
  );
}

export default Landing;