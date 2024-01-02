import React from "react";
import { lastRecipes } from "../RecipesData";

function LastRecipes() {
  return (
    <div className="flex flex-wrap my-20 mx-auto lg:max-w-[1200px] lg:my-24 px-5 gap-x-2 gap-y-4 justify-center">
      {lastRecipes.map((card, index) => (
        <a key={index} className="w-[48%] box-border md:w-[24%]" href="">
          <img src={card.img} alt="" className="w-full hover:grayscale-[50%]" />
          <span className="h-12 w-[1px] bg-[--text] relative block top-[-25px] mb-[-25px] mt-0 mx-auto"></span>
          <h2 className="font-bold font-sans text-xl text-center hover:text-[--text-hover]">
            {card.title}
          </h2>
        </a>
      ))}
    </div>
  );
}

export default LastRecipes;
