import Link from "next/link";
import React from "react";

const Posts = ({ finalData }) => {
  return (
    <div>
      hello world
      {finalData.map((elem) => (
        <div key={elem.id}>
          <Link href={`/posts/${elem.id}`}>
            <a>
              <h1>
                {elem.id} {elem.title}
              </h1>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps(context) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  const finalData = data.slice(0, 5);
  return {
    props: { finalData }, // will be passed to the page component as props
  };
}
export default Posts;
