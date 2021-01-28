import React, { Component } from "react";
import SignUpBg from "../images/register-dark1.png";
import logo from "../images/logo.png";


import "../App.css";

class SignUp extends Component {
  state = {  
      

  };


  render() {
    
    return (
      <div className="signIn-page">
          <div className="float-left float-left-signUp">
            <div className="logo-div">
              <img alt="logo" src={logo} className="logo"/> WhiteShare
            </div>
              <img src={SignUpBg} alt="login-dark" className="form-image login-dark"/>
          </div>
       
       <div className="form-div">
           <form>
               <span className="form-welcome-text"> Adventure Starts here!</span>
               <p className="form-title">Make Your App management easy and fun</p>


               <div className="email-div form-input-div">
                <label for="username-input">Username</label>
                <input id="username-input" placeholder="john doe"/>

              </div>

              <div className="email-div form-input-div">
                <label for="email-input">Email</label>
                <input id="email-input" placeholder="JohnDoe@gmail.com"/>

              </div>
               

            <div className="password-div form-input-div">
              <div className="password-forgotPassword">
                <label for="password">PassWord</label> 
              </div>
              
               <input id="password" placeholder="password"/>
               <div className="rememberMe-checkbox">
                <input type="checkbox"/> <p>I agree to <a>privacy policy and terms</a> </p>
               </div>


               <div className="btn-div">
                  <button>Sign Up</button>
                  <p>Already have an account? <a >Sign in instead</a> </p>
               </div>
               
            </div>
               



           </form>

       </div>
           
      </div>
    );
  }
}

export default SignUp;