import React from "react";
import styles from "./NavLinks.module.css";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

export default function NavLinks() {
  return (
    <>
      <ul className={styles.navLinks}>
        <li>Home</li>
        <li>Attorneys</li>
        <li>Practice Areas</li>
        <li>About Us</li>
        <MenuOpenIcon className={styles.icon} />
      </ul>
    </>
  );
}
