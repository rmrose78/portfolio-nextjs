import React from "react";
import Link from "next/link";

function NavElement({ href, children, pathname }) {
  return (
    <>
      <li
        className={`${
          pathname === href
            ? "text-lm-tertiary dark:text-dm-tertiary border-b border-lm-tertiary dark:border-dm-tertiary"
            : "hover:text-lm-tertiary dark:hover:text-dm-tertiary border-b hover:border-lm-tertiary dark:hover:border-dm-tertiary border-lm-primary dark:border-dm-secondary"
        }`}
      >
        <Link href={href}>
          <h5 className="hover:text-lm-tertiary dark:hover:text-dm-tertiary hover:border-lm-tertiary dark:hover:border-dm-tertiary uppercase">
            {children}
          </h5>
        </Link>
      </li>
    </>
  );
}

// className={`${pathname === "/" ? "text-lm-tertiary dark:text-dm-tertiary" : "hover:text-lm-tertiary dark:hover:text-dm-tertiary"}`}

export default NavElement;
