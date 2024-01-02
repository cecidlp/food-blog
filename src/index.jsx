import React from 'react'
import Navbar from './components/Navbar'
import BrowserType from './components/BrowserType'
import Footer from './components/Footer'
import HolidayFavs from './components/HolidayFavs'
import NewPosts from './components/NewPosts'
import HighlightContent from './components/HighlightContent'
import ArgRecipes from './components/ArgRecipes'
import Guides from './components/Guides'

function Index() {
  return (
    <div>
        <Navbar/>
        <HighlightContent/>
        <BrowserType/>
        <HolidayFavs/>
        <NewPosts/>
        <ArgRecipes/>
        <Guides/>
        <Footer/>
    </div>
  )
}

export default Index