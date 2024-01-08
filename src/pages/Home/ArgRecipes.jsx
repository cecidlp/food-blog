import React from "react";
import { allRecipes, getRecipesByCategory } from '../../RecipesData';
import PostsBox from "../../components/PostsBox";
import ViewAll from "../../components/ViewAll";

function ArgRecipes() {
  const argRecipes = getRecipesByCategory(allRecipes, 'Argentine')
  console.log(argRecipes)

  return (
    <div className="w-full flex flex-col px-5 mt-14 md:px-5 lg:max-w-[1200px] lg:mx-auto">
      <ViewAll
      title={'Argentinian Recipes'}/>
      <p className="text-xs text-center font-light pb-5 lg:text-base lg:text-left">
          Browse this growing collection of Argentinian recipes. Find family
          recipes as well as modern interpretation of classic Argentinean
          recipes. Start with the popular chocotorta cake. Satisfy your sweet
          tooth with chocolate alfajores, medialunas, and dulce de leche!
        </p>
      <div className="flex flex-wrap mx-auto lg:max-w-[1200px] gap-x-2 gap-y-4 justify-center md:justify-between">
        {argRecipes.map((post, index) => {
          return(
            <PostsBox
            key={index}
            img={post.img}
            title={post.title}
            />
          )
        }
        )}
      </div>
    </div>
  );
}

export default ArgRecipes;
