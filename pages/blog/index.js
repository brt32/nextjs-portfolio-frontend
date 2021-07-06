import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Link from "next/link";
import Layout from "@/components/Layout";
import Post from "@/components/Post";
import Pagination from "@/components/Pagination";
import { API_URL, PER_PAGE } from "@/config/index";
import { sortByDate } from "../../utils/index";

export default function BlogPage({ posts }) {
  return (
    <Layout>
      <h1 className="blogTitle">My Next Static Blog</h1>
      <h2> Latest Posts </h2>

      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
      <Link href="/blog/all">
        <a>All Posts</a>
      </Link>
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
