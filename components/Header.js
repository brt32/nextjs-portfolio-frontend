import {
  FaSignInAlt,
  FaSignOutAlt,
  FaInfo,
  FaBlog,
  FaTasks,
} from "react-icons/fa";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import Link from "next/link";
import Search from "./Search";
import AuthContext from "@/context/AuthContext";
import styles from "@/styles/Header.module.css";
// import shake from "@/styles/Shake.module.css";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <Link href="/">
            <a>brt32</a>
          </Link>
        </h1>
        <Search />
        <ul>
          <li>
            <Link href="/events">
              <a className={styles.navBtn}>
                <FaTasks /> Projects
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a className={styles.navBtn}>
                <FaBlog /> Blog
              </a>
            </Link>
          </li>

          <div className={styles.dropdown}>
            <button className={styles.dropBtn}>
              <FaInfo />
              Info
            </button>
            <div className={styles.dropdownContent}>
              <Link href="/github">Github</Link>
              <Link href="/linkedin">LinkedIn</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/about">About</Link>
            </div>
          </div>

          {user ? (
            // if logged in
            <>
              {" "}
              <li>
                <Link href="/account/dashboard">
                  <a className={styles.navBtn}>Dashboard</a>
                </Link>
              </li>
              <li>
                <button onClick={() => logout()} className={styles.logoutBtn}>
                  <FaSignOutAlt /> Logout
                </button>
              </li>
            </>
          ) : (
            // if logged out
            <>
              {" "}
              <li>
                <Link href="/account/login">
                  <a className={styles.navBtn}>
                    <FaSignInAlt /> Login
                  </a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
