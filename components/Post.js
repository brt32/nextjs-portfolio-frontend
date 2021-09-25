/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import CategoryLabel from "./CategoryLabel";
import styles from "@/styles/Post.module.css";
import { motion } from "framer-motion";

export default function Post({ post }) {
  return (
    <div className={styles.row}>
      <div className={styles.column}>
        <div className={styles.card}>
          <motion.div
            className={styles.image}
            initial={{ x: 160, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <Image
              src={post.frontmatter.cover_image}
              alt=""
              height={220}
              width={420}
              className={styles.image}
            />
            <div className={styles.category}>
              <span className={styles.date}>{post.frontmatter.date}</span>
            </div>
            <div className={styles.title}>
              <Link href={`/blog/all/${post.slug}`}>
                <a className={styles.title}>{post.frontmatter.title}</a>
              </Link>
            </div>
            <div className={styles.description}>
              <p>{post.frontmatter.excerpt}</p>
            </div>

            <div className={styles.title}>
              <Link href={`/blog/all/${post.slug}`}>
                <a className={styles.title}>Read More</a>
              </Link>
            </div>
            <div className={styles.author_image}>
              <img
                className={styles.author_image}
                src={post.frontmatter.author_image}
                alt=""
                width="15%"
              />
            </div>
            <h3 className={styles.author}>{post.frontmatter.author}</h3>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
