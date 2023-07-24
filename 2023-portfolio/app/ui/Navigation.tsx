"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { navLinks } from "../interfaces";
import styles from "./Navigation.module.scss";
import Image from "next/image";
import logoFilled from "../assets/icons/JC-logo-2020-filled.svg";
import { sourceSans } from "../assets/fonts/fonts";

export function Navigation({ navLinks }: navLinks) {
  const pathname = usePathname();

  return (
    <>
      <nav className={`${styles.mainNav} ${sourceSans.className}`}>
        <Link
          className={styles.logoLink}
          href="/"
          aria-label="link to home page"
          key={"logo"}
        >
          <svg
            id="Layer_1"
            className={styles.logoMain}
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
          >
            <title>JC-logo-2020-filled</title>
            <circle className={styles.logoOne} cx="100" cy="100" r="47.45" />
            <path
              className={styles.logoTwo}
              d="M85.48,99.09V93.74A7.85,7.85,0,0,0,87.4,94c2.35,0,3.48-1.12,3.48-3.58V61.66h5.88V90.21c0,6.15-2.78,9.09-8.56,9.09A14,14,0,0,1,85.48,99.09Z"
            />
            <path
              className={styles.logoTwo}
              d="M102.61,128.4V108.29c0-5.77,3-9.19,8.66-9.19s8.67,3.42,8.67,9.19v4h-5.56v-4.33c0-2.46-1.18-3.47-2.94-3.47s-3,1-3,3.47v20.91c0,2.46,1.18,3.42,3,3.42s2.94-1,2.94-3.42v-5.72h5.56v5.29c0,5.77-3,9.19-8.67,9.19S102.61,134.17,102.61,128.4Z"
            />
            <line
              className={styles.logoThree}
              x1="124.78"
              y1="75.22"
              x2="75.22"
              y2="124.78"
            />
          </svg>
        </Link>

        <div className={styles.navLinks}>
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);

            return (
              <div className={styles.navLinkWrapper} key={link.name}>
                <Link className={styles.navLink} href={link.href}>
                  {link.name}
                </Link>
              </div>
            );
          })}
        </div>
      </nav>
    </>
  );
}
