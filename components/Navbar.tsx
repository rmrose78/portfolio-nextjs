import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Divide as Hamburger } from "hamburger-react";
import Menu from "./Menu";
import NavElement from "./NavElement";
import DarkmodeToggle from "./DarkmodeToggle";
import { useTheme } from "next-themes";

const Navbar: React.FC = () => {
  const [menuClick, setMenuClick] = useState<boolean>(false);
  const pathname = useRouter().pathname;
  const { theme, setTheme } = useTheme();
  const [hamburgerColor, setHamburgerColor] = useState<string | null>(null);

  useEffect(() => {
    setHamburgerColor(theme === "dark" ? "#ffd280" : "#3d3629");
  }, [theme]);

  const handleMenuClick = () => {
    setMenuClick(!menuClick);
  };

  return (
    <>
      <Menu handleMenuClick={handleMenuClick} menuClick={menuClick} />
      <div className="nav border-b border-lm-tertiary dark:border-dm-tertiary  bg-lm-primary dark:bg-dm-secondary min-h-[50px]">
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
            <button
              className="hamburgerCtr"
              onClick={handleMenuClick}
              aria-label="Toggle navigation menu"
              aria-expanded={menuClick}
            >
              <Hamburger
                color={hamburgerColor || undefined}
                toggled={menuClick}
                toggle={setMenuClick}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
