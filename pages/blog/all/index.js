import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "@/components/Layout";
import Post from "@/components/Post";
import { sortByDate } from "../../../utils/index";

export default function AllBlogPage({ posts }) {
  return (
    <Layout>
      <h1 className="blogTitle"> All Posts </h1>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </Layout>
  );
}

export async function getServerSideProps({}) {
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
