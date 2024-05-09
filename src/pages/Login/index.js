import React from "react";
import PassInput from "../../components/PassInput";
import { MdKey } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./login.scss";
import SideBox from "../../components/SideBox"

const Login = () => {
  return (
    <div className="logincontainer">
      <div className="firstDivLogin">
        <h1>Login to your account</h1>
        <p>Login using those networks</p>

        <form className="form">
          <div className="textbox">
            <PassInput type="email" size="md" Key={<FaUser />} />
          </div>

          <div className="textbox">
            <PassInput
              size="md"
              type="password"
              Key={<MdKey />}
            />
            </div>

  
              <span>
                <Link to="/forgot_password">Forgot Password?</Link>
              </span> 
      

          <button>Sign In</button>
          
          <div className='logindiv'>
            <span>
              <Link to="/"><u>Back</u></Link>
            </span>
          </div>
        </form>
      </div>

      <div className="secondDivLogin">
        <SideBox to="/register"
          tolabel="Sign Up"
          title="New Here !"
          desc="you can sign up and use our features."
        />

      </div>
    </div>
  );
};

export default Login;
