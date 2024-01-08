import React from "react";
import { allRecipes, getRecipesByCategory } from '../../RecipesData';
import PostsBox from "../../components/PostsBox";

function TopDessert() {
    const favDesserts = getRecipesByCategory(allRecipes, 'Favorites')
  return (
    <div className="flex flex-wrap flex-col mt-14 mx-auto lg:max-w-[1200px] lg:mb-10 px-5">
      <h2 className="text-center font-sans font-bold text-2xl mb-8 lg:text-3xl lg:text-left">
        Top Dessert Recipes
      </h2>
      <div className="flex flex-wrap mx-auto lg:max-w-[1200px] gap-x-2 gap-y-4 md:justify-between">
        {favDesserts.map((post, index) => {
          return(
            <PostsBox
            key={index}
            img={post.img}
            title={post.title}/>
          )
        })}
      </div>
    </div>
  );
}

export default TopDessert;
