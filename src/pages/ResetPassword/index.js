import React from 'react'
import { Link } from 'react-router-dom'
import PassInput from "../../components/PassInput";
import { MdKey } from "react-icons/md";
import "./reset_password.scss"

const ResetPassword = () => {
    return (
        <div className="resetpasswordcontainer">
            <div className="firstbox">
                <h1>Create New Password</h1>
                <p>Now, you can create new password</p>

                <form className="form">
                    <div className="textbox">
                        <PassInput type="password" size="md" Key={<MdKey />} />
                    </div>

                    <div className="textbox">
                        <PassInput
                            size="md"
                            type="password"
                            Key={<MdKey />}
                        />
                    </div>
                    <button className='button'>Set Password</button>
                    <div className='logindiv'>
                        <span>
                            <Link to="/"><u>Back</u></Link>
                        </span>
                    </div>
                </form>

            </div>

            <div className="secondbox">
                <h1>Reset Password?</h1>
                <p>Here you can change your password.</p>
            </div>
        </div>
    )
}

export default ResetPassword