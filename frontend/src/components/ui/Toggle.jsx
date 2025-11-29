import React from "react";
import "../../styles/shared.css";

export default function Toggle({ label, checked, onChange }) {
  return (
    <label className="toggle-wrapper">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="toggle-input"
        style={{ display: "none" }}
      />
      <div className="toggle-track">
        <div className="toggle-thumb"></div>
      </div>
      {label && <span className="toggle-label">{label}</span>}
    </label>
  );
}
