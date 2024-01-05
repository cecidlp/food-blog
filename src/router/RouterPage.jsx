import React from 'react'
import {Routes, Route} from 'react-router'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import DessertsBaking from '../pages/Desserts & Baking/DessertsBaking'

const RouterPage = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>}/>
            <Route path='/desserts' element={<DessertsBaking/>} />
            <Route path='*' element={<h2>Error 404: Page not found</h2>} />
        </Routes>
    </div>
  )
}

export default RouterPage