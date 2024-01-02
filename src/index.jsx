import React from 'react'
import Navbar from './components/Navbar'
import LastRecipes from './components/LastRecipes'
import BrowserType from './components/BrowserType'
import Footer from './components/Footer'
import HolidayFavs from './components/HolidayFavs'

function Index() {
  return (
    <div>
        <Navbar/>
        <LastRecipes/>
        <BrowserType/>
        <HolidayFavs/>
        <Footer/>
    </div>
  )
}

export default Index