import React from 'react'
import "./forgot_password.scss"
import { Link } from 'react-router-dom'
import InputC from '../../components/InputC';
import SideBox from "../../components/SideBox"

const ForgotPassword = () => {
    return (
        <div className="forgotpasswordcontainer" >
            <div className='firstDiv'>
                <SideBox to="/forgot_password"
                    title="Send Otp !"
                    desc="you can send otp and reset your password."
                />
            </div>
            <div className='secondDiv'>
                <h1>Forgot Password</h1>
                <p>Enter email and we will sent otp. </p>
                <div className='emailform'>
                    <div className='textbox'>
                        <InputC variant="standard" label="Email" />
                    </div>

                </div>
                <button>Send OTP</button>

                <div className='emailform'>

                    <div className='textbox'>
                        <InputC variant="standard" label="Otp" />
                    </div>

                </div>
                <button>Verify OTP</button>
                <div className='logindiv'>
                    <span>
                        <Link to="/register">Sign Up</Link>
                    </span>&nbsp; | &nbsp;
                    <span>
                        <Link to="/login">Sign In</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword