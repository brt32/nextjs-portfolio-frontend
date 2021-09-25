// import fs from "fs";
// import path from "path";
import matter from "gray-matter";
import { sortByDate } from "../utils/index";
import styles from "@/styles/Index.module.css";
import Layout from "@/components/Layout";
import Post from "@/components/Post";
import EventItem from "@/components/EventItem";
import Link from "next/link";
import { motion } from "framer-motion";
import { API_URL } from "@/config/index";

export default function HomePage({ events, posts }) {
  console.log(events);
  console.log(posts);
  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <Layout>
        <h1 className={styles.title}>Upcoming Projects</h1>
        {events.length === 0 && <h3>No upcoming projects to show...</h3>}

        {events.length > 0 &&
          events.map((evt) => <EventItem key={evt.id} evt={evt} />)}

        {events.length > 0 && (
          <div className={styles.btn}>
            <Link href="/events">
              <a className="btn-secondary">View All Projects</a>
            </Link>
          </div>
        )}

        {/* <h1 className={styles.latest}>Latest Blog Posts</h1>
        {posts.length === 0 && <h3>No blog posts here...</h3>}
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
        {posts.length > 0 && (
          <div className={styles.btn}>
            <Link href="/blog">
              <a className="btn-secondary">View All Blog Posts</a>
            </Link>
          </div>
        )} */}
      </Layout>
    </motion.div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `${API_URL}/events?isUpcoming=true&_sort=startDate:ASC&_limit=3`
  );
  const events = await res.json();

  // const files = fs.readdirSync(path.join("posts"));

  // const posts = files.map((filename) => {
  //   const slug = filename.replace(".md", "");

  //   const markdownWithMeta = fs.readFileSync(
  //     path.join("posts", filename),
  //     "utf-8"
  //   );

  //   const { data: frontmatter } = matter(markdownWithMeta);

  //   return {
  //     slug,
  //     frontmatter,
  //   };
  // });

  // return {
  //   props: { events, posts: posts.sort(sortByDate).slice(0, 3) },
  //   revalidate: 1,
  // };

  return {
    props: { events },
  };
}
