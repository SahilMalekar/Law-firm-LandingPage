import React from "react";
import styles from "./Hero.module.css";
import HeroImg from "../../assets/HeroImage.png";

export default function Hero() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heroRight}></div>
      <div className={styles.heroLeft}>
        <div className={styles.imgConatainer}>
          <img src={HeroImg} alt="HeroImg" />
        </div>
      </div>
    </div>
  );
}
