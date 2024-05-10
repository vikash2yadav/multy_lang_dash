import React, { useState } from "react";
import PassInput from "../../components/PassInput";
import { MdKey } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./login.scss";
import SnackBar from "../../components/SnackBar";
import { useFormik } from "formik";
import { signInInitialValues, signInSchema } from "./Schema";
import { signInApi } from "../../Apis/users";
import { useNavigate } from "react-router-dom";
import {login} from '../../langs/en.js';
import {loginHN} from '../../langs/hn.js';

const Login = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(null);
  const [status, setStatus] = useState("");
  const [language, setLanguage] = useState('hn');

  const formik = useFormik({
    initialValues: signInInitialValues,
    validationSchema: signInSchema,
    onSubmit: async (values) => {
      let data = await signInApi(values);
      if (data.status === 200) {
        setOpen(true);
        setStatus(true);
        setMessage(data.data.message);
        localStorage.setItem(
          "authorization",
          JSON.stringify(data.data.data.token)
        );
        setTimeout(() => {
          navigate('/dashboard');
        }, 1000)
      } else {
        setOpen(true);
        setStatus(false);
        setMessage(data.data.message);
      }
    },
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="mainlogin">
      <div className="logincontainer">
        <div className="firstDivLogin">
          <h1>{language === 'en' ? login.title : loginHN.title}</h1>
          <p>{language === 'en' ? login.desc : loginHN.desc}</p>

          <form className="form" onSubmit={formik.handleSubmit}>
            <div className="textbox">
              <PassInput
                type="email"
                size="md"
                Key={<FaUser />}
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email && formik.touched.email ? (
                <div className="text-red-600 text-xs">
                  {formik.errors.email}
                </div>
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
                <div className="text-red-600 text-xs">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>

            <span>
              <Link to="/forgot_password">{language === 'en' ? login.forgot : loginHN.forgot}</Link>
            </span>

            <button>{language === 'en' ? login.signInButtonText : loginHN.signInButtonText}</button>

            <div className="logindiv">
              <span>
                <Link to="/register">
                  <u>{language === 'en' ? login.createNewAccount : loginHN.createNewAccount}</u>
                </Link>
              </span>
            </div>
          </form>
        </div>

        <div className="secondDivLogin"></div>
      </div>

      {status ? (
        <SnackBar
          handleClose={handleClose}
          variant="filled"
          severity="success"
          sx={{ width: "100%" }}
          open={open}
          message={message || "Check DB connection"}
        />
      ) : (
        <SnackBar
          handleClose={handleClose}
          variant="filled"
          severity="error"
          sx={{ width: "100%" }}
          open={open}
          message={message || "Check DB connection"}
        />
      )}
    </div>
  );
};

export default Login;
