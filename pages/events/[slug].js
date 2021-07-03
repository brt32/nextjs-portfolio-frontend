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

  const deleteEvent = async (e) => {
    if (confirm("Are you sure?")) {
      const res = await fetch(`${API_URL}/events/${evt.id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
      } else {
        router.push("/events");
      }
    }
  };

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
        <div className={styles.event}>
          <div className={styles.controls}>
            <Link href={`/events/edit/${evt.id}`}>
              <a>
                <FaPencilAlt /> Edit Project
              </a>
            </Link>
            <a href="#" className={styles.delete} onClick={deleteEvent}>
              <FaTimes /> Delete Project
            </a>
          </div>
          <span>
            {evt.title} at {new Date(evt.endDate).toLocaleDateString("en-US")}
          </span>
          <h1>{evt.name}</h1>
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
          <h3>WebApp Title: </h3>
          <motion.p variants={fadeInUp}>{evt.title}</motion.p>
          <h3>Job Title: </h3>
          <motion.p variants={fadeInUp}>{evt.jobTitle}</motion.p>
          <h3>Main Technologies:</h3>
          <motion.p variants={fadeInUp}>{evt.mainTechnologies}</motion.p>
          <h3>Database:</h3>
          <motion.p variants={fadeInUp}>{evt.database}</motion.p>
          <h3>Difficulty Level: </h3>
          <motion.p variants={fadeInUp}>{evt.difficultyLevel}</motion.p>
          <h3>Description: </h3>
          <motion.p variants={fadeInUp}>{evt.description}</motion.p>
          <h4>
            Github Source Code:{" "}
            <Link href={evt.githubSourceCode}>{evt.githubSourceCode}</Link>
          </h4>
          <h4>
            Heroku Demo WebApp:{" "}
            <Link href={evt.herokuDemoWebsite}>{evt.herokuDemoWebsite}</Link>
          </h4>
          Project Started at{" "}
          {new Date(evt.startDate).toLocaleDateString("en-US")} and finished at{" "}
          {new Date(evt.endDate).toLocaleDateString("en-US")}
          <Link href="/events">
            <a className={styles.back}>{"<"} Go Back</a>
          </Link>
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
