import React from 'react'

const BrowserIngredient = ({img, category}) => {
  return (
        <a href="" className='flex items-center justify-center hover:text-[--text-hover]'><img src={img} alt="" className='aspect-square object-cover w-full hover:grayscale-[50%] '/><span className='bg-white z-30 p-[10px] text-center text-base font-bold block font-sans absolute max-w-[30%] left-auto right-auto '>{category}</span></a>       
  )
}

export default BrowserIngredient