import React from "react";
import styles from "./warning.module.css";

interface ErrorProps {
  message?: string;
}

export const Warning: React.FC<ErrorProps> = ({
  message = "Opps, der gikk noe galt!",
}) => {
  return (
    <div className={styles.error}>
      <strong>{message}</strong>
    </div>
  );
};
