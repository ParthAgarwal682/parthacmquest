import { useState } from "react";
import "./Input.css";

export const Input = ({
  placeholder,
  defaultValue = "",
  onChange,
  error,
  disabled = false,
  leftIcon,
  rightIcon,
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e) => {
    if (disabled) return;

    setValue(e.target.value);

    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="input-container">
      {leftIcon}

      <input
        type="text"
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={handleChange}
        className={`${error ? "input-error" : ""} ${
          disabled ? "input-disabled" : ""
        }`}
      />

      {rightIcon}

      {error && <div role="alert">{error}</div>}
    </div>
  );
};