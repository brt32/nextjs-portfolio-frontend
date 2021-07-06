/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import CategoryLabel from "./CategoryLabel";
import styles from "@/styles/Post.module.css";

export default function Post({ post }) {
  return (
    <div className={styles.row}>
      <div className={styles.column}>
        <div className={styles.card}>
          <div className={styles.image}>
            <Image
              src={post.frontmatter.cover_image}
              alt=""
              height={220}
              width={420}
            />
            <div className={styles.category}>
              <span className={styles.date}>{post.frontmatter.date}</span>
              <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
            </div>
            <div className={styles.title}>
              <Link href={`/blog/all/${post.slug}`}>
                <a>{post.frontmatter.title}</a>
              </Link>
              <p>{post.frontmatter.excerpt}</p>
            </div>
            <div className="flex justify-between items-center mt-6">
              <Link href={`/blog/all/${post.slug}`}>
                <a>Read More</a>
              </Link>
              <div className="flex items-center">
                <img src={post.frontmatter.author_image} alt="" />
                <h3 className="text-gray-700 font-bold">
                  {post.frontmatter.author}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
