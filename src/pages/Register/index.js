import React from 'react'
import "./register.scss"
import { RiFacebookBoxFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import PassInput from '../../components/PassInput';
import { MdKey } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Mover from '../../components/mover';

const Register = () => {
    return (
        <div className = "main" >
            <div className='container'>
                <div className='firstDiv'>
                    <h1>Welcome back !</h1>
                    <p>You can create your account and enjoy our features.</p>
                    <Link className="link" to="#">
                        About Us
                    </Link>
                </div>
                <div className='secondDiv'>
                    <h1>Create Account</h1>
                    <div className="links">
                        <a href="#"><RiFacebookBoxFill /></a>
                        <a href="#"><IoLogoInstagram /></a>
                        <a href="#"><IoLogoLinkedin /></a>
                    </div>
                    <p>Fill form and create account. </p>
                    <div className='form'>

                        <div className='textbox'>
                            <PassInput type="email"
                                size="md"
                                Key={<FaUser />} />
                        </div>

                        <div className='textbox' >
                            <PassInput
                                size="md"
                                password="password"
                                type="password"
                                Key={<MdKey />} />
                        </div>


                    </div>
                    <button>Sign Up</button>
                    <div className='logindiv'>
                        have an account ? <span>
                            <Link to="/login">Log In</Link>
                        </span>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default Register