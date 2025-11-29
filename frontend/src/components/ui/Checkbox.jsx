import React from "react";
import "../../styles/shared.css";

export default function Checkbox({ label, name, checked, onChange }) {
  return (
    <label className="toggle-wrapper">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="checkbox-base"
      />
      {label && <span className="toggle-label">{label}</span>}
    </label>
  );
}
