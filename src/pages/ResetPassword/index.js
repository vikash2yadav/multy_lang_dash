import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PassInput from "../../components/PassInput";
import { MdKey } from "react-icons/md";
import "./reset_password.scss"
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { resetPasswordInitialValues, resetPasswordSchema } from './Schema'
import { resetPasswordApi } from "../../Apis/users"
import SnackBar from '../../components/SnackBar';
import { reset } from '../../langs/en.js';
import { resetHN } from '../../langs/hn.js';

const ResetPassword = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState(null);
    const [status, setStatus] = useState('');
    const [language, setLanguage] = useState('hn');

    const formik = useFormik({

        initialValues: resetPasswordInitialValues,
        validationSchema: resetPasswordSchema,
        onSubmit: async (values) => {
            let user_id = localStorage.getItem('resetToken');
            let data = await resetPasswordApi(values, user_id);
            if (data.status === 200) {
                setOpen(true);
                setStatus(true);
                setMessage(data.data.message);
                setTimeout(() => {
                    navigate('/login')
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
        <div className="mainreset">
            <div className="resetpasswordcontainer">
                <div className="firstbox">
                    <h1>{language === 'en' ? reset.title : resetHN.title}</h1>
                    <p>{language === 'en' ? reset.desc : resetHN.desc}</p>

                    <form className="form" onSubmit={formik.handleSubmit}>
                        <div className="textbox">
                            <PassInput type="password" size="md" Key={<MdKey />}
                                placeholder={language === 'en' ? reset.placeholder.password : resetHN.placeholder.password}
                                name="new_password"
                                onChange={formik.handleChange}
                                value={formik.values.new_password}
                            />
                            {formik.errors.new_password && formik.touched.new_password ? (
                                <div className='text-red-600 text-xs'>{formik.errors.new_password}</div>
                            ) : null}
                        </div>

                        <div className="textbox">
                            <PassInput
                                placeholder={language === 'en' ? reset.placeholder.confirm_password : resetHN.placeholder.confirm_password}
                                size="md"
                                type="password"
                                Key={<MdKey />}
                                name="confirm_password"
                                onChange={formik.handleChange}
                                value={formik.values.confirm_password}
                            />
                            {formik.errors.confirm_password && formik.touched.confirm_password ? (
                                <div className='text-red-600 text-xs'>{formik.errors.confirm_password}</div>
                            ) : null}
                        </div>
                        <button className='button'>{language === 'en' ? reset.btn : resetHN.btn}</button>
                        <div className='logindiv'>
                            <span>
                                <Link to="/"><u>{language === 'en' ? reset.link : resetHN.link}</u></Link>
                            </span>
                        </div>
                    </form>

                </div>

                <div className="secondbox">
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

export default ResetPassword