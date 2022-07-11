import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Divide as Hamburger } from "hamburger-react";
import Menu from "./Menu";
import NavElement from "./NavElement";
import DarkmodeToggle from "./DarkmodeToggle";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [menuClick, setMenuClick] = useState(false);
  const pathname = useRouter().pathname;
  const { theme, setTheme } = useTheme();

  const handleMenuClick = () => {
    setMenuClick(!menuClick);
  };

  return (
    <>
      <Menu handleMenuClick={handleMenuClick} menuClick={menuClick} />
      <div className="nav border-b border-lm-tertiary dark:border-dm-tertiary bg-lm-secondary dark:bg-dm-secondary">
        <div className="nameLogoCtr">
          <Link href={"/"}>
            <span className="nav__name text-lm-text-secondary dark:text-dm-text-secondary hover:text-lm-tertiary dark:hover:text-dm-tertiary">
              <span className="nav__nameR text-lm-tertiary dark:text-dm-tertiary">
                R
              </span>
              YAN
              <span className="nav__nameR text-lm-tertiary dark:text-dm-tertiary">
                R
              </span>
              OSE
            </span>
          </Link>
        </div>

        {/* Page List */}
        <div>
          <ul className="list text-lm-text-secondary dark:text-dm-text-secondary">
            <NavElement href="/" pathname={pathname}>
              Home
            </NavElement>
            <NavElement href="/about" pathname={pathname}>
              About
            </NavElement>
            <NavElement href="/contact" pathname={pathname}>
              Contact
            </NavElement>
            <li className="flex justify-center items-center">
              <DarkmodeToggle size={7} />
            </li>
          </ul>

          {/* Hamburger */}
          <div className="hamburgerCtr" onClick={handleMenuClick}>
            <Hamburger
              color={
                theme === "dark" ? "hsl(39, 100%, 75%)" : "hsl(39, 20%, 20%)"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
