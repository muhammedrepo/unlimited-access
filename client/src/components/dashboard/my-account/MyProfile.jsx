import React, { useState } from "react";
import { FaEdit, FaUserEdit } from "react-icons/fa";
import { useAppContext } from "../../../context/appContext";
import Alert from "../../Alert";
import Button from "../../Button";

import FormRow from "../../FormRow";
import { Card, CardHeader } from "../../UI";

const initialState = {
  name: "",
  email: "",
  username: "",
  isMember: true,
};

const MyProfile = () => {
  const [values, setValues] = useState(initialState);
  const { showAlert, displayAlert } = useAppContext();

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
    console.log(values);
  };

  return (
    <Card>
      <CardHeader title="My Profile" />
      <div className="card-body">
        <form onSubmit={onSubmit}>
          {showAlert && <Alert />}
          <div class="mb-2">
            <div class="profile-title max-w-xs mx-auto">
              <div class="flex flex-col xl:flex-row items-center xl:justify-between text-center">
                <FaUserEdit className="text-green-600 text-5xl" />

                <div class="flex flex-col items-center">
                  <h3 class="mb-1 text-green-600">Tunde Tijani</h3>
                  <span class="bg-green-600 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    New Member
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <FormRow
              type="text"
              labelText="Name"
              name="name"
              value={values.name}
              handleChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <FormRow
              type="email"
              labelText="Email"
              name="email"
              value={values.email}
              handleChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <FormRow
              type="text"
              labelText="CoutZap Username"
              name="username"
              value={values.username}
              disabled="disabled"
            />
          </div>
          <div>
            <Button
              type="submit"
              icon=<FaEdit />
              text="Update Profile"
              bgColor="green"
            />
          </div>
        </form>
      </div>
    </Card>
  );
};

export default MyProfile;
