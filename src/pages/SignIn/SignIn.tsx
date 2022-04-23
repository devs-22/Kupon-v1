import './SignIn.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import { useForm, Controller } from 'react-hook-form';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button } from '../../components/Styles/Button.styles';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  type FormValues = {
    email: string;
    password: string;
  };

  const {
    control,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop: string) => (event: any) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const navigate = useNavigate();
  const today = new Date();

  return (
    <div className="root-element">
      <div className="home-signin">
        <img
          src={require('../../assets/IMAGES/Leaf.png')}
          alt=""
          className="leaf"
        />
        <NavLink to="/" className={'header-link'}>
          Kupon
        </NavLink>
        <p className="CP-P">Log in to your Account</p>
        <p className="welcome-tag">Welcome back, Please enter your details.</p>
        <div className="sign-in-space">
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
        <div className="sign-in-space">
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
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            )}
          />
        </div>
        <p className="f-p">Forgot password?</p>
        <Button
          color="#fff"
          backgroundColor="#025CE4"
          hover="#025CE4"
          width="430px"
          border="1px solid"
          className="sign-in-button"
        >
          Log in
        </Button>
        <p className="account-p">
          Don't have an account?{' '}
          <span
            style={{ color: '#025CE4' }}
            onClick={() => {
              navigate('/SignUp');
            }}
          >
            Create one
          </span>
        </p>
        <p className="sign-in-footer">
          @ {today.getFullYear()} Kupon Technology
        </p>
      </div>
      <div className="signup-half"></div>
    </div>
  );
};
export default SignIn;
