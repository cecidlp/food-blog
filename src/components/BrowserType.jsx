import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { dessertBrowser } from "../RecipesData";

function BrowserType() {
  return (
    <div className="w-full flex flex-col items-center px-5 md:px-5 lg:max-w-[1200px] lg:mx-auto">
      <div className="mb-20 px-5 pt-6 pb-10 border-2 border-[--grey] flex flex-col items-center lg:w-full">
        <div className="flex flex-col items-center pb-5 lg:flex-row lg:w-full lg:justify-between">
          <h2 className="font-sans font-bold text-2xl mb-2 mx-auto text-center lg:mx-0 lg:text-[1.7rem]">
            Browse by Dessert Type
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
        <div className="flex flex-wrap md:gap-2 lg:gap-5 justify-between w-full">
          {dessertBrowser.map((card, index) => (
            <a className="flex flex-col items-center my-2 w-1/3 md:w-auto hover:grayscale-[50%] hover:text-[--text-hover]" key={index} href="">
              <img
                src={card.img}
                alt=""
                className="rounded-[50%] object-cover w-[4rem] h-[4rem] lg:w-[6rem] lg:h-[6rem]"
              />
              <h3 className="text-base font-bold font-sans text-center pt-2 px-1">
                {card.category}{" "}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrowserType;
