/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import CategoryLabel from "./CategoryLabel";

export default function Post({ post }) {
  return (
    <div>
      <Image
        src={post.frontmatter.cover_image}
        alt=""
        height={420}
        width={620}
      />
      <div className="flex, justify-between items-center">
        <span className="font-light text-gray-600">
          {post.frontmatter.date}
        </span>
        <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
      </div>
      <div>
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
          <h3 className="text-gray-700 font-bold">{post.frontmatter.author}</h3>
        </div>
      </div>
    </div>
  );
}
