import React from "react";
import styles from "./labelValue.module.css";

interface LabelValueProps {
  label: string;
  value?: string | number | null;
  emptyPlaceholder?: string;
}

export const LabelValue: React.FC<LabelValueProps> = ({
  label,
  value,
  emptyPlaceholder = "–",
}) => {
  return (
    <div className={`${styles.container} `}>
      <span className={styles.label}>{label}</span>
      <span className={styles.value}>
        {value !== null && value !== undefined && value !== ""
          ? value
          : emptyPlaceholder}
      </span>
    </div>
  );
};
