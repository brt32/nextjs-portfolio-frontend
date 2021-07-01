import Link from "next/link";
import Search from "./Search";
import styles from "@/styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>brt32 Portfolios</a>
        </Link>
      </div>
      <Search />
      <nav>
        <ul>
          <li>
            <Link href="/events">
              <a>All Projects</a>
            </Link>
          </li>
          <li>
            <a>|</a>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <a>|</a>
          </li>
          <li>
            <Link href="/github">
              <a>Github</a>
            </Link>
          </li>
          <li>
            <a>|</a>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <a>|</a>
          </li>
          <li>
            <Link href="/contactme">
              <a>Contact Me</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
