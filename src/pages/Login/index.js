import React, { useState } from "react";
import PassInput from "../../components/PassInput";
import { MdKey } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./login.scss";
import SideBox from "../../components/SideBox"
import { useFormik } from "formik";
import { signInInitialValues, signInSchema } from "./Schema";
import { signInApi } from "../../Apis/users"

const Login = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(null);
  const [status, setStatus] = useState('');

  const formik = useFormik({
    initialValues: signInInitialValues,
    validationSchema: signInSchema,
    onSubmit: async (values) => {
      let data = await signInApi(values);
      if (data.status === 200) {
        setOpen(true);
        setStatus(true);
        setMessage(data.data.message);
        console.log(data.data.message)
      } else {
        setOpen(true);
        setStatus(false);
        setMessage(data.data.message)
      }
    },
  })

  return (
    <div className="logincontainer">
      <div className="firstDivLogin">
        <h1>Login to your account</h1>
        <p>Login using those networks</p>

        <form className="form" onSubmit={formik.handleSubmit}>
          <div className="textbox">
            <PassInput type="email" size="md" Key={<FaUser />}
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email} />
            {formik.errors.email && formik.touched.email ? (
              <div className='text-red-600 text-xs'>{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="textbox">
            <PassInput
              size="md"
              type="password"
              Key={<MdKey />}
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password ? (
              <div className='text-red-600 text-xs'>{formik.errors.password}</div>
            ) : null}
          </div>


          <span>
            <Link to="/forgot_password">Forgot Password?</Link>
          </span>


          <button>Sign In</button>

          <div className='logindiv'>
            <span>
              <Link to="/"><u>Back</u></Link>
            </span>
          </div>
        </form>
      </div>

      <div className="secondDivLogin">
        <SideBox to="/register"
          tolabel="Sign Up"
          title="New Here !"
          desc="you can sign up and use our features."
        />

      </div>
    </div>
  );
};

export default Login;
