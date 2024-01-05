import React from "react";
import { highlightContent } from "../../RecipesData";

function HighlightContent() {
  return (
    <div className="flex flex-wrap mt-20 mb-14 mx-auto lg:max-w-[1200px] lg:mt-28 lg:mb-20 px-5 gap-x-2 gap-y-4 justify-center">
      {highlightContent.map((card, index) => (
        <article key={index} className="w-[48%] box-border md:w-[24%]">
          <a href="">
            <img
              src={card.img}
              alt=""
              className="w-full hover:grayscale-[50%]"
            />
            <span className="h-12 w-[1px] bg-[--text] relative block top-[-25px] mb-[-25px] mt-0 mx-auto"></span>
            <h2 className="font-bold font-sans text-xl text-center hover:text-[--text-hover]">
              {card.title}
            </h2>
          </a>
        </article>
      ))}
    </div>
  );
}

export default HighlightContent;
