import React from "react";
import { allRecipes, getRecipesByCategory } from '../../RecipesData';
import PostsLine from "../../components/PostsLine";

function HighlightContent() {
  const highlightContent = getRecipesByCategory(allRecipes, 'Highlight')
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-7 mt-20 mb-14 mx-auto lg:max-w-[1200px] lg:mt-28 lg:mb-20 px-5">
      {highlightContent.map((post, index) => {
        return (
        <PostsLine 
        key={index}
        img={post.img}
        title={post.title} 
        />
        )
      })}
    </div>
  );
}

export default HighlightContent;
