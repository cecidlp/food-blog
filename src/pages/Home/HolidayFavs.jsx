import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { holidayFavs } from "../../RecipesData";

function HolidayFavs() {
  return (
    <div className="w-full flex flex-col items-center px-5 mb-14 md:px-5 lg:max-w-[1200px] lg:mx-auto">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center pb-5 lg:flex-row lg:w-full lg:justify-between">
          <h2 className="font-sans font-bold text-2xl mb-2 mx-auto text-center lg:mx-0 lg:text-[1.7rem]">
            Holiday Favorites
          </h2>
          <div className="flex items-center">
            <a href="" className="flex items-center hover:text-[--text-hover]">
              <h3 className="font-sans text-[0.8rem] font-bold tracking-[1px] pr-1 ">
                VIEW MORE TREATS
              </h3>
              <IoArrowForwardCircleOutline />
            </a>
          </div>
        </div>
        <p className="text-xs text-center font-light pb-5 lg:text-base lg:text-left">
          This Christmas elevate your holiday baking experience with our Holiday
          Favorite Recipes. Create cherished moments while decorating
          gingerbread houses or savor the warmth of the Danish butter cookies.
          Embrace the festive spirit and make every bite a celebration!
        </p>
      </div>
      <div className="flex flex-wrap mx-auto lg:max-w-[1200px] gap-x-2 gap-y-4 justify-center md:justify-between">
        {holidayFavs.map((card, index) => (
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

export default HolidayFavs;
