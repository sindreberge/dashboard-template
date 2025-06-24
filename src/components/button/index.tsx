import React from "react";
import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "transparent";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  icon,
  iconPosition,
  children,
  ...props
}) => {
  const buttonClass = `${styles.button} ${styles[variant]}`;
  const iconClass = `${styles.icon} ${
    iconPosition === "right" ? styles.right : styles.left
  }`;

  return (
    <button className={buttonClass} {...props}>
      {icon && iconPosition === "left" && (
        <span className={iconClass}>{icon}</span>
      )}
      <span className={styles.label}>{children}</span>
      {icon && iconPosition === "right" && (
        <span className={iconClass}>{icon}</span>
      )}
    </button>
  );
};
