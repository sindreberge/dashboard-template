import React from "react";
import styles from "./noContent.module.css";

interface NoContentProps {
  message?: string;
}

export const NoContent: React.FC<NoContentProps> = ({
  message = "Her var det tomt!",
}) => {
  return <div className={styles.noContent}>{message}</div>;
};
