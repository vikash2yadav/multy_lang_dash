import React from "react";
import PassInput from "../../components/PassInput";
import { MdKey } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {
  return (
    <div className="mainLogin">
      <div className="containerLogin">
        <div className="firstDivLogin">
          <h1>Login to Your Account</h1>
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
              <div className='registerdiv'>
                <span>
                  <Link to="/forgot_password">Forgot Password?</Link>
                </span>
              </div>
            </div>
          <button>Sign In</button>
          </form>

        </div>

        <div className="secondDivLogin">
          <h1>New Here?</h1>
          <p>If you dont have an account go and create first.</p>

          <Link className="link" to="/register">
            Sign Up
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Login;
