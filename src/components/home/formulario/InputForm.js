import React from "react";

export const InputForm = ({
  label,
  state,
  onChange, // Cambiado a onChange
  type,
  name,
  placeholder
}) => {

  return (
    <div className="inputs_form">
      <label className="text-neutral-50">{label}</label>

        <div className="file-input-container  content_inputs">
          <input className="inputs  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    " placeholder={placeholder}  type={type} name={name} onChange={onChange} autoFocus />
        </div>
      
    </div>
  );
};
