/*import React from "react";
import "../../styles/base.css";
import "./Button.css";

export default function Button({
  children,
  type = "button",
  onClick,
  variant = "primary",
  disabled = false,
}) {
  return (
    <button
      type={type}
      className={`btn-base btn ${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}*/
import React from "react";
import "../../styles/shared.css";

export default function Button({
  label,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
}) {
  const className =
    variant === "primary"
      ? "btn btn-primary"
      : variant === "secondary"
      ? "btn btn-secondary"
      : "btn";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {label}
    </button>
  );
}

