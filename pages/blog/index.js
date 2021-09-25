import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import styles from "@/styles/Index.module.css";
import Layout from "@/components/Layout";
import Post from "@/components/Post";
import { sortByDate } from "../../utils/index";

export default function BlogPage({ posts }) {
  return (
    <Layout>
      <h2 className={styles.title}>Static Markdown Blog</h2>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
      <div className={styles.btn}>
        <Link href="/events">
          <a className="btn-secondary">View All Projects</a>
        </Link>
      </div>
    </Layout>
  );
}

export async function getStaticProps({}) {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: { posts: posts.sort(sortByDate).slice(0, 6) },
  };
}
