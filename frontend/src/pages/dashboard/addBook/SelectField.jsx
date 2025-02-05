import PropTypes from "prop-types";
import React from "react";

const SelectField = ({ options, label, name, register }) => {
  return (
    <div className="flex flex-col mb-2 p-2 ">
      <label className="font-bold text-gray-600 mb-2 text-sm" htmlFor="">
        {label}
      </label>
      <select
        {...register(name, { required: true })}
        className="py-2 px-3 hover:outline-none border"
      >
        {options.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

SelectField.propTypes = {
  options: PropTypes.array,
  label: PropTypes.string,
  name: PropTypes.string,
  register: PropTypes.func,
};
export default SelectField;
