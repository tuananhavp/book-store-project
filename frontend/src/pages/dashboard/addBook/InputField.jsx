import React from "react";
import PropTypes from "prop-types";
const InputField = ({ label, type, name, placeholder, register, value }) => {
  return (
    <div className="flex flex-col mb-2 p-2 ">
      <label className="font-bold text-gray-600 mb-2 text-sm" htmlFor="">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, { required: true })}
        className="px-3 py-2 hover:outline-none border"
      />
    </div>
  );
};

export default InputField;

InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.any,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.func,
  value: PropTypes.any,
};
