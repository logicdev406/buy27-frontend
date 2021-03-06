import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import validate from '../helper/validator';
import buy27logo from '../assets/images/buy27logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

//Actions
import { login as logIn } from '.././redux/actions/authAction';

export const SignIn = () => {
  const [values, setvalues] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const [ShowPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const login = useSelector((state) => state.auth);
  const { loading, error, isAuthenticated } = login;
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (isAuthenticated || token) {
      history.push('/');
    } else {
      return null;
    }
  }, [history, isAuthenticated, token]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setvalues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    setErrors(validate(values));
    if (
      values.email.length === 0 ||
      values.password.length === 0 ||
      values.password.length < 6
    ) {
      return null;
    }
    dispatch(logIn(values));
  };

  const ToggleShowPassword = () => {
    setShowPassword(!ShowPassword);
  };

  // const handleEnterKeyPress = (e) => {
  //   if (e.key === 'Enter') {
  //     return handleSubmit;
  //   }
  // };

  return (
    <div className=" flex flex-col items-center justify-center h-screen w-full bg-gray-100">
      <a href="/">
        <img className="w-40 mb-8" src={buy27logo} alt="logo" />
      </a>
      <div className=" flex flex-col items-center pt-4 pb-8 bg-white shadow-lg rounded">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Login</h1>
        <div className="border-b border-gray w-full my-2"></div>
        <div className="flex flex-col px-4 md:px-8 mt-2">
          <div className="text-sm text-primary-dark mb-2">
            <label htmlFor="email ">Email Address</label>
          </div>
          <input
            onChange={handleInput}
            type="email"
            name="email"
            value={values.email}
            placeholder="Enter Email Address"
            className="focus: outline-none bg-transparent border border-primary-dark rounded px-4 mb-1 h-10 md:h-12 w-72 md:w-96"
          />
          {errors.email && (
            <p className="text-red-500 text-sm ">{errors.email}</p>
          )}
          {error && (
            <p className="text-red-500 text-sm ">
              Incorrect E-mail or Password
            </p>
          )}
        </div>
        <div className="flex flex-col px-4 md:px-8 mt-8">
          <div className="flex justify-between text-sm text-primary-dark mb-2">
            <label htmlFor="password">Password</label>
            <Link to="/forgotpassword" className="text-red-500 underline">
              Forget Password?
            </Link>
          </div>
          <div className="flex items-center justify-between px-4 focus: outline-none bg-transparent border border-primary-dark rounded pl-4 mb-1  h-10 md:h-12 w-72 md:w-96">
            <input
              onChange={handleInput}
              onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
              type={ShowPassword === false ? 'password' : 'text'}
              name="password"
              value={values.password}
              placeholder="Enter Password"
              className="focus:outline-none w-80"
            />
            <button
              className="focus:outline-none"
              onClick={() => {
                ToggleShowPassword();
              }}
            >
              {ShowPassword === false ? (
                <VisibilityOffIcon className="text-primary-dark" />
              ) : (
                <VisibilityIcon className="text-primary-dark" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm ">{errors.password}</p>
          )}
          {error && (
            <p className="text-red-500 text-sm ">
              Incorrect E-mail or Password
            </p>
          )}
        </div>
        <button
          onClick={handleSubmit}
          className="h-10 px-32 mt-8 focus:outline-none bg-primary-dark hover:bg-primary-light text-white rounded"
        >
          {loading ? 'Loading...' : 'Login'}
        </button>
        <div className="flex flex-col items-center mt-10">
          <h1 className="text-sm">Dont have an Account?</h1>
          <Link
            to="/signup"
            className="flex items-center h-10 px-20 mt-2 bg-transparent hover:bg-primary-dark border border-primary-dark no-underline font-semibold text-primary-dark hover:text-white rounded"
          >
            <h1>Create an Account</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
