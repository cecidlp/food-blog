import React from 'react'
import { Link } from 'react-router-dom'

function IntroDesserts() {
  return (
    <div className='flex flex-wrap mt-20 mx-auto lg:max-w-[1200px] lg:mt-28 px-5'>
        <div className='font-sans text-xs flex tracking-wider mt-5'>
           <Link to={'/'} className='hover:text-[--text-hover] hover:underline decoration-1 decoration-[--text-hover] underline-offset-4 hover:transition-all'>Home</Link><span className='px-1'>·</span><span >Desserts & Baking</span>
        </div>
        <div className='border-b border-[--text]'>
            <h1 className='py-5 font-sans font-bold text-4xl'>Desserts & Baking</h1>
            <p className='text-base mb-8 lg:text-base'>Browse this ever growing collection of desserts and baking recipes. Satisfy all your sweet tooth cravings with recipes for cakes, ice cream, breads and rolls, cookies, as well as pies and tarts. Find a wide selection of breakfast and brunch ideas featuring donuts, puddings, and easy to make pastries. Fan favorite desserts include <a href="" className='font-bold'>banana bread</a>, <a href="" className='font-bold'>medialunas</a>, and <a href="" className='font-bold'>double chocolate chip cookies</a>.</p>
        </div>
    </div>
  )
}

export default IntroDesserts