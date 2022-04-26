import * as fs from "fs";
import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";

const Blog = (props) => {
  // console.log(props.data)
  const [blogData, setBlogData] = useState(props.resultData);
  // useEffect(() => {
  //   fetch("http://localhost:3000/api/blog")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setBlogData(data);
  //     });
  // }, []);
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
// export async function getServerSideProps(context) {
//   const res = await fetch(`http://localhost:3000/api/blog`)
//   const data = await res.json()
//   return {
//     props: {data}, // will be passed to the page component as props
//   }
// }

export async function getStaticProps(context) {
  const data = await fs.promises.readdir("blog-post");
  const resultData = [];
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    const myfile = await fs.promises.readFile("blog-post/" + element, "utf8");
    resultData.push(JSON.parse(myfile));
  }
  return {
    props: {resultData}, // will be passed to the page component as props
  }
}
export default Blog;
