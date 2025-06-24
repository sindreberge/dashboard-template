import React from "react";
import styles from "./Gallery.module.css";

interface GalleryProps {
  children: React.ReactNode;
}

export const Gallery: React.FC<GalleryProps> = ({ children }) => {
  return <div className={styles.gallery}>{children}</div>;
};
