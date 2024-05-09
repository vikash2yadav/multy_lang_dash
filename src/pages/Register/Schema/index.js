import * as Yup from 'yup';


export const signUpSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('This field is Mendatory'),
  password: Yup.string().min(6, 'should be upto 6 character' ).required('This field is Mendatory'),
  confirm_password: Yup.string().min(6, 'should be same as password' ).required('This field is Mendatory'),
});

export const signUpInitialValues = {
  email: '',
  password: '',
  confirm_password: ''
}