import React, { Component } from "react";
import LoginBg from "../images/login-dark1.png";
import logo from "../images/logo.png";


import "../App.css";

class SignIn extends Component {
  state = {  
      

  };


  render() {
    
    return (
      <div className="signIn-page">
          <div className="float-left float-left-signUp">
            <div className="logo-div">
              <img alt="logo" src={logo} className="logo"/> WhiteShare
            </div>
              <img src={LoginBg} alt="login-dark" className="form-image login-dark"/>
          </div>
       
       <div className="form-div">
           <form>
               <span className="form-welcome-text"> Welcome to WhiteShare</span>
               <p className="form-title">Please sign-In to your account to start the adventure</p>

              <div className="email-div form-input-div">
                <label for="email-input">Email</label>
                <input id="email-input" placeholder="JohnDoe@gmail.com"/>

              </div>
               

            <div className="password-div form-input-div">
              <div className="password-forgotPassword">
                <label for="password">PassWord</label> <a className="forgot-password">Forgot Password?</a>
              </div>
              
               <input id="password" placeholder="password"/>
               <div className="rememberMe-checkbox">
                <input type="checkbox"/> Remember Me
               </div>


               <div className="btn-div">
                  <button>Login</button>
                  <p>New on our Platform? <a>create an account</a> </p>
               </div>
               
            </div>
               



           </form>

       </div>
           
      </div>
    );
  }
}

export default SignIn;