
import React from "react";

const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export const Label = ({ htmlFor, children, className }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn("text-sm font-semibold tracking-wide", className)}
    >
      {children}
    </label>
  );
};

const Input = ( {type, className, placeholder, id, name, onChange, value, disabled} ) => {
  return <input 
  type={type} 
  placeholder={placeholder} 
  id={id} name={name} 
  onChange={onChange} 
  value={value} 
  disabled={disabled}
  className={cn(
    "border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
    className
  )}
  />
}

export default Input