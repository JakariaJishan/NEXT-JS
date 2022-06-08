import { useRouter } from "next/router";
import React from "react";
import SearchPost from "../components/SearchPost";
import search from "../search.json";

const Search = () => {
  const {
    query: { q },
  } = useRouter();
  const tempPosts = [];

  search.map((post) => {
    if (
      post.frontmatter.title.toLocaleLowerCase().includes(q) ||
      post.frontmatter.summary.toLocaleLowerCase().includes(q) ||
      post.frontmatter.description.toLocaleLowerCase().includes(q)
    ) {
      tempPosts.push(post);
    }
  });

  console.log(tempPosts);
  return (
    <div>{tempPosts.length > 0 ? tempPosts.map((post, index) => (
        <SearchPost key={index} post={post}/>
    )) : "nothing found"}</div>
  );
};

export default Search;
