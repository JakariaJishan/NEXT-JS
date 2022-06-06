import Link from "next/link";
import React from "react";

const Post = ({ post }) => {
  return (
    <div>
      <h1>{post.slug}</h1>

      <Link href={`/blog/${post.slug}`}>
        <a>
          <button>read more..</button>
        </a>
      </Link>
    </div>
  );
};

export default Post;
