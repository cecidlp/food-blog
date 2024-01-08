import React from "react";
import { allRecipes, getRecipesByCategory } from '../../RecipesData';
import PostsBox from "../../components/PostsBox";
import ViewAll from "../../components/ViewAll";

function HolidayFavs() {
  const holidayFavs = getRecipesByCategory(allRecipes, 'Holiday').slice(2, 8)
  return (
    <div className="w-full flex flex-col px-5 mt-14 md:px-5 lg:max-w-[1200px] lg:mx-auto">
      <ViewAll
      title={'Holiday Favorites'}/>
      <p className="text-xs text-center font-light pb-5 lg:text-base lg:text-left">
          This Christmas elevate your holiday baking experience with our Holiday
          Favorite Recipes. Create cherished moments while decorating
          gingerbread houses or savor the warmth of the Danish butter cookies.
          Embrace the festive spirit and make every bite a celebration!
        </p>
      <div className="flex flex-wrap mx-auto lg:max-w-[1200px] gap-x-2 gap-y-4 md:justify-between">
        {holidayFavs.map((post, index) => {
          return(
            <PostsBox
            key={index}
            img={post.img}
            title={post.title}
            />
          )
        })}
      </div>
    </div>
  );
}

export default HolidayFavs;
