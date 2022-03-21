import { useState } from 'react';
import TextField from '@mui/material/TextField';
import './SignUp.css';
import { NavLink } from 'react-router-dom';
import InputAdornment from '@mui/material/InputAdornment';
import MuiPhoneNumber from 'material-ui-phone-number';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { schema } from './schema';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

type FormValues = {
  fullName: string;
  businessName: string;
  address: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
};

const SignUp = () => {
  const [number, setNumber] = useState('');
  const handleNumber = () => {
    setNumber(number);
  };
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop: string) => (event: any) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data: any, e: any) => {
    e.target.reset();
    console.log(data);
  };
  return (
    <div className="sign-container">
      <div>
        <img
          src={require('../../assets/IMAGES/Leaf.png')}
          alt=""
          className="leaf"
        />
        <NavLink to="/" className={'header-link'}>
          Kupon
        </NavLink>
        <div className="details-container">
          <p className="C-A">Create Account</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>Full Name</label>
              <Controller
                name="fullName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    required
                    id="outlined-required"
                    // error={errors.fullName}
                    label="Required"
                    className="text-field"
                    helperText={errors.fullName ? errors.fullName.message : ''}
                  />
                )}
              />
            </div>

            <div className="header-space">
              <label>Business Name</label>
              <Controller
                name="businessName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    required
                    id="outlined-required"
                    // error={errors.businessName}
                    label="Required"
                    className="text-field"
                    helperText={
                      errors.businessName ? errors.businessName.message : ''
                    }
                  />
                )}
              />
            </div>

            <div className="header-space">
              <label>Business logo</label>
              <div>
                <input type={'file'} accept="image/*" />
              </div>
            </div>

            <div className="header-space">
              <label>Address</label>
              <Controller
                name="address"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    required
                    id="outlined-required"
                    label="Required"
                    // error={errors.address}
                    helperText={errors.address ? errors.address.message : ''}
                    className="text-field"
                  />
                )}
              />
            </div>

            <div className="header-space">
              <label>Email</label>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    required
                    id="outlined-required"
                    label="Required"
                    className="text-field"
                    // error={errors.email}
                    helperText={errors.email ? errors.email.message : ''}
                    autoComplete="email"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <img
                            src={require('../../assets/IMAGES/Tick Square.png')}
                            alt=""
                          />
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
            </div>

            <div className="header-space">
              <label>Number</label>
              <Controller
                name="phoneNumber"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <MuiPhoneNumber
                    {...field}
                    defaultCountry={'ng'}
                    variant="outlined"
                    onChange={handleNumber}
                    className="text-field"
                  />
                )}
              />
            </div>

            <div className="header-space">
              <label>Password</label>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <OutlinedInput
                    {...field}
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    name="password"
                    className="text-field"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                )}
              />
              <p>{errors.password ? errors.password?.message : ''}</p>
            </div>

            <div className="header-space">
              <label>Confirm Password</label>
              <Controller
                name="confirmPassword"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <OutlinedInput
                    {...field}
                    id="outlined-adornment-password"
                    type={'password'}
                    className="text-field"
                    name="confirmPassword"
                    endAdornment={
                      <InputAdornment position="end">
                        <img
                          src={require('../../assets/IMAGES/Unlock.png')}
                          alt=""
                        />
                      </InputAdornment>
                    }
                    label="Password"
                  />
                )}
              />
            </div>

            <input type={'submit'} />
          </form>
          <div>
            <p>.</p>
          </div>
        </div>
      </div>
      <div className="sign-container2"></div>
    </div>
  );
};

export default SignUp;
