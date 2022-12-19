import React from "react";

const FormRow = ({ type, name, value, handleChange, labelText, disabled }) => {
  return (
    <>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {labelText || name}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
      />
    </>
  );
};

export default FormRow;
