import React, { Component } from "react";
import ErrorBg from "../images/error-dark2.png";
import logo from "../images/logo.png";


import "../App.css";

class PasswordReset extends Component {
  state = {  
      

  };


  render() {
    
    return (
      <div className="signIn-page">
          <div className="float-left float-left-signUp">
            <div className="logo-div">
              <img alt="logo" src={logo} className="logo"/> WhiteShare
            </div>
              <img src={ErrorBg} alt="login-dark" className="form-image login-dark"/>
          </div>
       
       <div className="form-div">
           <form>
               <span className="form-welcome-text"> Reset Password!</span>
               <p className="form-title">Your new password must be different from previously used passwords.</p>


            <div className="password-div form-input-div">
                <label for="password"> New PassWord</label> 
              
               <input id="password" placeholder="password"/> 
            </div>

            <div className="password-div form-input-div">
                <label for="password"> Confirm PassWord</label> 
              
               <input id="password" placeholder="password"/> 
            </div>


            <div className="btn-div reset-password-btn">
                  <button>Set New Password</button> 
                  <p> <a> Back to Login</a> </p>
            </div>
               



           </form>

       </div>
           
      </div>
    );
  }
}

export default PasswordReset;