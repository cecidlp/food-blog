import React from "react";
import { allRecipes } from "../../RecipesData";

function LatestsPosts() {
  return (
    <div className="flex flex-wrap flex-col mx-auto lg:max-w-[1200px] px-5 my-14 justify-center">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center pb-5 lg:flex-row lg:w-full lg:justify-between">
          <h2 className="font-sans font-bold text-2xl mb-2 mx-auto text-center lg:mx-0 lg:text-[1.7rem]">
            Latests posts
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-7">
        {allRecipes.map((card, index) => (
          <article key={index}>
            <a href="">
              <img
                src={card.img}
                alt=""
                className="w-full hover:grayscale-[50%] h-[70%] md:h-[83%] object-cover"
              />
              <span className="h-12 w-[1px] bg-[--text] relative block top-[-25px] mb-[-25px] mt-0 mx-auto"></span>
              <h2 className="font-bold font-sans text-base md:text-xl text-center hover:text-[--text-hover]">
                {card.title}
              </h2>
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}

export default LatestsPosts;
