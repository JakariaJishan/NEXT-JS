import * as fs from "fs";
import React, { useState } from "react";

const BlogPost = (props) => {
  // const router = useRouter();
  const [blog, setBlog] = useState(props.data);
  // const { slug } = router.query;
  // useEffect(() => {
  //     fetch(`http://localhost:3000/api/blog-api/?slug=${slug}`)
  //     .then(res => res.json())
  //     .then(data => {
  //         setBlog(data);
  //     })
  // } , [slug])
  return (
    <div>
      <h1> {blog && blog.title}</h1>
      <p>{blog && blog.description}</p>
    </div>
  );
};

// export async function getServerSideProps(context) {
//   const { slug } = context.query;
//   const res = await fetch(`http://localhost:3000/api/blog-api/?slug=${slug}`);
//   const data = await res.json();

//   // Pass data to the page via props
//   return { props: { data } };
// }
export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'js-dev' } },
      { params: { slug: 'nextjs-dev' } },
      { params: { slug: 'react-dev' } },
    ],
    fallback: true // false or 'blocking'
  };
}
export async function getStaticProps(context) {
  const {slug} = context.params;
  const res = await fs.promises.readFile(`blog-post/${slug}.json`, "utf8");
 
  
  return {
    props: {data: JSON.parse(res) }, // will be passed to the page component as props
  }
}
export default BlogPost;
