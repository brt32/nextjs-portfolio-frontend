import Head from "next/head";
import { useRouter } from "next/router";
import Header from "./Header";
import MyNavbar from "./MyNavbar";
import Footer from "./Footer";
import Showcase from "./showcase";
import styles from "@/styles/Layout.module.css";

const Layout = ({ title, keywords, description, children }) => {
  const router = useRouter();

  return (
    <>
      <div>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
        </Head>

        <MyNavbar />

        {router.pathname === "/" && <Showcase />}
        <div className={styles.container}>{children}</div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
};

Layout.defaultProps = {
  title: "Welcome to my Portfolio WebApp!",
  description:
    "Find my latest and upcoming WebApp projects based on the newest technologies!",
  keywords:
    "portfolio, webapp, reactjs, nextjs, javascript, nodejs, mongodb, python, django, sql, api",
};

export default Layout;
