import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import React from "react";
const path = require("path");
const fs = require("fs");
const Blog = ({ data: { categories }, content, slug }) => {
  return (
    <div>
      {slug}
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category}`}>
          <p>#{category}</p>
        </Link>
      ))}
      <div dangerouslySetInnerHTML={{ __html: marked.parse(content) }}></div>
    </div>
  );
};

export default Blog;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => {
    // const markdownWithMeta = fs.readFileSync(path.join('posts', filename ), 'utf-8')
    // const {data} = matter(markdownWithMeta)
    const slug = filename.replace(".md", "");
    return {
      params: { slug },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );
  const { data, content } = matter(markdownWithMeta);
  return {
    props: {
      data,
      content,
      slug,
    },
  };
}
