import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Link from "next/link";
import Layout from "@/components/Layout";
import Post from "@/components/Post";
import EventItem from "@/components/EventItem";
import Pagination from "@/components/Pagination";
import { API_URL, PER_PAGE } from "@/config/index";
import { sortByDate } from "../../../utils/index";

export default function AllBlogPage({ posts }) {
  return (
    <Layout>
      <h1> All Posts </h1>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
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
    props: { posts: posts.sort(sortByDate) },
  };
}
