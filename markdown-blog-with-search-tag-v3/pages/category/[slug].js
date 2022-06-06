import matter from "gray-matter";
import React from "react";
const fs = require("fs");
const path = require("path");
const Category = () => {
  return <div>sdf</div>;
};

export default Category;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const {
      data: { categories },
    } = matter(markdownWithMeta);

    const temp = categories.map((category) => {
      return {
        params: {
          slug: category,
        },
      };
    });
    return temp
  });

  console.log(paths)
  return {
    paths,
    fallback: false,
  };
}
