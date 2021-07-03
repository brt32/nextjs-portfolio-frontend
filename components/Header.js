import Link from "next/link";
import Search from "./Search";
import styles from "@/styles/Header.module.css";

const Header = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <Link href="/">
            <a>brt32 Portfolio</a>
          </Link>
        </h1>
        <Search />
        <ul>
          <li>
            <Link href="/events">
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/events/add">
              <a>Add Project</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/github">
              <a>Github</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contactme">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
