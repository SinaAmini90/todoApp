import React from "react";

export default function InputComponent({
  value,
  context,
  type,
  name,
  onChange,
  label,
  classNameAdd,
}) {
  let classNameValue =
    " w-8 h-8 text-center border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200";
  return (
    <>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        className={classNameValue + classNameAdd}
        type={type}
        placeholder={context}
        value={value}
        id={name}
        name={name}
        onChange={onChange}
      />
    </>
  );
}
