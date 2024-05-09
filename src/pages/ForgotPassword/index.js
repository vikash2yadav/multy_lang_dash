import React from 'react'
import "./forgot_password.scss"
import { Link } from 'react-router-dom'
import PassInput from "../../components/PassInput";
import InputC from '../../components/InputC';

const ForgotPassword = () => {
    return (
        <div className = "main" >
            <div className='container'>
                <div className='firstDiv'>
                    <h1>Send Email !</h1>
                    <p>You can change your password by the help of otp which is send to your email.</p>
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
            </div>
    )
}   

export default ForgotPassword