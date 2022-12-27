import React, { useState } from "react";
import { FaEdit, FaUserEdit } from "react-icons/fa";
import { useAppContext } from "../../context/appContext";
import Alert from "../../components/Alert";
import Button from "../../components/Button";

import FormRow from "../../components/FormRow";
import { Card, CardHeader } from "../../components/UI";
import { Badge } from "../../components";

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
                  <Badge color="bg-skin-green-dark text-skin-base">
                    New Member
                  </Badge>
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
            <Button type="submit" className="bg-skin-green-dark text-skin-base">
              <FaEdit className="mr-2" /> Update Profile
            </Button>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default MyProfile;
