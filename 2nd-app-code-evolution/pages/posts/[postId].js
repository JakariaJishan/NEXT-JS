import React from "react";

const Post = ({ data }) => {
  return (
    <div>
      this is post page
      <h1>
        {data.id} {data.title}
      </h1>
      <p>{data.body}</p>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  const paths = data.map((elem) => {
    return {
      params: { postId: `${elem.id}` },
    };
  });

  return {
    // paths: [
    //   { params: { postId: "1" } },
    //   { params: { postId: "2" } },
    //   { params: { postId: "3" } },
    //   { params: { postId: "4" } },
    //   { params: { postId: "5" } },
    // ]

    paths,
    fallback: true, // false or 'blocking'
  };
}
export async function getStaticProps(context) {
  const { postId } = context.params;
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + postId
  );
  const data = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}
export default Post;
