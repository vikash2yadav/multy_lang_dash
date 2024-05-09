import * as Yup from 'yup';

// Forgot Password
export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Enter registered email'),
});

export const forgotPasswordInitialValues = {
  email: '',
}

// Check otp 
export const checkOtpSchema = Yup.object().shape({
    otp: Yup.string().min(6, 'enter 6 digit otp').required('Enter Otp'),
  });


  export const checkOtpInitialValues = {
    otp: '',
  }
  