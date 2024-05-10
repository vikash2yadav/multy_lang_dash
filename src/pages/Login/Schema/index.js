import * as Yup from 'yup';

export const signInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('This feild is Mendatory'),
  password: Yup.string().required('This feild is Mendatory'),
});

export const signInInitialValues = {
  email: '',
  password: '',
}