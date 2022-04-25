import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const BlogPost = () => {
  const router = useRouter();
  const [blog, setBlog] = useState('');
  const { slug } = router.query;
  useEffect(() => {
      fetch(`http://localhost:3000/api/blog-api/?slug=${slug}`)
      .then(res => res.json())
      .then(data => {
          setBlog(data);
      })
  } , [slug])
  return (
    <div>
      <h1> {blog && blog.title}</h1>
      <p>{blog && blog.description}</p>
    </div>
  );
};

export default BlogPost;
