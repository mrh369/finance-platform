/*import React from "react";
import "../../styles/base.css";
import "./TextField.css";

export default function TextField({
  type = "text",
  label,
  placeholder,
  value,
  onChange,
  name,
  error,
  helperText,
}) {
  return (
    <div className="field">
      {label && <label className="label" htmlFor={name}>{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        className={`input-base ${error ? "input-error" : ""}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {helperText && !error && <p className="helper">{helperText}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
}*/
import React from "react";
import "../../styles/shared.css";

export default function TextField({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
}) {
  return (
    <div>
      {label && <label htmlFor={name} className="base-label">{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="base-control"
      />
      {error && <p className="base-error">{error}</p>}
    </div>
  );
}

