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
        <div className="nav__contents">
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
              <DarkmodeToggle />
            </ul>

            {/* Hamburger */}
            <div className="hamburgerCtr" onClick={handleMenuClick}>
              <Hamburger color={theme === "dark" ? "#ffd280" : "#3d3629"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
