import React from "react";
import { allRecipes, getRecipesByCategory } from "../../RecipesData";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

function CupcakesMuffins() {
  const muffins = getRecipesByCategory(allRecipes, "Cupcakes & Muffins");
  return (
    <div className="w-full flex flex-col items-center px-5 mb-14 md:px-5 lg:max-w-[1200px] lg:mx-auto">
      <div className="flex flex-col w-full">
        <div className="flex flex-col items-center pb-5 lg:flex-row lg:w-full lg:justify-between">
          <h2 className="font-sans font-bold text-2xl mb-2 mx-auto text-center lg:mx-0 lg:text-[1.7rem]">
            Cupcakes & Muffins
          </h2>
          <div className="flex items-center">
            <a href="" className="flex items-center hover:text-[--text-hover]">
              <h3 className="font-sans text-[0.8rem] font-bold tracking-[1px] pr-1 ">
                VIEW MORE RECIPES
              </h3>
              <IoArrowForwardCircleOutline />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mx-auto lg:max-w-[1200px] gap-x-2 gap-y-4 justify-center md:justify-between">
        {muffins.map((card, index) => (
          <article
            key={index}
            className="w-[48%] box-border border-[1px] border-[--grey] md:w-[15%] lg:w-[15%] hover:grayscale-[50%] hover:text-[--text-hover]"
          >
            <a href="">
              <img
                src={card.img}
                alt=""
                className="object-cover h-52 md:h-40 lg:h-64"
              />
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

export default CupcakesMuffins;
