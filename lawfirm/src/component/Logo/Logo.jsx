import React from "react";
import TextLogoImg from "../../assets/Lgstudio.png";
import LogoImg from "../../assets/Logo.png";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <>
      <div className={styles.logo}>
        <img
          style={{ width: "1.901rem", height: "1.894rem" }}
          src={LogoImg}
          alt="logo"
        />
        <img
          style={{ width: "6.313rem", height: "0.938rem" }}
          src={TextLogoImg}
          alt="lgstudio"
        />
      </div>
    </>
  );
}
