import React from "react";
import ViewAll from "../../components/ViewAll";
import { allRecipes, getRecipesByCategory } from '../../RecipesData';
import PostsTag from "../../components/PostsTag";

function NewPosts() {
  const newPosts = getRecipesByCategory(allRecipes, 'New')
  return (
    <div className="flex flex-wrap flex-col mt-14 mx-auto px-5 lg:max-w-[1200px] justify-center">
      <ViewAll
      title={'Brand New Recipes'}/>
      <div className="flex flex-col md:flex-row md:justify-between">
        {newPosts.map((post, index) => {
          return(
            <PostsTag
            key={index}
            img={post.img}
            categories={post.categories[1]}
            title={post.title}/>
          )
        })}
      </div>
    </div>
  );
}

export default NewPosts;
