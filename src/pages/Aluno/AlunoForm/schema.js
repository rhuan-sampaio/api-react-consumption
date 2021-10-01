import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Name is required').min(3),
  lastname: yup
    .string()
    .required('Last name is required')
    .min(3, 'Must be at least 3 characters'),
  email: yup
    .string()
    .email('Please choose a valid e-mail')
    .required('E-mail is required'),
  weight: yup
    .number()
    .typeError('Please choose a valid number')
    .required('Weight is required'),
  height: yup
    .number()
    .typeError('Please choose a valid number')
    .required('Height is required'),
  age: yup.number().integer().required('Age is required'),
});
export default schema;
