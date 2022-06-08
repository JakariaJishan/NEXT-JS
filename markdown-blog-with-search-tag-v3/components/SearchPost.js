import Link from "next/link";
import React from "react";

const SearchPost = ({ post }) => {
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.description}</p>

      <div>
        {post.frontmatter.categories.map((category) => (
          <Link href={`/category/${category}`} key={category}>
            <a>
              <small>#{category}</small>
            </a>
          </Link>
        ))}
      </div>

      <Link href={`/blog/${post.slug}`}>
        <a>read more..</a>
      </Link>
    </div>
  );
};

export default SearchPost;
