import Link from "next/link";
import styles from "@/styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; Proczkowski Portfolio</p>
      <p>
        <Link href="/about">About This Portfolio</Link>
      </p>
    </footer>
  );
};

export default Footer;
