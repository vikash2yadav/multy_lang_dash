import React, { useState } from 'react'
import "./forgot_password.scss"
import { Link } from 'react-router-dom'
import InputC from '../../components/InputC';
import SideBox from "../../components/SideBox"
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { forgotPasswordInitialValues, forgotPasswordSchema, checkOtpInitialValues, checkOtpSchema } from "./Schema"
import { forgotPasswordApi, checkOtpApi } from "../../Apis/users"

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState(null);
    const [status, setStatus] = useState('');

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
                setMessage(data.data.message)
            } else {
                setOpen(true);
                setStatus(false);
                setMessage(data.data.message)
            }
        },
    })


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
                <form className='emailform' onSubmit={formik.handleSubmit}>
                    <div className='textbox'>
                        <InputC variant="standard" label="Email"
                            name="email"
                            onChange={formik.handleChange}
                            value={formik.values.email} />
                        {formik.errors.email && formik.touched.email ? (
                            <div className='text-red-600 text-xs'>{formik.errors.email}</div>
                        ) : null}
                    </div>

                <button>Send OTP</button>
                </form>

                <form className='emailform'  onSubmit={formik2.handleSubmit}>

                    <div className='textbox'>
                        <InputC variant="standard" label="Otp" 
                         name="otp"
                         onChange={formik2.handleChange}
                         value={formik2.values.otp} 
                         />
                               {formik2.errors.otp && formik2.touched.otp ? (
                            <div className='text-red-600 text-xs'>{formik2.errors.otp}</div>
                        ) : null}
                    </div>

                <button>Verify</button>
                </form>

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