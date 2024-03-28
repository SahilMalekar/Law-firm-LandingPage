import React from "react";
import styles from "./Showcase.module.css";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
export default function Showcase() {
  return (
    <section className={styles.showcase}>
      <div className={styles.heroOuterWrapper}>
        <div className={styles.heroInnerWrapper}>
          <Navbar />
          <Hero />
        </div>
      </div>
    </section>
  );
}
