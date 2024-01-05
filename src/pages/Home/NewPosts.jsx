import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { newPosts } from "../../RecipesData";

function NewPosts() {
  return (
    <div className="flex flex-wrap flex-col mb-14 mx-auto px-5 lg:max-w-[1200px] lg:my-24 justify-center">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center pb-5 lg:flex-row lg:w-full lg:justify-between">
          <h2 className="font-sans font-bold text-2xl mb-2 mx-auto text-center lg:mx-0 lg:text-[1.7rem]">
            Brand New Posts
          </h2>
          <div className="flex items-center">
            <a href="" className="flex items-center hover:text-[--text-hover]">
              <h3 className="font-sans text-[0.8rem] font-bold tracking-[1px] pr-1 ">
                VIEW ALL RECIPES
              </h3>
              <IoArrowForwardCircleOutline />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between">
        {newPosts.map((card, index) => (
          <article key={index} className="relative md:w-[32%] pb-4 md:pb-0 ">
            <a href="">
              <img
                src={card.img}
                className="h-auto max-w-full hover:grayscale-[50%] "
              />
              <div className="pb-5 px-5 bg-white border-b-4 border-[--text] absolute left-5 right-5 bottom-9 text-center font-sans">
                <div className="bg-[--text] text-white p-3 font-bold text-xs relative mt-[-10px] mb-0 mx-auto w-fit block">
                  <p className="hover:text-[--text-hover]">{card.category}</p>
                </div>

                <h3 className="font-bold text-xl pt-2 hover:text-[--text-hover]">
                  {card.title}
                </h3>
              </div>
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}

export default NewPosts;
