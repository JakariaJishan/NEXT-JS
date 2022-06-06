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
  const tempdata = [];
  const tempPaths = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const {
      data: { categories },
    } = matter(markdownWithMeta);

    categories.map((category) => {
      tempdata.push({ params: { slug: category } });
    });
  });

  return {
    paths: tempdata,
    fallback: false,
  };
}

export async function getStaticProps({params:{slug}}) {
    
    return {

    }
}