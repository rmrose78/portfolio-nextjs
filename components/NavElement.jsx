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
          <a
            // tabIndex={0}
            role="button"
            aria-label={`Navigate to ${children}`}
            aria-current={pathname === href ? "page" : undefined}
          >
            <h5 className="hover:text-lm-tertiary dark:hover:text-dm-tertiary hover:border-lm-tertiary dark:hover:border-dm-tertiary uppercase font-bold text-lg">
              {children}
            </h5>
          </a>
        </Link>
      </li>
    </>
  );
}

export default NavElement;
