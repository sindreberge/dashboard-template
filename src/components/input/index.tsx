import React from "react";
import styles from "./Input.module.css";

interface InputProps {
  label?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder = "",
  type = "text",
  className = "",
}) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
};
