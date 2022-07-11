import Link from "next/link";
import React from "react";

function MenuElement({ children, pathname, href }) {
  return (
    <>
      <li className={pathname === href ? "activePage" : "inactivePage"}>
        <Link href={href}>
          <h5 className="uppercase text-lm-tertiary dark:text-dm-tertiary">
            {children}
          </h5>
        </Link>
      </li>
    </>
  );
}

export default MenuElement;
