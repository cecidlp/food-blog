import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { dessertBrowser } from "../RecipesData";

function BrowserType() {
  return (
    <div className="px-5 mb-20 mx-5 pt-5 pb-10 border-2 border-[--grey] flex flex-col items-center">
      <div className="flex flex-col items-center pb-5 ">
        <h2 className="font-sans font-bold text-2xl mb-2 mx-auto text-center">
          Browse by Dessert Type
        </h2>
        <div className="flex items-center">
          <a href="" className="flex items-center">
            <h3 className="font-sans text-[0.8rem] font-bold tracking-[1px] pr-1">
              VIEW ALL RECIPES
            </h3>
            <IoArrowForwardCircleOutline />
          </a>
        </div>
      </div>
      <div className="flex flex-wrap justify-around">
        {dessertBrowser.map((card, index) => (
          <div className="flex flex-col items-center my-2 w-1/3" key={index}>
            <img
              src={card.img}
              alt=""
              className="rounded-[50%] object-cover h-[4rem] w-[4rem]"
            />
            <h3 className="text-base font-bold font-sans text-center pt-2">{card.category} </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrowserType;
