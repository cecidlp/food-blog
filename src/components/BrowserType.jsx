import React from "react";
import { dessertBrowser } from "../RecipesData";
import ViewAll from "./ViewAll";

function BrowserType() {
  return (
    <div className='flex flex-wrap mx-auto lg:max-w-[1200px] px-5'>
      <div className="px-5 pt-6 pb-10 border-2 border-[--grey] flex flex-col  lg:w-full">
        <ViewAll title={"Browse By Dessert Type"} />
        <div className="grid grid-cols-3 gap-x-4 gap-y-4 md:grid-cols-9">
          {dessertBrowser.map((card, index) => (
            <a
              className="flex flex-col items-center my-2 md:w-auto hover:grayscale-[50%] hover:text-[--text-hover]"
              key={index}
              href=""
            >
              <img
                src={card.img}
                alt=""
                className="rounded-[50%] h-auto max-w-full aspect-square object-cover"
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
