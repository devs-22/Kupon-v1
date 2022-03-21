import * as yup from 'yup';

export const schema = yup.object().shape({
  fullName: yup.string().required('Name should be required please'),
  businessName: yup.string().required(),
  address: yup.string().required(),
  email: yup.string().email().required(),
  phoneNumber: yup.number().positive().integer().required(),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null]),
});
