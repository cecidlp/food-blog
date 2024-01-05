import React from 'react'
import profile from '../../assets/profile.jpg'

function Intro() {
  return (
    <div className="flex flex-col px-5 mt-24 md:mx-auto lg:mt-28">
      <h1 className="text-center font-sans font-bold text-4xl mb-8">About</h1>
      <div className='lg:flex lg:flex-row lg:max-w-[1200px] mx-auto'>
      <img
        src={profile}
        alt="Profile photo"
        className="object-cover mb-8 lg:h-[500px] lg:w-[700px]"
      />
      <p className="text-base mb-8 lg:px-6 lg:text-lg">
        Hello there and welcome! I’m Margarita and I'm <strong>Ahead of Thyme</strong>. <br/> <br/> This recipe site focuses on baking, desserts, and drinks. In a nutshell, I like to create treats that make life sweet! 
        <br/> <br/> Growing up, I spent hours watching my mother and grandmother work their baking magic in the kitchen, especially their Argentinian recipes such as <strong>medialunas and empanadas</strong>. 
        <br /><br />As a self-taught home baker myself, I’m fiercely dedicated to providing well-tested recipes and sharing everything I’ve learned along the way. Before I post a new recipe, you can feel confident that I have already tested it dozens of times in my own kitchen
      </p>
      </div>
    </div>
  )
}

export default Intro