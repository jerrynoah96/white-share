import React, { Component } from "react";
import passwordBg from "../images/forgot-password-dark2.png";
import logo from "../images/logo.png";


import "../App.css";

class ForgotPassword extends Component {
  state = {  
      

  };


  render() {
    
    return (
      <div className="signIn-page">
          <div className="float-left float-left-signUp">
            <div className="logo-div">
              <img alt="logo" src={logo} className="logo"/> WhiteShare
            </div>
              <img src={passwordBg} alt="login-dark" className="form-image login-dark"/>
          </div>
       
       <div className="form-div">
           <form>
               <span className="form-welcome-text"> Forgot Password?</span>
               <p className="form-title">Enter your email and we will send you instructions to reset your password.</p>


               <div className="email-div form-input-div">
                <label for="email-input">Email</label>
                <input id="email-input" placeholder="JohnDoe@gmail.com"/>

              </div>

            <div className="btn-div reset-password-btn">
                  <button>Send reset link</button> 
                  <p> <a> Back to Login</a> </p>
            </div>
           </form>

       </div>
           
      </div>
    );
  }
}

export default ForgotPassword;