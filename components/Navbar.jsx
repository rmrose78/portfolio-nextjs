import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.scss";
import { Divide as Hamburger } from "hamburger-react";
import Menu from "./Menu";

const Navbar = () => {
  const pathname = useRouter().pathname;

  const [menuClick, setMenuClick] = useState(false);

  const handleMenuClick = () => {
    setMenuClick(!menuClick);
    console.log(menuClick);
  };

  return (
    <>
      <Menu handleMenuClick={handleMenuClick} menuClick={menuClick} />
      <div className={styles.nav}>
        {/* Name Logo */}
        <div className={styles.nameLogoCtr}>
          <Link href={"/"}>
            <span className={styles.name}>
              {" "}
              <span className={styles.nameR}>R</span>YAN{" "}
              <span className={styles.nameR}>R</span>OSE
            </span>
          </Link>
        </div>

        {/* Page List */}
        <div>
          <ul className={styles.list}>
            <li
              className={
                pathname === "/" ? styles.activePage : styles.inactivePage
              }
            >
              <Link href={"/"}>HOME</Link>
            </li>
            <li
              className={
                pathname === "/about" ? styles.activePage : styles.inactivePage
              }
            >
              <Link href={"/about"}>ABOUT</Link>
            </li>
            <li
              className={
                pathname === "/contact"
                  ? styles.activePage
                  : styles.inactivePage
              }
            >
              <Link href={"/contact"}>CONTACT</Link>
            </li>
          </ul>

          {/* Hamburger */}
          <div className={styles.hamburgerCtr} onClick={handleMenuClick}>
            <Hamburger color="#ffd486" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
