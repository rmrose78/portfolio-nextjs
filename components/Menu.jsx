import Link from "next/link";
import { useRouter } from "next/router";
import DarkmodeToggle from "./DarkmodeToggle";
import NavElement from "./NavElement";

function Menu({ menuClick, handleMenuClick }) {
  const pathname = useRouter().pathname;

  return (
    <>
      {menuClick ? (
        <section
          className={
            menuClick ? "menu bg-lm-secondary dark:bg-dm-secondary" : "menuHide"
          }
        >
          <div className="menu__darkmode">
            <DarkmodeToggle />
          </div>
          <ul className="menu__list">
            <NavElement href="/" pathname={pathname}>
              Home
            </NavElement>
            <NavElement href="/about" pathname={pathname}>
              About
            </NavElement>
            <NavElement href="/contact" pathname={pathname}>
              Contact
            </NavElement>
          </ul>
        </section>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Menu;
