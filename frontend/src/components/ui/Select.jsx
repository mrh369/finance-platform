import React from "react";
import "../../styles/shared.css";

export default function Select({
  label,
  name,
  options = [],
  value,
  onChange,
  placeholder,
  error,
}) {
  return (
    <div>
      {label && <label htmlFor={name} className="base-label">{label}</label>}
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="base-control base-select"
      >
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="base-error">{error}</p>}
    </div>
  );
}
