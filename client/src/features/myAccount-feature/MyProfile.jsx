import React, { useState } from 'react';
import { FaEdit, FaUserEdit } from 'react-icons/fa';
import { useAppContext } from '../../context/appContext';

import Button from '../../components/Button';

import FormRow from '../../components/FormRow';
import { Card, CardHeader } from '../../components/UI';
import { Badge } from '../../components';

const initialState = {
  name: '',
  email: '',
  username: '',
  isMember: true,
};

const MyProfile = () => {
  const [values, setValues] = useState(initialState);
  const { displayAlert, user } = useAppContext();

  const username = user.email.split('@')[0].concat(` (Can't be changed)`);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, isMember } = values;
    if (!email || (!isMember && !name)) {
      displayAlert();
      return;
    }
  };

  return (
    <Card>
      <CardHeader title='My Profile' className='pb-0' />
      <div className='card-body'>
        <form onSubmit={onSubmit}>
          <div className='mb-2'>
            <div className='profile-title max-w-xs mx-auto'>
              <div className='flex flex-col xl:flex-row items-center xl:justify-between text-center'>
                <FaUserEdit className='text-green-600 text-4xl' />

                <div className='flex flex-col items-center'>
                  <h3 className='mb-1 text-green-600'>
                    {user.name} {user.lastName}
                  </h3>
                  <Badge color='bg-skin-green-dark text-skin-base'>
                    New Member
                  </Badge>
                </div>
              </div>
            </div>
          </div>
          <div className='mb-6'>
            <FormRow
              type='text'
              labelText='Name'
              name='name'
              value={values.name}
              handleChange={handleChange}
            />
          </div>
          <div className='mb-6'>
            <FormRow
              type='email'
              labelText='Email'
              name='email'
              value={values.email}
              handleChange={handleChange}
            />
          </div>
          <div className='mb-6'>
            <FormRow
              type='text'
              labelText='CoutZap Username'
              name='username'
              value={username}
              disabled='disabled'
            />
          </div>
          <div>
            <Button type='submit' className='bg-skin-green-dark text-skin-base'>
              <FaEdit className='mr-2' /> Update Profile
            </Button>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default MyProfile;
