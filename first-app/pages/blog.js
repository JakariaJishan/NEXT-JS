import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/blog")
      .then((res) => res.json())
      .then((data) => {
        setBlogData(data);
      });
  }, []);
  //   console.log(blogData);
  return (
    <div>
      {blogData.map((elem) => {
        return (
          <div key={elem.title} className={styles.link}>
            <Link href={`/blog-post/${elem.slug}`}>
              <a >
                <h1>{elem.title}</h1>
                <p>{elem.description}</p>
              </a>
            </Link>
          </div>
        );
      })}
      asdf
    </div>
  );
};

export default Blog;
