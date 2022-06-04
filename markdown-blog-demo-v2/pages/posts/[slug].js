import React from "react";
const fs = require("fs");
const path = require("path");
const Slug = () => {
  return <div>the slug page</div>;
};

export default Slug;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const file = files.map((filename) =>({ 
     params: { 
         slug: filename.replace(".md", "")
     }
  }));
  return {
    paths: file,
    fallback: false
  };
}

export async function getStaticProps({params}) {
    console.log(params.slug)
    return {
        props: 'sdf'
    }
}