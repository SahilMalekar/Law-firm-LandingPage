import React from "react";
import Logo from "../Logo/Logo";
import NavLinks from "../NavLinks/NavLinks";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Logo />
      <NavLinks />
      <Button />
    </div>
  );
}
