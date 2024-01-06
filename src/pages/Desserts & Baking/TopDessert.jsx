import React from "react";
import { allRecipes, getRecipesByCategory } from '../../RecipesData';


function TopDessert() {
    const favDesserts = getRecipesByCategory(allRecipes, 'Favorites')
  return (
    <div className="flex flex-wrap flex-col mt-14 mx-auto lg:max-w-[1200px] lg:mb-10 px-5">
      <h2 className="text-center font-sans font-bold text-2xl mb-8 lg:text-3xl lg:text-left">
        Top Dessert Recipes
      </h2>
      <div className="flex flex-wrap mx-auto lg:max-w-[1200px] gap-x-2 gap-y-4 md:justify-between">
        {favDesserts.map((card, index) => (
          <article
            key={index}
            className="w-[48%] box-border border-[1px] border-[--grey] md:w-[32%] lg:w-[15%] hover:grayscale-[50%] hover:text-[--text-hover]"
          >
            <a href="">
              <img src={card.img} alt="" className="object-cover h-[73%] md:h-[78%] w-full"/>
              <h3 className="font-sans font-bold text-base md:text-xl text-center p-[10px]">
                {card.title}
              </h3>
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}

export default TopDessert;
