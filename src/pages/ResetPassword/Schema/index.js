import * as Yup from 'yup';


// Reset Password
export const resetPasswordSchema = Yup.object().shape({
    new_password: Yup.string().min(6, 'should be minimum 6 digit').required('This field is Mendatory'),
    confirm_password: Yup.string().required('This field is Mendatory'),
});

export const resetPasswordInitialValues = {
  new_password: '',
  confirm_password: ''
}