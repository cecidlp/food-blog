import React from "react";
import BrowserIngredient from "../../components/BrowserIngredient";
import { recipeIndex } from "../../RecipesData";

function IngredientIndex() {
  return (
    <div className="flex flex-col px-5 mt-24 lg:mt-28 mx-auto my-14">
      <div className="lg:max-w-[800px] md:mx-auto ">
        <h1 className="text-center font-sans font-bold text-4xl mb-8">
          Ingredient Index
        </h1>
        <div className="lg:flex lg:flex-row mx-auto">
          <p className="text-base text-center mb-8 lg:text-lg">
            Browse through the most commonly used fruits, vegetables, grains,
            and fats used in baking and cooking. Learn to prepare delicious
            meals and desserts using fresh and seasonal ingredients.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-y-5 gap-x-5 border-2 p-5 md:grid-cols-4 lg:max-w-[1200px] mx-auto">
        {recipeIndex.map((category, index) => {
          return (
            <BrowserIngredient
              key={index}
              img={category.img}
              category={category.category}
            />
          );
        })}
      </div>
    </div>
  );
}

export default IngredientIndex;
