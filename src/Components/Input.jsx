import React from 'react';

const Input = ({ type, name, value, onChange, placeholder, required, disabled }) => {
  return (
    <input
      type={type}
      name={name} // 👈 VERY IMPORTANT
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      className="w-full px-4 py-2 border rounded-md focus:outline text-black"
    />
  );
};

export default Input;
