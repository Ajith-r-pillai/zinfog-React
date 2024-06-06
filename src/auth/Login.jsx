import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="login-main">
      <div className="login-container">
        <div className="first-vector">
          <img
            src="https://i.postimg.cc/cChYH7Vm/Screenshot-7-removebg-preview.png"
            alt="https://i.postimg.cc/cChYH7Vm/Screenshot-7-removebg-preview.png"
          />
        </div>
        <div className="logo-img">
          <img
            src="https://i.postimg.cc/Ssfj76mz/Screenshot-8-removebg-preview.png"
            alt=""
          />
        </div>
        <div className="second-vector">
          <img
            src="https://i.postimg.cc/cChYH7Vm/Screenshot-7-removebg-preview.png"
            alt="https://i.postimg.cc/cChYH7Vm/Screenshot-7-removebg-preview.png"
          />
        </div>
        <div className="login-para">
          <p>Report Downlad portal</p>
        </div>
        <div className="login-input">
          <p>Login</p>
         
            <form action="" >
              <label htmlFor="">Username</label>
              <input type="text" placeholder="Username"/>
              <label htmlFor="">Password</label>
              <input type="text" placeholder="Password" />
             <div className="form-btn"><button>SUBMIT</button></div> 
            </form>
           <Link style={{marginTop:'1rem',color:'black',fontFamily:'Outfit'}}>Reset Password</Link>
        
     
        </div>
        <Link className="err-mesg">Wrong credentials! Email id or password entered is wrong</Link>
        <div className="login-contact">
        <div className="third-vector">
          <img
            src="https://i.postimg.cc/cChYH7Vm/Screenshot-7-removebg-preview.png"
            alt="https://i.postimg.cc/cChYH7Vm/Screenshot-7-removebg-preview.png"
          />
        </div>
        <p><i class="fa-solid fa-phone"></i> (+91)9288008801</p>

        </div>

        <div className="login-container-footer">
          <p>I hereby agree and accept the <span>Terms of service</span>and<span>Privacy policy</span></p>
        </div>
      </div>
  <div className="login-footer-main">
        <div className="login-footer">
          <p>Copyright © 2023 Access Home Lab Solutions</p>
          <p>All Rights Reserved | <span>Terms and Conditions</span> | <span>Privacy Policy</span></p>
  
  </div>
  </div>
    </div>
  );
}

export default Login;
