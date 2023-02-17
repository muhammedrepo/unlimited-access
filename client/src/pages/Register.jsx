import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Alert, Button, FormRow, Logo } from '../components';
import { useAppContext } from '../context/appContext';

const initialState = {
  name: '',
  lastName: '',
  email: '',
  password: '',
  isMember: true,
};
const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const { showAlert, displayAlert, isLoading, registerUser, user, loginUser } =
    useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, lastName, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
    const currentUser = { name, email, password, lastName };
    if (isMember) {
      loginUser(currentUser);
    } else {
      registerUser(currentUser);
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <div className='flex flex-col min-h-screen bg-white'>
      <main className='bg-gray-50'>
        <div className='flex flex-col justify-center items-center py-8 px-6 mx-auto md:h-screen'>
          <div className='flex justify-center items-center mb-8 text-2xl font-semibold lg:mb-10'>
            <span
              style={{
                boxSizing: 'border-box',
                display: 'inline-block',
                overflow: 'hidden',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: 1,
                border: '0px',
                margin: '0px',
                padding: '0px',
                position: 'relative',
                maxWidth: '100%',
              }}
            >
              <Logo
                style={{
                  position: 'absolute',
                  inset: '0px',
                  boxSizing: 'border-box',
                  padding: '0px',
                  border: 'none',
                  margin: 'auto',
                  display: 'block',
                  width: '0px',
                  height: '0px',
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                }}
              />
            </span>
          </div>
          <div className='justify-center items-center w-full bg-white rounded-lg shadow lg:flex md:mt-0 lg:max-w-screen-sm xl:p-0 '>
            <div className='p-6 w-full sm:p-8 lg:p-10'>
              {showAlert && <Alert />}
              <h1 className='mb-3 text-2xl font-bold text-gray-900 lg:text-3xl'>
                {values.isMember
                  ? 'Sing in to your account'
                  : 'Join now for free'}
              </h1>
              <p className='mb-3 text-gray-500 capitalize text-sm'>
                {values.isMember
                  ? 'Welcome back'
                  : '$35 Sign up bonus activated'}
              </p>
              <form className='mt-8' onSubmit={onSubmit}>
                {!values.isMember && (
                  <div className='flex flex-col mb-6 space-y-6 md:flex-row md:space-y-0 md:space-x-6'>
                    <div className='w-full'>
                      <FormRow
                        type='text'
                        labelText='First Name'
                        name='name'
                        value={values.name}
                        handleChange={handleChange}
                      />
                    </div>
                    <div className='w-full'>
                      <FormRow
                        type='text'
                        labelText='Last Name'
                        name='lastName'
                        value={values.lastName}
                        handleChange={handleChange}
                      />
                    </div>
                  </div>
                )}
                <div className='mb-6'>
                  <FormRow
                    type='email'
                    labelText='Your email'
                    name='email'
                    value={values.email}
                    handleChange={handleChange}
                  />
                </div>
                <div className='mb-6'>
                  <FormRow
                    type='password'
                    labelText='Your password'
                    name='password'
                    value={values.password}
                    handleChange={handleChange}
                  />
                </div>
                {/* {!values.isMember && (
                  <div className='mb-6'>
                    <FormRow
                      type='password'
                      labelText='Confirm password'
                      name='confirmPassword'
                      value={values.confirmPassword}
                      handleChange={handleChange}
                    />
                  </div>
                )} */}
                {values.isMember ? (
                  ''
                ) : (
                  <div className='flex items-start mb-6'>
                    <div className='flex items-center h-5'>
                      <input
                        required=''
                        name='terms'
                        type='checkbox'
                        className='w-4 h-4 bg-gray-50 rounded border-gray-300 focus:ring-3 focus:ring-blue-300 '
                      />
                    </div>
                    <div className='ml-3 text-sm'>
                      <label
                        htmlFor='terms'
                        className='font-medium text-gray-900'
                      >
                        I accept the
                        <Link
                          className='ml-1 text-green-700 hover:underline'
                          to='/terms'
                        >
                          Terms and Conditions
                        </Link>
                      </label>
                    </div>
                  </div>
                )}

                {/* <button
                  type='submit'
                  className='text-white bg-green-600 hover:bg-green-500 border border-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 font-medium rounded-md text-xs md:text-sm px-5 py-2.5 text-center inline-flex items-center justify-center mb-2 capitalize'
                >
                  {values.isMember ? `sign in` : `create account`}
                </button> */}
                <Button primary type='submit' disabled={isLoading}>
                  {values.isMember ? `sign in` : `create account`}
                </Button>

                <div className='mb-6'></div>
                <div className='text-sm font-medium text-gray-500'>
                  {values.isMember
                    ? 'Not registered?'
                    : 'Already have an account?'}

                  <button
                    type='button'
                    onClick={toggleMember}
                    className='ml-1 text-green-700 hover:underline'
                  >
                    {values.isMember ? 'Create an account.' : 'Sign in here'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
