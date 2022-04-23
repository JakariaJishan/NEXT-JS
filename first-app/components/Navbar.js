import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <ul>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
