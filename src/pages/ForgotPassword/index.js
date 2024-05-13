import React, { useState } from 'react'
import "./forgot_password.scss"
import { Link } from 'react-router-dom'
import InputC from '../../components/InputC';
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { forgotPasswordInitialValues, forgotPasswordSchema, checkOtpInitialValues, checkOtpSchema } from "./Schema"
import { forgotPasswordApi, checkOtpApi } from "../../Apis/users"
import SnackBar from '../../components/SnackBar';
import { forgot } from '../../langs/en.js';
import { forgotHN } from '../../langs/hn.js';
// import Selector from '../../components/Selector'
import {options} from '../../helper/helper'

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState(null);
    const [status, setStatus] = useState('');
    const [language, setLanguage] = useState('hn');

    const formik = useFormik({
        initialValues: forgotPasswordInitialValues,
        validationSchema: forgotPasswordSchema,
        onSubmit: async (values) => {
            let data = await forgotPasswordApi(values);
            if (data.status === 200) {
                setOpen(true);
                setStatus(true);
                setMessage(data.data.message)
            } else {
                setOpen(true);
                setStatus(false);
                setMessage(data.data.message)
            }
        },
    })

    const formik2 = useFormik({
        initialValues: checkOtpInitialValues,
        validationSchema: checkOtpSchema,
        onSubmit: async (values) => {
            let data = await checkOtpApi(values);
            if (data.status === 200) {
                setOpen(true);
                setStatus(true);
                setMessage(data.data.message);
                localStorage.setItem("resetToken", data.data.data.user_id)
                setTimeout(() => {
                    navigate('/reset_password')
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
        <div className="mainforgot">
            {/* <Selector options={options} /> */}
            <div className="forgotpasswordcontainer" >
                <div className='firstDiv'></div>

                <div className='secondDiv'>
                    <h1>{language === 'en' ? forgot.title : forgotHN.title}</h1>
                    <p>{language === 'en' ? forgot.desc : forgotHN.desc} </p>

                    <form className='emailform' onSubmit={formik.handleSubmit}>
                        <div className='textbox'>
                            <InputC variant="standard"
                                label={language === 'en' ? forgot.placeholder.email : forgotHN.placeholder.email}
                                name="email"
                                onChange={formik.handleChange}
                                value={formik.values.email} />
                            {formik.errors.email && formik.touched.email ? (
                                <div className='text-red-600 text-xs'>{formik.errors.email}</div>
                            ) : null}
                        </div>

                        <button>{language === 'en' ? forgot.sendBtn : forgotHN.sendBtn}</button>
                    </form>

                    <form className='emailform' onSubmit={formik2.handleSubmit}>
                        <div className='textbox'>
                            <InputC variant="standard"
                                label={language === 'en' ? forgot.placeholder.otp : forgotHN.placeholder.otp}
                                name="otp"
                                onChange={formik2.handleChange}
                                value={formik2.values.otp}
                            />
                            {formik2.errors.otp && formik2.touched.otp ? (
                                <div className='text-red-600 text-xs'>{formik2.errors.otp}</div>
                            ) : null}
                        </div>

                        <button>{language === 'en' ? forgot.verifyBtn : forgotHN.verifyBtn}</button>
                    </form>

                    <div className='logindiv'>
                        <span>
                            <Link to="/register">{language === 'en' ? forgot.signUpLink : forgotHN.signUpLink}</Link>
                        </span>&nbsp; | &nbsp;
                        <span>
                            <Link to="/login">{language === 'en' ? forgot.signInLink : forgotHN.signInLink}</Link>
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

export default ForgotPassword