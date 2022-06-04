import { marked } from "marked";
import Link from "next/link";
import React from "react";
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const Slug = ({ data: { title, body }, content, slug }) => {
  return (
    <div>
      <Link href="/">
        <a>
          <button>go back</button>
        </a>
      </Link>
      <h1>{title}</h1>
      <p>{body}</p>
      <div dangerouslySetInnerHTML={{__html: marked(content)}} />
    </div>
  );
};

export default Slug;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const file = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  return {
    paths: file,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const files = fs.readFileSync(
    path.join("posts", params.slug + ".md"),
    "utf-8"
  );
  const { data, content } = matter(files);

  return {
    props: {
      data,
      content,
      slug: params.slug,
    },
  };
}
