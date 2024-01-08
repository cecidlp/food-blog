import React from "react";
import { allRecipes, getRecipesByCategory } from "../../RecipesData";
import ViewAll from "../../components/ViewAll";
import PostsBox from "../../components/PostsBox";

function CupcakesMuffins() {
  const muffins = getRecipesByCategory(allRecipes, "Cupcakes & Muffins");
  return (
    <div className="w-full flex flex-col px-5 mb-14 md:px-5 lg:max-w-[1200px] lg:mx-auto">
      <ViewAll title={"Cupcakes & Muffins"} />
      <div className="flex flex-wrap mx-auto lg:max-w-[1200px] gap-x-2 gap-y-4 justify-center md:justify-between">
        {muffins.map((post, index) => {
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

export default CupcakesMuffins;
