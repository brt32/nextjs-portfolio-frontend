import { FaPencilAlt, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
// import Image from "next/image";
import Layout from "@/components/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { API_URL } from "@/config/index";
import styles from "@/styles/Event.module.css";

export default function EventPage({ evt }) {
  const router = useRouter();

  const easing = [0.6, -0.05, 0.01, 0.99];

  const fadeInUp = {
    initial: {
      x: 60,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing,
      },
    },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <Layout>
        <div className={styles.backBtn}>
          <Link href="/events">
            <a className="btn btn-secondary my-1">Go Back</a>
          </Link>
        </div>

        <div className={styles.event}>
          {/* <div className={styles.controls}>
            <Link href={`/events/edit/${evt.id}`}>
              <a>
                <FaPencilAlt /> Edit Project
              </a>
            </Link>
            <a href="#" className={styles.delete} onClick={deleteEvent}>
              <FaTimes /> Delete Project
            </a>
          </div> */}
          <span>{new Date(evt.endDate).toLocaleDateString("en-US")}</span>
          <h1>{evt.title}</h1>
          <ToastContainer />
          {evt.image && (
            <div className={styles.image}>
              <motion.img
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                src={evt.image.url}
                width="100%"
                height={400}
                alt={evt.name}
              ></motion.img>
              {/* <Image
                src={evt.image.url}
                width={960}
                height={600}
                alt={evt.name}
              /> */}
            </div>
          )}
          <h3>Application Title: </h3>
          <motion.div variants={fadeInUp}>
            {evt.title ? <p>{evt.title}</p> : <p>None</p>}
          </motion.div>
          <h3>Job Title: </h3>
          <motion.div variants={fadeInUp}>
            {evt.jobTitle ? <p>{evt.jobTitle}</p> : <p>None</p>}
          </motion.div>
          <h3>Main Technologies:</h3>
          <motion.div variants={fadeInUp}>
            {evt.mainTechnologies ? <p>{evt.mainTechnologies}</p> : <p>None</p>}
          </motion.div>
          <h3>Application Type:</h3>
          <motion.div variants={fadeInUp}>
            {evt.applicationType ? <p>{evt.applicationType}</p> : <p>None</p>}
          </motion.div>
          <h3>Database:</h3>
          <motion.div variants={fadeInUp}>
            {evt.database ? <p>{evt.database}</p> : <p>None</p>}
          </motion.div>
          <h3>Difficulty Level: </h3>
          <motion.div variants={fadeInUp}>
            {evt.difficultyLevel ? <p>{evt.difficultyLevel}</p> : <p>None</p>}
          </motion.div>
          <h3>Description: </h3>
          <motion.div variants={fadeInUp}>
            {evt.description ? <p>{evt.description}</p> : <p>None</p>}
          </motion.div>
          <h4 className={styles.urls}>
            Github Source Code:{" "}
            <Link href={evt.githubSourceCode}>{evt.githubSourceCode}</Link>
          </h4>
          <h4 className={styles.urls}>
            Link for Demo WebApp:{" "}
            <Link href={evt.herokuDemoWebsite}>{evt.herokuDemoWebsite}</Link>
          </h4>
          <p className={styles.dates}>
            Project Started at{" "}
            <strong>
              {new Date(evt.startDate).toLocaleDateString("en-US")}
            </strong>{" "}
            and finished at{" "}
            <strong>{new Date(evt.endDate).toLocaleDateString("en-US")}</strong>
          </p>
          {/* <Link href="/events">
            <a className={styles.back}>{"<"} Go Back</a>
          </Link> */}
        </div>
      </Layout>
    </motion.div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/events`);
  const events = await res.json();

  const paths = events.map((evt) => ({
    params: { slug: evt.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/events?slug=${slug}`);
  const events = await res.json();
  return {
    props: {
      evt: events[0],
    },
    revalidate: 1,
  };
}
