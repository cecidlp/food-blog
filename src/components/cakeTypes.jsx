import React from "react";
import ViewAll from "./ViewAll"; 
import { cakeBrowser } from "../RecipesData";

function cakeTypes() {
  return (
    <div className="w-full relative items-center px-5 mt-14 md:px-5 lg:max-w-[1200px] lg:mx-auto">
      <div className="px-5 pt-6 pb-10 border-2 border-[--grey] flex flex-col lg:w-full">
        <ViewAll
        title={'Browse Cake Recipes'}/>
        <div className="grid grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-3 lg:grid-cols-6">
          {cakeBrowser.map((card, index) => (
            <a
              className="flex flex-col items-center my-2 md:w-auto hover:grayscale-[50%] hover:text-[--text-hover]"
              key={index}
              href=""
            >
              <img
                src={card.img}
                alt={card.category}
                className="rounded-[50%] h-auto max-w-full aspect-square object-cover "
              />
              <h3 className="text-base font-bold font-sans text-center pt-2 px-1">
                {card.category}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default cakeTypes;
