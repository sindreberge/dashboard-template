import React from "react";
import styles from "./Hero.module.css";

interface HeroProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
      </div>
    </section>
  );
};
