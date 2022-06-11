import React from 'react';

export default function index({ type, placeholder, name, ...params }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className="form-control block w-full px-3 py-1.5 h-12 text-base border border-red-300 rounded my-3"
      {...params}
    />
  );
}
