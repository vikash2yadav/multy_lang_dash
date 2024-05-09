import React from 'react'
import "./register.scss"
import { RiFacebookBoxFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { Link } from 'react-router-dom';
import InputC from '../../components/InputC';
import SideBox from '../../components/SideBox';

const Register = () => {
    return (

        <div className="registercontainer" >
            <div className='firstDiv'>
                <SideBox to="#"
                    tolabel="About Us"
                    title="Welcome back !"
                    desc="you can sign up and use our features."
                />
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
                        <InputC variant="standard" label="Email" />
                    </div>

                    <div className='textbox' >
                        <InputC variant="standard" label="Password" />
                    </div>


                    <button>Sign Up</button>
                </div>
                <div className='logindiv'>
                    have an account ? <span>
                        <Link to="/login">Log In</Link>
                    </span>
                </div>

            </div>
        </div>
    )
}

export default Register