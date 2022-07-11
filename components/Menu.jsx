import Link from "next/link";
import { useRouter } from "next/router";
import DarkmodeToggle from "./DarkmodeToggle";
import MenuElement from "./MenuElement";

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
            <MenuElement href="/" pathname={pathname} onClick={handleMenuClick}>
              Home
            </MenuElement>
            <MenuElement
              href="/about"
              pathname={pathname}
              onClick={handleMenuClick}
            >
              About
            </MenuElement>
            <MenuElement
              href="/contact"
              pathname={pathname}
              onClick={handleMenuClick}
            >
              Contact
            </MenuElement>
          </ul>
        </section>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Menu;
