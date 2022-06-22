import styles from "../styles/Menu.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "./Navbar";

function Menu({ menuClick, handleMenuClick }) {
  const pathname = useRouter().pathname;
  return (
    <>
      {menuClick ? (
        <section className={menuClick ? styles.menu : styles.menuHide}>
          <ul className={styles.list}>
            <li
              className={
                pathname === "/" ? styles.activePage : styles.inactivePage
              }
            >
              <Link href={"/"}>
                <div onClick={handleMenuClick}>HOME</div>
              </Link>
            </li>
            <li
              className={
                pathname === "/about" ? styles.activePage : styles.inactivePage
              }
            >
              <Link href={"/about"}>
                <div onClick={handleMenuClick}>ABOUT</div>
              </Link>
            </li>
            <li
              className={
                pathname === "/contact"
                  ? styles.activePage
                  : styles.inactivePage
              }
            >
              <Link href={"/contact"}>
                <div onClick={handleMenuClick}>CONTACT</div>
              </Link>
            </li>
          </ul>
        </section>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Menu;
