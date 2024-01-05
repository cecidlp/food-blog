import React from "react";
import { favDesserts } from "../../RecipesData";


function TopDessert() {
  return (
    <div className="flex flex-wrap mt-20 mb-14 mx-auto lg:max-w-[1200px] lg:mt-28 lg:mb-20 px-5 justify-center">
      <h2 className="text-center font-sans font-bold text-2xl mb-8">
        Top Dessert Recipes
      </h2>
      <div className="flex flex-wrap mx-auto lg:max-w-[1200px] gap-x-2 gap-y-4 justify-center md:justify-between">
        {favDesserts.map((card, index) => (
          <article
            key={index}
            className="w-[48%] box-border border-[1px] border-[--grey] md:w-[32%] lg:w-[15%] hover:grayscale-[50%] hover:text-[--text-hover]"
          >
            <a href="">
              <img src={card.img} alt="" />
              <h3 className="font-sans font-bold text-base text-center p-[10px]">
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
