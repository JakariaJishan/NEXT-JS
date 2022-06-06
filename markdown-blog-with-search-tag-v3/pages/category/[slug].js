import matter from "gray-matter";
import Link from 'next/link';
import React from "react";
const fs = require("fs");
const path = require("path");

const Category = ({data, optionalSlug}) => {
  return <div>
    {data.map((item, index) => (
      <div key={index}>
        <h1>{item.data.title}</h1>
        {item.data.categories.map((category, index) =>(
          <small key={index}> #{category}</small>
        ))}
        <Link href={`/blog/${item.optionalSlug}`}>
          <a >
            <button>read more..</button>
          </a>
        </Link>
      </div>
    ))}
  </div>;
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
    const files = fs.readdirSync(path.join("posts"));
    let tempStorage = [];
    const tempPosts = files.map(filename => {
      const markdownWithMeta = fs.readFileSync(path.join("posts", filename), "utf8")
      const optionalSlug =filename.replace(".md", "");
      const {data} = matter(markdownWithMeta)
      data.categories.map(category => {
        if(slug === category){
          tempStorage.push({data, optionalSlug})
        }
      })
    })
    return {
      props:{ data: tempStorage}
    }
}