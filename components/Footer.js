import Link from "next/link";
import styles from "@/styles/Footer.module.css";

const Footer = () => {
  return (
    <p>
      Copyright &copy;{" "}
      <Link href="/about">
        <a className={styles.footer}>B.Proczkowski</a>
      </Link>{" "}
      Portfolio @2021
    </p>
  );
};

export default Footer;
