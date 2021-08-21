import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "@/styles/EventItem.module.css";

export default function EventItem({ evt }) {
  const easing = [0.6, -0.05, 0.01, 0.99];

  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
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
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div variants={stagger}>
      <motion.div variants={fadeInUp} className={styles.event}>
        <motion.div className={styles.img}>
          <motion.img
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            src={
              evt.image
                ? evt.image.formats.thumbnail.url
                : "/images/event-default.png"
            }
            width={170}
            height={100}
            alt={evt.title}
          ></motion.img>

          {/* <Image
            src={
              evt.image
                ? evt.image.formats.thumbnail.url
                : "/images/event-default.png"
            }
            width={170}
            height={100}
            alt={evt.title}
          /> */}
        </motion.div>
        <motion.div variants={fadeInUp} className={styles.info}>
          <span>
            Finished at {new Date(evt.endDate).toLocaleDateString("en-US")}{" "}
            since {new Date(evt.startDate).toLocaleDateString("en-US")}
          </span>
          <h3>
            <Link href={`/events/${evt.slug}`} className={styles.title}>
              <a className={styles.title}> {evt.title}</a>
            </Link>
          </h3>
          <h5>Created by: {evt.user.username}</h5>
        </motion.div>
        <div className={styles.link}>
          <Link href={`/events/${evt.slug}`}>
            <a className="btn btn-dark btn-lg">Details</a>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
