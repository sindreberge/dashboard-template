import React from "react";
import styles from "./spinner.module.css";

export const Spinner: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinner} />
      <span>Laster...</span>
    </div>
  );
};
