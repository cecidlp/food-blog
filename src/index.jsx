import React from 'react'
import Navbar from './components/Navbar'
import LastRecipes from './components/LastRecipes'
import BrowserType from './components/BrowserType'
import Footer from './components/Footer'

function Index() {
  return (
    <div>
        <Navbar/>
        <LastRecipes/>
        <BrowserType/>
        <Footer/>
    </div>
  )
}

export default Index