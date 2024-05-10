import React, { useState } from 'react'
import "./register.scss"
import { RiFacebookBoxFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import InputC from '../../components/InputC';
import { Link, useNavigate } from 'react-router-dom'
import { signUpApi } from "../../Apis/users"
import { useFormik } from 'formik';
import { signUpSchema, signUpInitialValues } from "./Schema"
import SnackBar from '../../components/SnackBar';
import { register } from '../../langs/en.js';
import { registerHN } from '../../langs/hn.js';

const Register = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState(null);
    const [status, setStatus] = useState('');
    const [language, setLanguage] = useState('hn');

    const formik = useFormik({
        initialValues: signUpInitialValues,
        validationSchema: signUpSchema,
        onSubmit: async (values) => {
            let data = await signUpApi(values);
            if (data.status === 200) {
                setOpen(true);
                setStatus(true);
                setMessage(data.data.message);
                setTimeout(() => {
                    navigate('signin');
                }, 1000)
            } else {
                setOpen(true);
                setStatus(false);
                setMessage(data.data.message)
            }
        },
    })

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div className="mainregister">
            <div className="registercontainer" >
                <div className='firstDiv'></div>

                <div className='secondDiv'>
                    <h1>{language === 'en' ? register.title : registerHN.title}</h1>
                    <div className="links">
                        <a href="#"><RiFacebookBoxFill /></a>
                        <a href="#"><IoLogoInstagram /></a>
                        <a href="#"><IoLogoLinkedin /></a>
                    </div>
                    <p> {language === 'en' ? register.desc : registerHN.desc}</p>

                    <form className='form' onSubmit={formik.handleSubmit}>
                        <div className='textbox'>
                            <InputC variant="standard" 
                            placeholder={language === 'en' ? register.placeholder.email : registerHN.placeholder.email }
                                name="email"
                                onChange={formik.handleChange}
                                value={formik.values.email} />
                            {formik.errors.email && formik.touched.email ? (
                                <div className='text-red-600 text-xs'>{formik.errors.email}</div>
                            ) : null}
                        </div>

                        <div className='textbox' >
                            <InputC variant="standard"
                            placeholder={language === 'en' ? register.placeholder.password : registerHN.placeholder.password }
                                onChange={formik.handleChange}
                                name="password"
                                value={formik.values.password} />
                            {formik.errors.password && formik.touched.password ? (
                                <div className='text-red-600 text-xs'>{formik.errors.password}</div>
                            ) : null}
                        </div>

                        <div className='textbox' >
                            <InputC variant="standard"
                               placeholder={language === 'en' ? register.placeholder.confirm_password : registerHN.placeholder.confirm_password }
                                onChange={formik.handleChange}
                                name="confirm_password"
                                value={formik.values.confirm_password} />
                            {formik.errors.confirm_password && formik.touched.confirm_password ? (
                                <div className='text-red-600 text-xs'>{formik.errors.confirm_password}</div>
                            ) : null}
                        </div>


                        <button>{language === 'en' ? register.signUpButtonText : registerHN.signUpButtonText}</button>
                    </form>
                    <div className='logindiv'>
                        {language === 'en' ? register.haveAnAccount : registerHN.haveAnAccount} <span>
                            <Link to="/login">{language === 'en' ? register.link : registerHN.link}</Link>
                        </span>
                    </div>

                </div>
            </div>

            {status ? (
                <SnackBar handleClose={handleClose} variant="filled" severity="success" sx={{ width: '100%' }} open={open} message={message} />
            ) :
                (
                    <SnackBar handleClose={handleClose} variant="filled" severity="error" sx={{ width: '100%' }} open={open} message={message} />
                )
            }

        </div>
    )
}

export default Register