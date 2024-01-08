import React, { useState } from "react";
import { allRecipes } from "../../RecipesData";
import PostsLine from "../../components/PostsLine";
import Pagination from "./Pagination";

function LatestsPosts() {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(8)
  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPost = allRecipes.slice(firstPostIndex, lastPostIndex) 

  return (
    <div className="flex flex-wrap flex-col mx-auto lg:max-w-[1200px] px-5 my-14 justify-center">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center pb-5 lg:flex-row lg:w-full lg:justify-between">
          <h2 className="font-sans font-bold text-2xl mb-2 mx-auto text-center lg:mx-0 lg:text-[1.7rem]">
            All posts
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-7 mb-20">
        {currentPost.map((post, index) => {
          return(
            <PostsLine
            key={index}
            img={post.img}
            title={post.title}
            />
          )
        })}
      </div>
      <Pagination totalPosts={allRecipes.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </div>
  );
}

export default LatestsPosts;
