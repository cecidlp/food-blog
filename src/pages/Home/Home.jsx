import React from "react";
import ArgRecipes from "./ArgRecipes";
import BrowserType from "../../components/BrowserType";
import HighlightContent from "./HighlightContent";
import NewPosts from "./NewPosts";
import Guides from "./Guides";
import HolidayFavs from "./HolidayFavs";

function Home() {
  return (
    <div>
      <HighlightContent />
      <BrowserType />
      <HolidayFavs />
      <NewPosts />
      <ArgRecipes />
      <Guides />
    </div>
  );
}

export default Home;
