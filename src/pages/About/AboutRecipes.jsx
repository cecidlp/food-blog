import React from "react";

function AboutRecipes() {
  return (
    <div className="mb-14">
    <div className="flex flex-col mt-10 px-5  md:mx-auto lg:max-w-[900px]">
      <h2 className="text-center font-sans font-bold text-4xl mb-8">
        About the recipes
      </h2>
      <p className="text-base mb-8 lg:px-6 lg:text-lg">
        As a classically trained pastry chef, I share from-scratch recipes using
        real ingredients. Blog posts will often provide insights to the science
        of baking, ingredient intel, and cooking techniques. <br /><br />I hope to share
        with you the joys of baking and home cooking through approachable,
        reliable recipes. Each recipe shared on this blog has been tested at
        least three times for accuracy and success. <br /><br /> With the growing popularity
        of global flavors and the accessibility of once exotic ingredients, I
        will share with you my knowledge of Latin America cuisine. Drawing from my
        Argentinian heritage, I periodically create recipes that highlight South America's
        flavors.
      </p>
    </div>
    <div className="flex flex-row justify-between">
        <img src="https://images.pexels.com/photos/6341564/pexels-photo-6341564.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="w-1/3 max-w-[calc(100vw/3-16px)]"/>
        <img src="https://images.pexels.com/photos/4099127/pexels-photo-4099127.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="w-1/3 max-w-[calc(100vw/3-16px)]"/>
        <img src="https://images.pexels.com/photos/3893691/pexels-photo-3893691.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="w-1/3 max-w-[calc(100vw/3-17px)]"/>
    </div>
    </div>
  );
}

export default AboutRecipes;
