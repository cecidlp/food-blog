import React from "react";
import { allRecipes, getRecipesByCategory } from "../../RecipesData";
import ViewAll from "../../components/ViewAll";
import PostsLine from "../../components/PostsLine";

function Cookies() {
  const cookies = getRecipesByCategory(allRecipes, "Cookies").slice(3, 7);
  return (
    <div className="flex flex-wrap flex-col mx-auto lg:max-w-[1200px] px-5 mt-14 justify-center">
      <ViewAll title={"Top Cookies Recipes"} />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-7">
        {cookies.map((post, index) => {
          return <PostsLine key={index} img={post.img} title={post.title} />;
        })}
      </div>
    </div>
  );
}

export default Cookies;
