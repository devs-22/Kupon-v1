import * as yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const schema = yup.object().shape({
  fullName: yup.string().required('Name should be required please'),
  businessName: yup.string().required(),
  address: yup.string().required(),
  email: yup.string().email().required(),
  phoneNumber: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null]),
});
