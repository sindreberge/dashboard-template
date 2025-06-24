import React, { useEffect } from "react";
import styles from "./Drawer.module.css";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.show : ""}`}
        onClick={onClose}
      />
      <aside className={`${styles.drawer} ${isOpen ? styles.open : ""}`}>
        <div className={styles.header}>
          <h2>{title}</h2>
          <button className={styles.close} onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={styles.content}>{children}</div>
      </aside>
    </>
  );
};
