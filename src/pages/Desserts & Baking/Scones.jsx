import React from 'react'
import { allRecipes, getRecipesByCategory } from "../../RecipesData";
import ViewAll from '../../components/ViewAll' 
import PostsTag from '../../components/PostsTag';


function Scones() {
  const scones = getRecipesByCategory(allRecipes, 'Scones').slice(0,3)
    return (
    <div className="flex flex-wrap flex-col mx-auto px-5 lg:max-w-[1200px] my-14 justify-center">
      <ViewAll
      title={'Scones and Biscuits'}
      />
      <div className="flex flex-col md:flex-row md:justify-between">
        {scones.map((post, index) => {
          return(
            <PostsTag
            key={index}
            img={post.img}
            title={post.title}
            categories={post.categories}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Scones